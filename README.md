# dotnet-responses

A collection of response classes that mimic [ASP.NET responses](https://docs.microsoft.com/en-us/dotnet/api/microsoft.aspnetcore.mvc.controllerbase?view=aspnetcore-6.0#methods)

<!-- Badges -->
  ![npm][npm-version]
  ![license][npm-license]
  ![downloads][npm-downloads]



## Install
This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

```bash
$ npm install dotnet-responses
```



## Usage

### Basic
```js
const express = require('express');
const app = express();
const Responses = require("dotnet-responses");

app.get('/ok', function (req, res) {
  /*
  Call res.send and send the following object to the client:
  {
    "statusCode": 200,
    "message": "Ok",
    "data": null,
    "error": null
  }
  */
  const ok = new Responses.Ok({ res });
  ok.send();
});

app.get('/ok-static', function (req, res) {
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
});

app.listen(3000);
```



## Response Types

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