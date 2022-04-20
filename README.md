# Node Rest API (EXPRESS) + JWT in TypeScript

- This is a simple **Node Rest Api** written in **Typescript**.  
- Routes can be protected with **JWT tokens**.
- Authentification with Passport. 

# How it works

- The API dispatches requests with well structured **routes**.
- Routes are using **controllers** for API implementations.
- Controllers are using **models** for Mongo persistence.
- Routes can be protected with **JWT authentification middelwares** :

# Installation
- Clone the repository

- Install dependencies
```
cd api
npm install
npm run build
```
- Launch demo Node and Mongo server in docker containers
```
docker-compose build
docker-compose up
```
( *Alternatively, you can run and configure your local or cloud Mongo server and start Node server with
`npm run build && npm start`*)

Please check package.json for other useful npm scripts  (for example typescript and nodemon watchers in development)
