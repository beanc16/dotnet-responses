import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Locked extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].Locked;

    constructor({
        res,
        message = Locked.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = Locked.defaultParams)
    {
        super({
            res,
            statusCode: Locked.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
