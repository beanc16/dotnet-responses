import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class AlreadyReported extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].AlreadyReported;

    constructor({
        res,
        message = AlreadyReported.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = AlreadyReported.defaultParams)
    {
        super({
            res,
            statusCode: AlreadyReported.defaultParams.statusCode,
            message,
            data,
        });
    }
}
