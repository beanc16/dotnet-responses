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
        res.status(203);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
