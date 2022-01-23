import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotExtended extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 510,
        message: "Not Extended",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = NotExtended.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NotExtended.defaultParams)
    {
        super({
            res,
            statusCode: NotExtended.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
