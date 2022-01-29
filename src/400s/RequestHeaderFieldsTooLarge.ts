import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class RequestHeaderFieldsTooLarge extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].RequestHeaderFieldsTooLarge;

    constructor({
        res,
        message = RequestHeaderFieldsTooLarge.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = RequestHeaderFieldsTooLarge.defaultParams)
    {
        super({
            res,
            statusCode: RequestHeaderFieldsTooLarge.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
