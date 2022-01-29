import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class PermanentRedirect extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[300].PermanentRedirect;

    constructor({
        res,
        message = PermanentRedirect.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = PermanentRedirect.defaultParams)
    {
        super({
            res,
            statusCode: PermanentRedirect.defaultParams.statusCode,
            message,
            data,
        });
    }
}
