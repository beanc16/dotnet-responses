import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NotImplemented extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].NotImplemented;

    constructor({
        res,
        message = NotImplemented.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NotImplemented.defaultParams)
    {
        super({
            res,
            statusCode: NotImplemented.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
