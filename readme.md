# Fitness App

## Steps to Start the project

`

1. npm install
2. npm start (in development mode) / npm start:prod (use these command for procustion start)

   there you go .... on http://localhost:3000
   `

## Project Specification / Structure

server.js : this file is resposible for starting he server

app.js : this file contains the security configuration and inital enntry point of the app(resp api)

config.env : defined enviroment related secrets and password

routes/ : in this folder we have the api routes like(Fitness route and user auth route)

controller/ : in this folder all Business logic is defined as per the endpoint defination

utils/ : in this folder we have utility functions which is used across over the project.

request.http : in this file all endpoint is defined hosted by this app.

---

NOTE: in ErrorController there is two functionality

1. if the server is running on dev mode then will get stack trace error

`{ "status": "error", "error": { "name": "JsonWebTokenError", "message": "invalid token", "statusCode": 500, "status": "error" }, "message": "invalid token", "stack": "JsonWebTokenError: invalid token\n at module.exports (/Users/ankaggar3/Desktop/vuejs/nodejsAssignment/fitnessApp/node_modules/jsonwebtoken/verify.js:75:17)\n at node:internal/util:360:7\n at new Promise (<anonymous>)\n at node:internal/util:346:12\n at /Users/ankaggar3/Desktop/vuejs/nodejsAssignment/fitnessApp/controllers/authController.js:79:46\n at /Users/ankaggar3/Desktop/vuejs/nodejsAssignment/fitnessApp/utils/catchAsync.js:3:5\n at Layer.handle [as handle_request] (/Users/ankaggar3/Desktop/vuejs/nodejsAssignment/fitnessApp/node_modules/express/lib/router/layer.js:95:5)\n at next (/Users/ankaggar3/Desktop/vuejs/nodejsAssignment/fitnessApp/node_modules/express/lib/router/route.js:144:13)\n at Route.dispatch (/Users/ankaggar3/Desktop/vuejs/nodejsAssignment/fitnessApp/node_modules/express/lib/router/route.js:114:3)\n at Layer.handle [as handle_request] (/Users/ankaggar3/Desktop/vuejs/nodejsAssignment/fitnessApp/node_modules/express/lib/router/layer.js:95:5)" }`

2. In production mode if the error is operational means user friendly error(401) eg: "Record not found will come" it will come in response other wise there will not be call stacktrace.
