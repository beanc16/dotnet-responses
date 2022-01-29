import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class UpgradeRequired extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].UpgradeRequired;

    constructor({
        res,
        message = UpgradeRequired.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = UpgradeRequired.defaultParams)
    {
        super({
            res,
            statusCode: UpgradeRequired.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
