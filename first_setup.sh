cd client
yarn
cp .env.example .env.dev
cp .env.example .env.prod

cd ../functions
npm install
cp .env.example .env.dev
cp .env.example .env.prod
