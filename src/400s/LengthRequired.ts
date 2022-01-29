import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class LengthRequired extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].LengthRequired;

    constructor({
        res,
        message = LengthRequired.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = LengthRequired.defaultParams)
    {
        super({
            res,
            statusCode: LengthRequired.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
