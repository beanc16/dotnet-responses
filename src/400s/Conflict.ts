import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Conflict extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 409,
        message: "Conflict",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = Conflict.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Conflict.defaultParams)
    {
        super({
            res,
            statusCode: Conflict.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
