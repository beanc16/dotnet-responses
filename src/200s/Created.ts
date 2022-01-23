import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Created extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(201);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
