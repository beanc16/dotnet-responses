import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class InsufficientStorage extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[500].InsufficientStorage;

    constructor({
        res,
        message = InsufficientStorage.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = InsufficientStorage.defaultParams)
    {
        super({
            res,
            statusCode: InsufficientStorage.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
