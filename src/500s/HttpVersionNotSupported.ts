import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class HttpVersionNotSupported extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].HttpVersionNotSupported;

    constructor({
        res,
        message = HttpVersionNotSupported.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = HttpVersionNotSupported.defaultParams)
    {
        super({
            res,
            statusCode: HttpVersionNotSupported.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
