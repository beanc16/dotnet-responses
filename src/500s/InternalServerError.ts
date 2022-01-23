import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class InternalServerError extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 500,
        message: "Internal Server Error",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = InternalServerError.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = InternalServerError.defaultParams)
    {
        super({
            res,
            statusCode: InternalServerError.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
