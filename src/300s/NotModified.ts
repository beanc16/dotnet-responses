import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotModified extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 304,
        message: "Not Modified",
        data: null,
        error: null,
    };

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
