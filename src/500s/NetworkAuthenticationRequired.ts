import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NetworkAuthenticationRequired extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(511);
        message = message ?? "Network Authentication Required";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
