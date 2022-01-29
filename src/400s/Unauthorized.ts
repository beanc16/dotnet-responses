import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Unauthorized extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].Unauthorized;

    constructor({
        res,
        message = Unauthorized.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Unauthorized.defaultParams)
    {
        super({
            res,
            statusCode: Unauthorized.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
