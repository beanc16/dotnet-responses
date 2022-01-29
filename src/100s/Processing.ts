import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Processing extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[100].Processing;

    constructor({
        res,
        message = Processing.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Processing.defaultParams)
    {
        super({
            res,
            statusCode: Processing.defaultParams.statusCode,
            message,
            data,
        });
    }
}
