import * as oneHundreds from "../100s";
import * as twoHundreds from "../200s";
import * as threeHundreds from "../300s";
import * as fourHundreds from "../400s";
import * as fiveHundreds from "../500s";



export const statusCodeMap = {
    // 100s
    100: oneHundreds.Continue,
    101: oneHundreds.SwitchingProtocols,
    102: oneHundreds.Processing,

    // 200s
    200: twoHundreds.Ok,
    201: twoHundreds.Created,
    202: twoHundreds.Accepted,
    203: twoHundreds.NonAuthoritativeInformation,
    204: twoHundreds.NoContent,
    205: twoHundreds.ResetContent,
    206: twoHundreds.PartialContent,
    207: twoHundreds.MultiStatus,
    208: twoHundreds.AlreadyReported,
    226: twoHundreds.IMUsed,

    // 300s
    300: threeHundreds.MultipleChoices,
    301: threeHundreds.MovedPermanently,
    302: threeHundreds.Found,
    303: threeHundreds.SeeOther,
    304: threeHundreds.NotModified,
    305: threeHundreds.UseProxy,
    307: threeHundreds.TemporaryRedirect,
    308: threeHundreds.PermanentRedirect,

    // 400s
    400: fourHundreds.BadRequest,
    401: fourHundreds.Unauthorized,
    403: fourHundreds.Forbidden,
    404: fourHundreds.NotFound,
    405: fourHundreds.MethodNotAllowed,
    406: fourHundreds.NotAcceptable,
    407: fourHundreds.ProxyAuthenticationError,
    408: fourHundreds.RequestTimeout,
    409: fourHundreds.Conflict,
    410: fourHundreds.Gone,
    411: fourHundreds.LengthRequired,
    412: fourHundreds.PreconditionFailed,
    413: fourHundreds.RequestEntityTooLarge,
    414: fourHundreds.RequestUriTooLong,
    415: fourHundreds.UnsupportedMediaType,
    416: fourHundreds.RequestedRangeNotSatisfiable,
    417: fourHundreds.ExpectationFailed,
    422: fourHundreds.UnprocessableEntity,
    423: fourHundreds.Locked,
    424: fourHundreds.FailedDependency,
    426: fourHundreds.UpgradeRequired,
    428: fourHundreds.PreconditionRequired,
    429: fourHundreds.TooManyRequests,
    431: fourHundreds.RequestHeaderFieldsTooLarge,
    444: fourHundreds.NoResponse,
    449: fourHundreds.RetryWith,
    451: fourHundreds.UnavailableForLegalReasons,
    499: fourHundreds.ClientClosedRequest,

    // 500s
    500: fiveHundreds.InternalServerError,
    501: fiveHundreds.NotImplemented,
    502: fiveHundreds.BadGateway,
    503: fiveHundreds.ServiceUnavailable,
    504: fiveHundreds.GatewayTimeout,
    505: fiveHundreds.HttpVersionNotSupported,
    506: fiveHundreds.VariantAlsoNegotiates,
    507: fiveHundreds.InsufficientStorage,
    508: fiveHundreds.LoopDetected,
    509: fiveHundreds.BandwidthLimitExceeded,
    510: fiveHundreds.NotExtended,
    511: fiveHundreds.NetworkAuthenticationRequired,
    598: fiveHundreds.NetworkReadTimeoutError,
    599: fiveHundreds.NetworkConnectTimeoutError,
};
