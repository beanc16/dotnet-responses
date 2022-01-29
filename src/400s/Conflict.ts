import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Conflict extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].Conflict;

    constructor({
        res,
        message = Conflict.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Conflict.defaultParams)
    {
        super({
            res,
            statusCode: Conflict.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
