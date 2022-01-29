import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class NoResponse extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].NoResponse;

    constructor({
        res,
        message = NoResponse.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = NoResponse.defaultParams)
    {
        super({
            res,
            statusCode: NoResponse.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
