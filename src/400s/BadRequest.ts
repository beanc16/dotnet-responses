import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class BadRequest extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].BadRequest;

    constructor({
        res,
        message = BadRequest.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = BadRequest.defaultParams)
    {
        super({
            res,
            statusCode: BadRequest.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
