import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class MultipleChoices extends ResponseWithStatus
{
    constructor({
        res,
        message = "Multiple Choices",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            statusCode: 300,
            message,
            data,
            error,
        });
    }
}
