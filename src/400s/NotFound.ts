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
        message = message ?? "Not Found";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
