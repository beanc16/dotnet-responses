import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class LoopDetected extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].LoopDetected;

    constructor({
        res,
        message = LoopDetected.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = LoopDetected.defaultParams)
    {
        super({
            res,
            statusCode: LoopDetected.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
