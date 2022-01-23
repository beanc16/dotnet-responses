import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class MultipleChoices extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 300,
        message: "Multiple Choices",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = MultipleChoices.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = MultipleChoices.defaultParams)
    {
        super({
            res,
            statusCode: MultipleChoices.defaultParams.statusCode,
            message,
            data,
        });
    }
}
