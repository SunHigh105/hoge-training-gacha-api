# Build client resource (dev mode)
cd client
yarn build:dev

# Update functions node_modules
cd ../functions
rm -rf node_modules/
yarn

# Start firebase emulator
cd ../
firebase use dev
firebase emulators:start
