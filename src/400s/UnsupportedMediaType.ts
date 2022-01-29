import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class UnsupportedMediaType extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].UnsupportedMediaType;

    constructor({
        res,
        message = UnsupportedMediaType.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = UnsupportedMediaType.defaultParams)
    {
        super({
            res,
            statusCode: UnsupportedMediaType.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
