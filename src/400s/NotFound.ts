import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NotFound extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(404);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
