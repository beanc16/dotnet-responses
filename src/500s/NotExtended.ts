import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NotExtended extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].NotExtended;

    constructor({
        res,
        message = NotExtended.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NotExtended.defaultParams)
    {
        super({
            res,
            statusCode: NotExtended.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
