import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class BadGateway extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 502,
        message: "Bad Gateway",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = BadGateway.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = BadGateway.defaultParams)
    {
        super({
            res,
            statusCode: BadGateway.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
