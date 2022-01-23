import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class PartialContent extends ResponseWithStatus
{
    constructor({
        res,
        message = "Partial Content",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(206);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
