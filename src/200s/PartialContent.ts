import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class PartialContent extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 206,
        message: "Partial Content",
        data: null,
        error: null,
    };

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
