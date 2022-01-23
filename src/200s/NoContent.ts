import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NoContent extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 204,
        message: "No Content",
        data: null,
        error: null,
    };

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
