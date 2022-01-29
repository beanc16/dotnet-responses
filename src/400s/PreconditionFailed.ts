import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class PreconditionFailed extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].PreconditionFailed;

    constructor({
        res,
        message = PreconditionFailed.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = PreconditionFailed.defaultParams)
    {
        super({
            res,
            statusCode: PreconditionFailed.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
