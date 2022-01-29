import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class PartialContent extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].PartialContent;

    constructor({
        res,
        message = PartialContent.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = PartialContent.defaultParams)
    {
        super({
            res,
            statusCode: PartialContent.defaultParams.statusCode,
            message,
            data,
        });
    }
}
