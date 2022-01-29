import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class RequestUriTooLong extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].RequestUriTooLong;

    constructor({
        res,
        message = RequestUriTooLong.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = RequestUriTooLong.defaultParams)
    {
        super({
            res,
            statusCode: RequestUriTooLong.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
