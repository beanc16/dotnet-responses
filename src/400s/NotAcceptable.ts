import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NotAcceptable extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].NotAcceptable;

    constructor({
        res,
        message = NotAcceptable.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NotAcceptable.defaultParams)
    {
        super({
            res,
            statusCode: NotAcceptable.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
