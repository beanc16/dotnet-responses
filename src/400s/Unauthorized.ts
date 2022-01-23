import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Unauthorized extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 401,
        message: "Unauthorized",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = Unauthorized.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Unauthorized.defaultParams)
    {
        super({
            res,
            statusCode: Unauthorized.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
