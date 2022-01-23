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
        // TODO: Only set status if res isn't null
        res.status(200);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
