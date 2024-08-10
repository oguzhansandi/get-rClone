# Welcome to Your React Native App 👋

This project was initially created as an Expo project but has since been ejected due to the integration of features like Google Sign-In.

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx react-native run-android   # For Android
   npx react-native run-ios       # For iOS
   ```
These commands will help you launch your app on emulators or physical devices. Use Android Studio for Android emulators and Xcode for iOS simulators.

## Project Structure

- src/: Contains the main source code of the application.
- assets/: Holds static files such as images and fonts.
- android/: Android-specific configurations and code.
- ios/: iOS-specific configurations and code.

## Features

- **Google Sign-In**: Integrated using [React Native Google Sign-In](https://github.com/react-native-google-signin/google-signin).
- **React Native Navigation**: For in-app navigation, using [React Navigation](https://reactnavigation.org/).
- **Redux**: Manages global state with [Redux](https://redux.js.org/).
- **BottomSheet**: Used for creating smooth and interactive bottom sheet components.
- **Modal**: Implemented for pop-up dialogs and alerts within the app.
- **Svg**: Vector graphics support using [React Native SVG](https://github.com/react-native-svg/react-native-svg).
- **Axios**: For making HTTP requests to APIs using [Axios](https://axios-http.com/docs/intro).
- **Firebase**: Integrated Firebase services for authentication, database, and more using [Firebase](https://firebase.google.com/docs).
- **Async Storage**: Persistent storage for small amounts of data, using [Async Storage](https://react-native-async-storage.github.io/async-storage/).


## Reset the Project

If you need to start fresh:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Join the Community

Engage with other developers and exchange ideas:

- **[React Native GitHub](https://github.com/facebook/react-native)**: View the open-source platform and contribute.
- **[React Native Discord](https://discord.com/invite/reactiflux)**: Join the Reactiflux Discord community to ask questions and collaborate.

