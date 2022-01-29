import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class BadGateway extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].BadGateway;

    constructor({
        res,
        message = BadGateway.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = BadGateway.defaultParams)
    {
        super({
            res,
            statusCode: BadGateway.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
