import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class VariantAlsoNegotiates extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].VariantAlsoNegotiates;

    constructor({
        res,
        message = VariantAlsoNegotiates.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = VariantAlsoNegotiates.defaultParams)
    {
        super({
            res,
            statusCode: VariantAlsoNegotiates.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
