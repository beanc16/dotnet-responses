import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NoContent extends ResponseWithStatus
{
    constructor({
        res,
        message = "No Content",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(204);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
