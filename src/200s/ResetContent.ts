import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class ResetContent extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(205);
        
        super({
            res,
            message: message ?? "Reset Content",
            data,
            error,
        });
    }
}
