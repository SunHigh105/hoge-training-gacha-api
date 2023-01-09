# Home Training Gacha API

## Requirements
- Google Account
- Google Cloud Project
- node(v19.x)

## Setup
### Google OAuth 2.0 Client ID

### Application
```
npm install
```

## Deployment(Firebase)
- Install firebase CLI
```
npm i -g firebase-tools
```
- Login firebase
```
firebase login
```
- Init hosting
```
firebase init hosting
```
```
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Please select an option: Use an existing project
? Select a default Firebase project for this directory: home-training-gacha (home-training-gacha)
i  Using project home-training-gacha (home-training-gacha)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? public
? Configure as a single-page app (rewrite all urls to /index.html)? No
? Set up automatic builds and deploys with GitHub? No
? File public/404.html already exists. Overwrite? Yes
✔  Wrote public/404.html
? File public/index.html already exists. Overwrite? Yes
✔  Wrote public/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
```
- Init functiions
```
firebase init functions
```
```
? What language would you like to use to write Cloud Functions? JavaScript
? Do you want to use ESLint to catch probable bugs and enforce style? No
✔  Wrote functions/package.json
✔  Wrote functions/index.js
✔  Wrote functions/.gitignore
? Do you want to install dependencies with npm now? Yes
```

- Test api at local
```
firebase emulators:start
```
