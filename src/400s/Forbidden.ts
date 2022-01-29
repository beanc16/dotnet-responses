import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Forbidden extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].Forbidden;

    constructor({
        res,
        message = Forbidden.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Forbidden.defaultParams)
    {
        super({
            res,
            statusCode: Forbidden.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
