import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class MultiStatus extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].MultiStatus;

    constructor({
        res,
        message = MultiStatus.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = MultiStatus.defaultParams)
    {
        super({
            res,
            statusCode: MultiStatus.defaultParams.statusCode,
            message,
            data,
        });
    }
}
