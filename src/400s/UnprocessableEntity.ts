import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class UnprocessableEntity extends ResponseWithStatus
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        res.status(422);
        message = message ?? "Unprocessable Entity";
        
        super({
            res,
            message,
            data,
            error,
        });
    }
}
