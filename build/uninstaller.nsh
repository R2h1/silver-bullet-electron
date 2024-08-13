!macro customUnInstall
  ${ifNot} ${isUpdated}
    MessageBox MB_OKCANCEL "是否删除用户数据?" IDOK label_ok  IDCANCEL  label_cancel
    label_ok:
      SetShellVarContext current
      RMDir /r "$APPDATA\${APP_FILENAME}"
      !ifdef APP_PRODUCT_FILENAME
        RMDir /r "$APPDATA\${APP_PRODUCT_FILENAME}"
      !endif
      !ifdef APP_PACKAGE_NAME
        RMDir /r "$APPDATA\${APP_PACKAGE_NAME}"
      !endif
      SetShellVarContext all
      Goto end
    label_cancel:
      Goto end
    end:
  ${endif}
!macroend
