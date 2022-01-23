import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class UnprocessableEntity extends ResponseWithStatus
{
    constructor({
        res,
        message = "Unprocessable Entity",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(422);
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
