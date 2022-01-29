import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class BandwidthLimitExceeded extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].BandwidthLimitExceeded;

    constructor({
        res,
        message = BandwidthLimitExceeded.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = BandwidthLimitExceeded.defaultParams)
    {
        super({
            res,
            statusCode: BandwidthLimitExceeded.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
