import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NotModified extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[300].NotModified;

    constructor({
        res,
        message = NotModified.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = NotModified.defaultParams)
    {
        super({
            res,
            statusCode: NotModified.defaultParams.statusCode,
            message,
            data,
        });
    }
}
