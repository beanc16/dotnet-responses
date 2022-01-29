import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class MultipleChoices extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[300].MultipleChoices;

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
