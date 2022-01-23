import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Ok extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(200);
        
        super({
            res,
            message: message ?? "Ok",
            data,
            error,
        });
    }
}
