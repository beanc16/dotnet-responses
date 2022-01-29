import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class RequestedRangeNotSatisfiable extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].RequestedRangeNotSatisfiable;

    constructor({
        res,
        message = RequestedRangeNotSatisfiable.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = RequestedRangeNotSatisfiable.defaultParams)
    {
        super({
            res,
            statusCode: RequestedRangeNotSatisfiable.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
