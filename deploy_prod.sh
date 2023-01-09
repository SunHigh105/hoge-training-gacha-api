# Build client resource (prod mode)
cd client
yarn build:prod

# Start firebase emulator
cd ../
firebase use prod
firebase deploy
