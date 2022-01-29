import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class ResetContent extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].ResetContent;

    constructor({
        res,
        message = ResetContent.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = ResetContent.defaultParams)
    {
        super({
            res,
            statusCode: ResetContent.defaultParams.statusCode,
            message,
            data,
        });
    }
}
