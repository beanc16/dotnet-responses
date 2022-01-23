import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Forbidden extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 403,
        message: "Forbidden",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = Forbidden.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Forbidden.defaultParams)
    {
        super({
            res,
            statusCode: Forbidden.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
