import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NotFound extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].NotFound;

    constructor({
        res,
        message = NotFound.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NotFound.defaultParams)
    {
        super({
            res,
            statusCode: NotFound.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
