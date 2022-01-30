# dotnet-responses

A collection of response classes that mimic [ASP.NET responses](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase?view=aspnetcore-6.0#methods).

<!-- Badges -->
  ![npm][npm-version]
  ![license][npm-license]
  ![downloads][npm-downloads]



## Install
This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

```bash
$ npm install dotnet-responses
```



## Basic Usage

### Using Objects
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function (req, res) {
    /*
    Call res.send and send the following object to the client:
    {
        "statusCode": 200,
        "message": "Ok",
        "data": null,
        "error": null
    }
    */
    const ok = new Ok({ res });
    ok.send();
});

app.listen(3000);
```

### Using Static Classes
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function (req, res) {
    /*
    Call res.send and send the following object to the client:
    {
        "statusCode": 200,
        "message": "Ok",
        "data": null,
        "error": null
    }
    */
    Ok.send({ res });
});

app.listen(3000);
```

### Importing All Classes
```js
const express = require("express");
const app = express();
const Responses = require("dotnet-responses");

app.get("/ok", function (req, res) {
    /*
    Call res.send and send the following object to the client:
    {
        "statusCode": 200,
        "message": "Ok",
        "data": null,
        "error": null
    }
    */
    Responses.Ok.send({ res });
    
    /*
    Can also do:
    const ok = new Responses.Ok({ res });
    ok.send();
    */
});

app.listen(3000);
```



## Constructors

### Classes With a Default Status Code of 100-308

```js
const { Ok } = require("dotnet-responses");
new Ok({
    res,        // Response object from express
    message,    // String (optional)
    data,       // Object or Array (optional)
});
```

### Classes With a Default Status Code of 400-599

```js
const { BadRequest } = require("dotnet-responses");
new BadRequest({
    res,        // Response object from express
    message,    // String (optional)
    data,       // Object or Array (optional)
    error,      // Object (optional)
});
```

### Basic Response

```js
const { Response } = require("dotnet-responses");
new Response({
    statusCode, // Number (optional)
    message,    // String (optional)
    data,       // Object or Array (optional)
    error,      // Object (optional)
});

/*
Response has no functions, it just stores the data passed into its constructor

Response's default data:
{
    "statusCode": 200,
    "message": null,
    "data": null,
    "error": null
}
*/
```



## Object Functions

### status
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function(req, res)
{
    // Call res.status to set statusCode to 200
    // (This example serves no functional purpose, as Ok has a status code of 200 by default)
    const ok = new Ok({ res });
    ok.status(
        200     // Number
    );
    ok.send();
});

app.listen(3000);
```

### sendStatus
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function(req, res)
{
    // Call res.sendStatus to send response of "Ok" to client
    const ok = new Ok({ res });
    ok.sendStatus(
        200     // Number
    );
});

app.listen(3000);
```

### send
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function(req, res)
{
    /*
    Call res.send and send the following object to the client:
    {
        "statusCode": 200,
        "message": "Ok",
        "data": null,
        "error": null
    }
    */
    const ok = new Ok({ res });
    ok.send(/* No parameters */);
});

app.listen(3000);
```

### json
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function(req, res)
{
    /*
    Call res.json and send the following object to the client:
    {
        "statusCode": 200,
        "message": "Ok",
        "data": null,
        "error": null
    }
    */
    const ok = new Ok({ res });
    ok.json(/* No parameters */);
});

app.listen(3000);
```

### jsonp
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function(req, res)
{
    /*
    Call res.jsonp and send the following object to the client:
    {
        "statusCode": 200,
        "message": "Ok",
        "data": null,
        "error": null
    }
    */
    const ok = new Ok({ res });
    ok.jsonp(/* No parameters */);
});

app.listen(3000);
```

### end
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function(req, res)
{
    // Call res.end
    const ok = new Ok({ res });
    ok.end(/* No parameters */);
});

app.listen(3000);
```



## Static Functions

### status
```js
const express = require("express");
const app = express();
const { BadRequest } = require("dotnet-responses");

app.get("/bad-request", function(req, res)
{
    // Call res.status to set statusCode to 400
    // (This example serves no functional purpose, as BadRequest has a status code of 400 by default)
    BadRequest.status({
        res,                                // Response object from express
        statusCode: 400,                    // Number (optional)
    });
    BadRequest.send({ res });
});

app.listen(3000);
```

### sendStatus
```js
const express = require("express");
const app = express();
const { BadRequest } = require("dotnet-responses");

app.get("/bad-request", function(req, res)
{
    // Call res.sendStatus to send response of "Bad Request" to client
    BadRequest.sendStatus({
        res,                                // Response object from express
        statusCode: 400,                    // Number (optional)
    });
});

app.listen(3000);
```

### send
```js
const express = require("express");
const app = express();
const { NotFound } = require("dotnet-responses");

app.get("/*", function(req, res)
{
    /*
    Call res.send and send the following object to the client:
    {
        "statusCode": 404,
        "message": "Not Found",
        "data": {
        "foo": "bar"
        },
        "error": {
            // Info about your error here
        }
    }
    */
    NotFound.send({
        res,                                // Response object from express
        statusCode: 404,                    // Number (optional)
        message: "Not Found",               // String (optional)
        data: { foo: "bar" },               // Object or Array (optional)
        error: new Error("Page not found"), // Object (optional)
    });
});

app.listen(3000);
```

