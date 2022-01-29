import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NoContent extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].NoContent;

    constructor({
        res,
        message = NoContent.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = NoContent.defaultParams)
    {
        super({
            res,
            statusCode: NoContent.defaultParams.statusCode,
            message,
            data,
        });
    }
}
