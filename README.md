# React FSD2 Multiplatform Template

A modern template for building cross-platform applications using React, Electron, and Capacitor. This template follows the Feature-Sliced Design (FSD) architecture pattern and supports building for Windows, Linux, and Android platforms.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
  - [Windows Development](#windows-development)
  - [Linux Development](#linux-development)
  - [Android Development](#android-development)
    - [Setting up Android SDK in Linux/WSL2](#setting-up-android-sdk-in-linuxwsl2)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Building for Different Platforms](#building-for-different-platforms)
  - [Windows Build](#windows-build)
    - [Enabling API Requests in Electron](#enabling-api-requests-in-electron)
  - [Linux Build](#linux-build)
  - [Android Build](#android-build)
    - [Running the APK](#running-the-apk)
    - [Troubleshooting Android Build in WSL2](#troubleshooting-android-build-in-wsl2)
- [Acknowledgments](#acknowledgments)

## Features

- 🚀 React 18 with TypeScript
- ⚡ Vite for fast development and building
- 🖥️ Electron for desktop applications
- 📱 Capacitor for mobile applications
- 🏗️ Feature-Sliced Design architecture
- 🎨 Modern UI with customizable theming
- 🔧 Cross-platform build support

## Prerequisites

### Windows Development
- Node.js 16+ (LTS version recommended)
- Git
#### Enabling API Requests in Electron

By default, Electron apps have a strict Content Security Policy (CSP) to enhance security. However, to make API requests to external services or allow other domains, you can adjust the CSP header.

If you want to allow API requests (for example, to `https://jsonplaceholder.typicode.com`), follow these steps:

##### Step 1: Modify the `electron/main.ts` file

1. Open the `electron/main.ts` file in your project.
2. Locate the `session.defaultSession.webRequest.onHeadersReceived` method, which controls the headers of incoming requests.
3. Modify the `Content-Security-Policy` header to allow the domains you wish to make requests to.

Here is the code you need to add (or modify) in `main.ts`:

```typescript
// Set security headers to allow API requests
session.defaultSession.webRequest.onHeadersReceived(
  (details: any, callback: (response: any) => void) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://jsonplaceholder.typicode.com; style-src 'self' 'unsafe-inline'; img-src 'self' data:;"
        ],
      },
    });
  }
);
```

### Linux Development
- Node.js 16+ (LTS version recommended)
- Git
- Build essentials:
  ```bash
  sudo apt update
  sudo apt install -y build-essential
  ```

### Android Development
- Node.js 16+ (LTS version recommended)
- Java Development Kit (JDK) 17
- Android SDK and Build Tools

#### Setting up Android SDK in Linux/WSL2:
1. Create Android SDK directory:
   ```bash
   mkdir -p ~/Android/Sdk/cmdline-tools
   ```

2. Download Android command-line tools:
   ```bash
   cd ~/Android/Sdk/cmdline-tools
   wget https://dl.google.com/android/repository/commandlinetools-linux-10406996_latest.zip
   ```

3. Extract and set up the tools:
   ```bash
   unzip commandlinetools-linux-10406996_latest.zip
   mv cmdline-tools latest
   ```

4. Add Android SDK to your environment:
on Bash:
   ```bash
   echo 'export ANDROID_HOME=$HOME/Android/Sdk' >> ~/.bashrc
   echo 'export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools' >> ~/.bashrc
   source ~/.bashrc
   ```
On fish:
```bash
nano ~/.config/fish/config.fish
``` 

and add lines below:

```bash
set -gx ANDROID_HOME $HOME/Android/Sdk
set -gx PATH $PATH $ANDROID_HOME/cmdline-tools/latest/bin $ANDROID_HOME/platform-tools
```

and for apply it:

```bash
source ~/.config/fish/config.fish
```

For Zsh:
Edit your .zshrc file:
```bash
nano ~/.zshrc
```

Add the following lines at the end:

```bash
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools
```

then run command below for apply it

```bash
source ~/.zshrc
```

5. Install required SDK components:
   ```bash
   sdkmanager --install "platform-tools" "build-tools;34.0.0" "platforms;android-34"
   ```

## Project Structure

```
├── src/                    # Source code
│   ├── app/               # Application-wide code
│   ├── processes/         # Application processes
│   ├── pages/            # Application pages
│   ├── widgets/          # Composite components
│   ├── features/         # User interactions
│   ├── entities/         # Business entities
│   └── shared/           # Shared code
├── electron/             # Electron-specific code
├── public/              # Static assets
└── android/            # Android-specific code
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-fsd2-multiplatform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Building for Different Platforms

### Windows Build
```bash
# Build for Windows
npm run electron:build:win

# The output will be in dist-app/React FSD2 Multiplatform 0.0.1.exe
```

### Linux Build
```bash
# Build for Linux (AppImage and .deb)
npm run electron:build:linux

# The output will be in dist-app/
# - React FSD2 Multiplatform-0.0.1.AppImage
# - react-fsd2-multiplatform_0.0.1_amd64.deb
```

### Android Build
1. Add Android platform:
   ```bash
   npm run cap:add:android
   ```

2. Build the web app:
   ```bash
   npm run build
   ```

3. Sync with Android:
   ```bash
   npm run cap:sync
   ```

4. Build Android app:
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

The APK will be in `android/app/build/outputs/apk/debug/app-debug.apk`

#### Running the APK

You can run the APK in several ways:

1. Using Android Debug Bridge (adb):
   ```bash
   # Install the APK
   adb install android/app/build/outputs/apk/debug/app-debug.apk
   
   # Launch the app (replace com.example.reactfsd2multiplatform with your app ID)
   adb shell monkey -p com.example.reactfsd2multiplatform -c android.intent.category.LAUNCHER 1
   ```

2. Transfer to your Android device:
   - Copy the APK to your Android device
   - On your device, navigate to the APK location
   - Tap the APK to install
   - Enable "Install from Unknown Sources" if prompted

3. Using an Android Emulator:
   - Start an Android emulator
   - Drag and drop the APK onto the emulator window
   - Or use adb install with the emulator running

Note: Make sure you have enabled Developer Options and USB Debugging on your Android device if using method 1.

#### Troubleshooting Android Build in WSL2

If you encounter SDK location issues during build:

1. Verify Android SDK installation:
   ```bash
   ls -la ~/Android/Sdk
   ```

2. Create or update `android/local.properties`:
   ```bash
   echo "sdk.dir=/home/YOUR_USERNAME/Android/Sdk" > android/local.properties
   ```

3. Set ANDROID_HOME environment variable:
   ```bash
   export ANDROID_HOME=/home/YOUR_USERNAME/Android/Sdk
   ```

4. Try building again:
   ```bash
   cd android
   ./gradlew assembleDebug
   ```

Note: Replace `YOUR_USERNAME` with your actual WSL2 username.

## Acknowledgments

- [React](https://reactjs.org/)
- [Electron](https://www.electronjs.org/)
- [Capacitor](https://capacitorjs.com/)
- [Vite](https://vitejs.dev/)
- [Feature-Sliced Design](https://feature-sliced.design/)
