import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class FailedDependency extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].FailedDependency;

    constructor({
        res,
        message = FailedDependency.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = FailedDependency.defaultParams)
    {
        super({
            res,
            statusCode: FailedDependency.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
