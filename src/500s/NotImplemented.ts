import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotImplemented extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 501,
        message: "Not Implemented",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = NotImplemented.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NotImplemented.defaultParams)
    {
        super({
            res,
            statusCode: NotImplemented.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
