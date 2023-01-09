# Build client resource (dev mode)
cd client
yarn build:dev

# Start firebase emulator
cd ../
firebase use dev
firebase emulators:start
