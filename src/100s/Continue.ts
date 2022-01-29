import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Continue extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[100].Continue;

    constructor({
        res,
        message = Continue.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Continue.defaultParams)
    {
        super({
            res,
            statusCode: Continue.defaultParams.statusCode,
            message,
            data,
        });
    }
}
