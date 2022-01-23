import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NonAuthoritativeInformation extends ResponseWithStatus
{
    constructor({
        res,
        message = "Non-Authoritative Information",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 203,
            message,
            data,
            error,
        });
    }
}
