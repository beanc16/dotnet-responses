import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class RequestEntityTooLarge extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].RequestEntityTooLarge;

    constructor({
        res,
        message = RequestEntityTooLarge.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = RequestEntityTooLarge.defaultParams)
    {
        super({
            res,
            statusCode: RequestEntityTooLarge.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
