import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class ExpectationFailed extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].ExpectationFailed;

    constructor({
        res,
        message = ExpectationFailed.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = ExpectationFailed.defaultParams)
    {
        super({
            res,
            statusCode: ExpectationFailed.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
