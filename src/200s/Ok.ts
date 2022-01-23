import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Ok extends ResponseWithStatus
{
    constructor({
        res,
        message = "Ok",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(200);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
