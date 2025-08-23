# LuzMaya App

## Inicio rápido con EAS Development Build

Este proyecto utiliza **EAS Build** y **expo-dev-client**, por lo que NO es compatible con la app Expo Go estándar. Debes instalar una Development Build personalizada en tu dispositivo para poder ejecutar la app localmente.

### 1. Instalar dependencias

```bash
npm install
# o
yarn install
```

### 2. Generar una Development Build (solo la primera vez o si cambian las dependencias nativas)

#### Android
```bash
eas build --profile development --platform android
```

#### iOS
```bash
eas build --profile development --platform ios
```

Descarga e instala la app resultante en tu dispositivo (puedes escanear el QR que te da EAS o descargar el .apk/.ipa desde la web de EAS Build).

### 3. Iniciar el servidor local

```bash
npx expo start --dev-client
```

Escanea el QR con tu Development Build instalada (NO con Expo Go).

### 4. Notas adicionales

- Si ves la opción "Development Build" al escanear el QR, selecciona tu build personalizada.
- Si la app se queda cargando en Expo Go, revisa que estés usando la Development Build.
- Puedes cambiar entre variantes usando los scripts de npm o modificando variables de entorno en los perfiles de `eas.json`.

---

## Recursos útiles
- [Documentación oficial EAS Build](https://docs.expo.dev/build/introduction/)
- [expo-dev-client](https://docs.expo.dev/clients/installation/)

---



## Generar una version para desarrollo

```
npx eas build --profile development --platform android
```

## Generar una version para produccion

```
npx eas build --profile production --platform android
```


Si tienes dudas sobre el flujo de desarrollo, revisa este README o contacta al responsable del proyecto.