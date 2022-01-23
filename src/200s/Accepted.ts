import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Accepted extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 202,
        message: "Accepted",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = Accepted.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Accepted.defaultParams)
    {
        super({
            res,
            statusCode: Accepted.defaultParams.statusCode,
            message,
            data,
        });
    }
}
