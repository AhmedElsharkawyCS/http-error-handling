# http-error-handling

Handling HTTP errors for your Express application easily.

## Install

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/). Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
npm install http-error-handling
```

## Features

- [ErrorObject](#ErrorObject)
- [HttpError](#HttpError)
- [RequestValidator](#RequestValidator)

## Examples

### CommonJS

```js
var { HttpError } = require("http-error-handling")
var express = require("express")
var app = express()
// in the beginning of your app (important)
app.use(HttpError.initializer)
// your app routes or other middlewares
//sample APIs
app.get("/400", (req, res, next) => {
  return HttpError.BadRequest()
})
app.get("/500", (req, res, next) => {
  return HttpError.InternalServerError("something went wrong")
})
app.get("/custom", (req, res, next) => {
  const customError = {
    statusCode: 502,
    message: "custom message",
    errorKey: "custom_error", // optional parameter
    description: "description", // optional parameter
    help: "https://domain.example/integration/fixes/custom-api", // optional parameter
    invalidParams: [
      {
        message: "invalid value",
        location: "body", // optional parameter
        param: "email",
      },
      //you can add more objects
    ], // optional parameter
  }
  return HttpError.customError(errorObject)
})

//in the end of your app (important)
app.use(HttpError.handler)
```

### ES6

```js
import { ErrorsAttrs, HttpError } from "http-error-handling"
import express, { NextFunction, Request, Response } from "express"
let app = express()
// in the beginning of your app (important)
app.use(HttpError.initializer)
// your app routes or other middlewares
//sample APIs
app.get("/400", (req: Request, res: Response, next: NextFunction) => {
  return HttpError.BadRequest("invalid request data")
})
app.get("/500", (req: Request, res: Response, next: NextFunction) => {
  return HttpError.InternalServerError()
})
app.get("/custom", (req: Request, res: Response, next: NextFunction) => {
  const custom: ErrorsAttrs = {
    statusCode: 502,
    message: "custom message",
    errorKey: "custom_error", // optional parameter
    description: "description", // optional parameter
    help: "https://domain.example/integration/fixes/custom-api", // optional parameter
    invalidParams: [
      {
        message: "invalid value",
        location: "body", // optional parameter
        param: "string",
      },
      //you can add more objects
    ], // optional parameter
  }
  return HttpError.customError(errorObject)
})

//in the end of your app (important)
app.use(HttpError.handler)
```

## ErrorObject

- `statusCode`: the status code of the error. `required`
- `message`: the error message. `required`
- `description`: the error description. `optional`
- `help`: the error url that can help the client to fix the api issue e.g
  (<https://your-domain.example/integration/fixes/auth-api>) `optional`
- `invalidParams`: the errors of request in case you need to validate the
  request data. `optional`

  - `message`: the error message. `required`
  - `param`: the error parameter name e.g (email, password, name, etc). `optional`
  - `location`: the location of parameter key. `required`

- `errorKey`: the error key and the main purpose we can use it for localization part
  and in this case we will have a generic errors we can catch any error message
  by key `for example:` we can store local.en.json and local.en.json includes

  ```json
  { "bad_request": "invalid user request data" }
  ```

  and local.ar.json includes

  ```json
  { "bad_request": "?????????????? ?????? ??????????" }
  ```

  and the both files located in the
  frontend so by using the response `errorKey` we can localize the error message
  easily. `optional`

## HttpError

### Initializer

it's a middleware should be used in the top of your app or at lest before your
routes that include `HttpError`

```js
// in the beginning of your app (important)
app.use(HttpError.initializer)
// OR
app.use((req, res, next) => {
  HttpError.initializer(req, res, next)
})
```

### Handler

it's a middleware and it will handle all the errors returned by
`HttpError` functions and it will send it back to the client but if the error
not belong ot the lib it will pass it using next fun

```js
// in the end of your app (important)
app.use(HttpError.handler)
// OR
app.use((err, req, res, next) => {
  HttpError.handler(err, req, res, next)
})
```

### customError

it's a helper function can help you to create your custom error.

### HttpError.{{ any function from the next list }}

- they are helper functions allow you to send sepecific error to the client

- `attrs` error object to customize your error response `optional`
  - `message`: the error message. `required`
  - `errorKey`: the error key. `optional`
  - `help`: the error help location/url. `optional`
  - `description`: the error description `optional`
  - `invalidParams`: the request parameters errors `optional`

| status code | function name                 |
| ----------- | ----------------------------- |
| 400         | BadRequest                    |
| 401         | Unauthorized                  |
| 402         | PaymentRequired               |
| 403         | Forbidden                     |
| 404         | NotFound                      |
| 405         | MethodNotAllowed              |
| 406         | NotAcceptable                 |
| 407         | ProxyAuthenticationRequired   |
| 408         | RequestTimeout                |
| 409         | Conflict                      |
| 410         | Gone                          |
| 411         | LengthRequired                |
| 412         | PreconditionFailed            |
| 413         | PayloadTooLarge               |
| 414         | URITooLong                    |
| 415         | UnsupportedMediaType          |
| 416         | RangeNotSatisfiable           |
| 417         | ExpectationFailed             |
| 418         | ImATeapot                     |
| 421         | MisdirectedRequest            |
| 422         | UnprocessableEntity           |
| 423         | Locked                        |
| 424         | FailedDependency              |
| 425         | TooEarly                      |
| 426         | UpgradeRequired               |
| 428         | PreconditionRequired          |
| 429         | TooManyRequests               |
| 431         | RequestHeaderFieldsTooLarge   |
| 451         | UnavailableForLegalReasons    |
| 500         | InternalServerError           |
| 501         | NotImplemented                |
| 502         | BadGateway                    |
| 503         | ServiceUnavailable            |
| 504         | GatewayTimeout                |
| 505         | HTTPVersionNotSupported       |
| 506         | VariantAlsoNegotiates         |
| 507         | InsufficientStorage           |
| 508         | LoopDetected                  |
| 509         | BandwidthLimitExceeded        |
| 510         | NotExtended                   |
| 511         | NetworkAuthenticationRequired |

---

## RequestValidator

it's a middleware should be used after validating the request
body/parameter/query using `express-validator` library

```js
import { body } from "express-validator"
import { RequestValidator } from "http-error-handling"
import express, { NextFunction, Request, Response } from "express"
let app = express()
//sample API
app.get("/validate", body("email").isEmail(), RequestValidator, (req: Request, res: Response, next: NextFunction) => {
  return res.send(req.body)
})
```

## License

[MIT](LICENSE)