### json
```js
const express = require("express");
const app = express();
const { Ok, UnprocessableEntity } = require("dotnet-responses");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { validateMyPayloadAsync } = require("./some-file-for-custom-validation");

app.post("/validation-error", function(req, res)
{
  validateMyPayloadAsync(req.body)
  .then((result) => {
    /*
    Call res.json and send the following object to the client:
    {
        "statusCode": 200,
        "message": "Ok",
        "data": {
            // Info about result here
        },
        "error": {
            // Info about your error here
        }
    }
    */
    Ok.json({
        res,                                // Response object from express
        statusCode: 200,                    // Number (optional)
        message: "Ok",                      // String (optional)
        data: result,                       // Object or Array (optional)
        error: new Error("Ok Example"),     // Object (optional)
    });
  })
  .catch((err) => {
    /*
    Call res.json and send the following object to the client:
    {
        "statusCode": 422,
        "message": "Unprocessable Entity",
        "data": {
            "foo": "bar"
        },
        "error": {
            // Info about your err here
        }
    }
    */
    UnprocessableEntity.json({
        res,                                // Response object from express
        statusCode: 422,                    // Number (optional)
        message: "Unprocessable Entity",    // String (optional)
        data: { foo: "bar" },               // Object or Array (optional)
        error: err,                         // Object (optional)
    });
  });
});

app.listen(3000);
```

### jsonp
```js
const express = require("express");
const app = express();
const { BadRequest } = require("dotnet-responses");

app.get("/bad-request", function (req, res) {
    /*
    Call res.jsonp and send the following object to the client:
    {
        "statusCode": 200,
        "message": "Ok",
        "data": {
            "foo": "bar"
        },
        "error": {
            // Info about your err here
        }
    }
    */
    BadRequest.jsonp({
        res,                                // Response object from express
        statusCode: 200,                    // Number (optional)
        message: "Ok",                      // String (optional)
        data: { foo: "bar" },               // Object or Array (optional)
        error: new Error("Bad Request"),    // Object (optional)
    });
});

app.listen(3000);
```

### end
```js
const express = require("express");
const app = express();
const { Ok } = require("dotnet-responses");

app.get("/ok", function (req, res) {
    // Call res.end
    Ok.end({
        res,                                // Response object from express
    });
});

app.listen(3000);
```



## Response Classes

### Format
- statusCode: ClassName

### 100s
- 100: Continue
- 101: SwitchingProtocols
- 102: Processing

### 200s
- 200: Ok
- 200: Success
- 201: Created
- 202: Accepted
- 203: NonAuthoritativeInformation
- 204: NoContent
- 205: ResetContent
- 206: PartialContent
- 207: MultiStatus
- 208: AlreadyReported
- 226: IMUsed

### 300s
- 300: MultipleChoices
- 301: MovedPermanently
- 302: Found
- 303: SeeOther
- 304: NotModified
- 305: UseProxy
- 307: TemporaryRedirect
- 308: PermanentRedirect

### 400s
- 400: BadRequest
- 401: Unauthorized
- 403: Forbidden
- 404: InvalidUrl
- 404: NotFound
- 405: MethodNotAllowed
- 406: NotAcceptable
- 407: ProxyAuthenticationError
- 408: RequestTimeout
- 409: Conflict
- 410: Gone
- 411: LengthRequired
- 412: PreconditionFailed
- 413: RequestEntityTooLarge
- 414: RequestUriTooLong
- 415: UnsupportedMediaType
- 416: RequestedRangeNotSatisfiable
- 417: ExpectationFailed
- 422: UnprocessableEntity
- 422: ValidationError
- 423: Locked
- 424: FailedDependency
- 426: UpgradeRequired
- 428: PreconditionRequired
- 429: TooManyRequests
- 431: RequestHeaderFieldsTooLarge
- 444: NoResponse
- 449: RetryWith
- 451: UnavailableForLegalReasons
- 499: ClientClosedRequest

### 500s
- 500: InternalServerError
- 501: NotImplemented
- 502: BadGateway
- 503: ServiceUnavailable
- 504: GatewayTimeout
- 505: HttpVersionNotSupported
- 506: VariantAlsoNegotiates
- 507: InsufficientStorage
- 508: LoopDetected
- 509: BandwidthLimitExceeded
- 510: NotExtended
- 511: NetworkAuthenticationRequired
- 598: NetworkReadTimeoutError
- 599: NetworkConnectTimeoutError

### Base
- Response



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.



## License
[MIT](https://choosealicense.com/licenses/mit/)



<!-- Shield URLs -->
[npm-version]: https://img.shields.io/npm/v/dotnet-responses
[npm-license]: https://img.shields.io/npm/l/dotnet-responses
[npm-downloads]: https://img.shields.io/npm/dm/dotnet-responses
