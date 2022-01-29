import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class TemporaryRedirect extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[300].TemporaryRedirect;

    constructor({
        res,
        message = TemporaryRedirect.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = TemporaryRedirect.defaultParams)
    {
        super({
            res,
            statusCode: TemporaryRedirect.defaultParams.statusCode,
            message,
            data,
        });
    }
}
