import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class PreconditionRequired extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].PreconditionRequired;

    constructor({
        res,
        message = PreconditionRequired.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = PreconditionRequired.defaultParams)
    {
        super({
            res,
            statusCode: PreconditionRequired.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
