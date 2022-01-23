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
        res.status(511);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
