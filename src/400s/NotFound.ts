import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotFound extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 404,
        message: "Not Found",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = NotFound.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NotFound.defaultParams)
    {
        super({
            res,
            statusCode: NotFound.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
