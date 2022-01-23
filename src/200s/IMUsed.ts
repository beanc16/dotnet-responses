import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class IMUsed extends ResponseWithStatus
{
    constructor({
        res,
        message = "Instance-Manipulations Used",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(226);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
