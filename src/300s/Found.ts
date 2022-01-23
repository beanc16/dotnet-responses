import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Found extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 302,
        message: "Found",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = Found.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Found.defaultParams)
    {
        super({
            res,
            statusCode: Found.defaultParams.statusCode,
            message,
            data,
        });
    }
}
