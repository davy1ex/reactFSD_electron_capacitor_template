# React FSD2 Multiplatform

A minimal "Hello, World!" project built with React and Feature-Sliced Design 2 (FSD2) architecture that works across multiple platforms:
- Web (browser)
- Android (via Capacitor)
- Desktop (via Electron)

## Project Structure

```
project-root/
├── public/
├── src/
│   ├── app/
│   │   ├── entrypoints/
│   │   │   ├── web.tsx
│   │   │   ├── android.tsx
│   │   │   └── desktop.tsx
│   │   └── index.ts
│   ├── pages/
│   │   └── hello-world/
│   │       ├── ui.tsx
│   │       └── index.ts
│   └── shared/
│       └── config/platform.ts
├── android/                    # Capacitor Android project
├── electron/                   # Electron main.ts
├── vite.config.ts
└── package.json
```

## Setup

1. Install dependencies:
```bash
npm install
```

2. For Android development:
```bash
npm run cap:add:android
npm run cap:sync
```

## Development

### Web
```bash
npm run dev
```

### Desktop (Electron)
```bash
npm run electron:dev
```

### Android
```bash
npm run cap:open:android
```

## Building

### Web
```bash
npm run build
```

### Desktop
```bash
npm run electron:build
```

### Android
Build through Android Studio after running `npm run cap:open:android` 