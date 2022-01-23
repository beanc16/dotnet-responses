import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class BadRequest extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 400,
        message: "Bad Request",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = BadRequest.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = BadRequest.defaultParams)
    {
        super({
            res,
            statusCode: BadRequest.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
