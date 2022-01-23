import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NetworkAuthenticationRequired extends ResponseWithStatus
{
    constructor({
        res,
        message = "Network Authentication Required",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 511,
            message,
            data,
            error,
        });
    }
}
