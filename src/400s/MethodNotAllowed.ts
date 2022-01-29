import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class MethodNotAllowed extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].MethodNotAllowed;

    constructor({
        res,
        message = MethodNotAllowed.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = MethodNotAllowed.defaultParams)
    {
        super({
            res,
            statusCode: MethodNotAllowed.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
