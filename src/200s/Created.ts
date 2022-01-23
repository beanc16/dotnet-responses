import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Created extends ResponseWithStatus
{
    constructor({
        res,
        message = "Created",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 201,
            message,
            data,
            error,
        });
    }
}
