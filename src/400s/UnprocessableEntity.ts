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
        super({
            res,
            statusCode: 422,
            message,
            data,
            error,
        });
    }
}
