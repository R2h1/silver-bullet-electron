import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow(): void {
  // 创建浏览窗口.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // 基于 electron-vite 脚手架的渲染器的热替换（HMR）
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    // 加载用于开发的远程URL
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    // 加载用于生产的本地 html 文件
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// 当 Electron 完成初始化并准备创建浏览器窗口时，将调用此方法。有些 api 只能在此事件发生后使用。
app.whenReady().then(() => {
  // 为窗口设置应用用户模型 id
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // 在开发中默认使用 F12 快捷键 打开或关闭 DevTools，而在生产中忽略 commandOrControl + R 快捷键。
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // 进程间通信（IPC）测试
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    // 在 macOS 上，当点击 dock 图标而没有打开其他窗口时，在应用程序中重新创建一个窗口是很常见的。
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// 当所有窗口都关闭时退出，除了 macOS（应用程序和它们的菜单栏通常保持活动状态，直到用户使用 Cmd + Q 显式退出）。
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 此文件可以包括应用程序的其余特定主进程代码，也可以将它们放在单独的文件中并引入到这里
