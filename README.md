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

- [HttpError](#HttpError.initializer)
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
    localizationKey: "custom_error", // optional parameter
    errors: [
      {
        message: "custom error",
        description: "custom error description", // optional parameter
        param: "param key", // optional parameter
      },
      // you can add more objects
    ],
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
    localizationKey: "custom_error", // optional parameter
    errors: [
      {
        message: "custom error",
        description: "custom error description", // optional parameter
        param: "param key", // optional parameter
      },
      // you can add more objects
    ],
  }
  return HttpError.customError(errorObject)
})

//in the end of your app (important)
app.use(HttpError.handler)
```

## API

This is the current API

### Error Properties

- `statusCode` - the status code of the error.

- `errors`

  - `message` - the error message
  - `param` - the error parameter e.g (email, password, name, etc)
  - `description` - the error description

- `localizationKey` - the error key and the main purpose we can use it for localization part
  and in this case we will have a generic errors we can catch any error message
  by key `for example:` we can store local.en.json and local.en.json includes

  ```json
  { "bad_request": "invalid user request data" }
  ```

  and local.ar.json includes

  ```json
  { "bad_request": "بايانات غير صحيحة" }
  ```

  and the both files located in the
  frontend so by using the response `localizationKey` we can localize the error message
  easily.

### HttpError.initializer

<span id="HttpError.initializer"><span>

it's a middleware should be used in the top of your app or at lest before your
routes that include `http-error-handling`

```js
// in the beginning of your app (important)
app.use(HttpError.initializer)
// OR
app.use((req, res, next) => {
  HttpError.initializer(req, res, next)
})
```

### HttpError.handler

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

### HttpError.customError

it's a helper function that helps you to create your custom error.

### HttpError.{{ any function from the next list }}

- they are helper functions allow you to send sepecific error to the client
  - `message` customize the error message `optional`

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

## Validating the request

### RequestValidator

<span id="RequestValidator"><span>
it's a middleware should be used after validating the request
body/parameter/query using `express-validator` library

```js
import { RequestValidator } from "http-error-handling"
import { body } from "express-validator"
import express, { NextFunction, Request, Response } from "express"
let app = express()
//sample API
app.get("/validate", body("email").isEmail(), RequestValidator, (req: Request, res: Response, next: NextFunction) => {
  return res.send(req.body)
})
```

## License

[MIT](LICENSE)
