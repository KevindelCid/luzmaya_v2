const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return "com.kevdev.luzmaya.dev";
  }

  if (IS_PREVIEW) {
    return "com.kevdev.luzmaya.preview";
  }

  return "com.kevdev.luzmaya";
};

const getAppName = () => {
  if (IS_DEV) {
    return "LuzMaya (Dev)";
  }

  if (IS_PREVIEW) {
    return "LuzMaya (Preview)";
  }

  return "LuzMaya Cholq'ij";
};

export default {
  expo: {
    name: getAppName(),
    slug: "luzmaya",
    version: "2.0.0",
    orientation: "portrait",
    icon: "./assets/images/icon.png",
    scheme: "myapp",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      package: getUniqueIdentifier(),
      versionCode: 2,
      permissions: [],
      adaptiveIcon: {
        foregroundImage: "./assets/images/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: [
      "expo-router",
      [
        "expo-splash-screen",
        {
          image: "./assets/images/splash-icon.png",
          imageWidth: 200,
          resizeMode: "contain",
          backgroundColor: "#ffffff",
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: "60c75428-cbd7-4c5f-8a93-fe119223c8ae",
      },
    },
    owner: "dandeldev",
  },
};
