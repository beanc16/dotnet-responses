import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class NoContent extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(204);
        
        super({
            res,
            message: message ?? "No Content",
            data,
            error,
        });
    }
}
