// withCustomPermissions.js
const { withAndroidManifest } = require('@expo/config-plugins');

function withCustomPermissions(config) {
  return withAndroidManifest(config, (config) => {
    const manifest = config.modResults;

    // Verifica si hay permisos declarados
    if (manifest.manifest['uses-permission']) {
      // Filtramos los permisos que NO queremos
      manifest.manifest['uses-permission'] = manifest.manifest['uses-permission']
        .filter((p) => {
          const name = p.$['android:name'];
          return ![
            'android.permission.READ_EXTERNAL_STORAGE',
            'android.permission.WRITE_EXTERNAL_STORAGE',
            'android.permission.SYSTEM_ALERT_WINDOW'
          ].includes(name);
        });
    }

    return config;
  });
}

module.exports = withCustomPermissions;
