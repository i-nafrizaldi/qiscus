This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started


```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install


1. Run the JSON Server
The json-server is a JavaScript library to create testing REST API with form of
HTTP request (Network call).
For installation you can install json-server globally.

npm install -g json-server

Now we can create server locally with json-server or the other name is fake
API because we don’t have to create API.
To create API, we can learn that in module Back-end.
Open a separate terminal window and run the json-server to serve the data from the db.json file:

To run our json-server with its data, we have to access its directory in terminal, then we can use this command:


json-server -p 2000 db.json

This will run the json-server on http://localhost:2000 and serve the contents of the db.json file as a RESTful API.

2. Run the Next.js Development Server
In your primary terminal, run the Next.js development server:

npm run dev
# or
yarn dev

The Next.js application will start on http://localhost:3000.

3. Accessing the Application
Open http://localhost:3000 in your browser to see the Next.js app.
To interact with the mock API, navigate to http://localhost:2000 to see the data served from the db.json file.

