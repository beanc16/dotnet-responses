import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Gone extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].Gone;

    constructor({
        res,
        message = Gone.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Gone.defaultParams)
    {
        super({
            res,
            statusCode: Gone.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
