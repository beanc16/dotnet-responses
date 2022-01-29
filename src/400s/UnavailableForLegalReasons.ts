import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class UnavailableForLegalReasons extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].UnavailableForLegalReasons;

    constructor({
        res,
        message = UnavailableForLegalReasons.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = UnavailableForLegalReasons.defaultParams)
    {
        super({
            res,
            statusCode: UnavailableForLegalReasons.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
