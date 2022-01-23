import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class IMUsed extends ResponseWithStatus
{
    constructor({
        res,
        message = "Instance-Manipulations Used",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 226,
            message,
            data,
            error,
        });
    }
}
