const {
    withAndroidManifest,
    createRunOncePlugin,
  } = require('@expo/config-plugins');
  
  // Lista por defecto de permisos a eliminar
  const DEFAULT_BLOCKED_PERMISSIONS = [
    'android.permission.READ_EXTERNAL_STORAGE',
    'android.permission.WRITE_EXTERNAL_STORAGE',
    'android.permission.SYSTEM_ALERT_WINDOW',
  ];
  
  function setCustomPermissions(androidManifest, blockedPermissions = DEFAULT_BLOCKED_PERMISSIONS) {
    if (androidManifest.manifest['uses-permission']) {
      androidManifest.manifest['uses-permission'] =
        androidManifest.manifest['uses-permission'].filter((p) => {
          const name = p.$['android:name'];
          return !blockedPermissions.includes(name);
        });
    }
    return androidManifest;
  }
  
  const withCustomPermissions = (config, blockedPermissions) => {
    return withAndroidManifest(config, (config) => {
      config.modResults = setCustomPermissions(config.modResults, blockedPermissions);
      return config;
    });
  };
  
  // Envuelto para que se ejecute de manera segura en Expo/EAS
  module.exports = createRunOncePlugin(
    withCustomPermissions,
    'with-custom-permissions',
    '1.0.0'
  );
  