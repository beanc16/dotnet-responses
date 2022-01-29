import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class IMUsed extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].IMUsed;

    constructor({
        res,
        message = IMUsed.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = IMUsed.defaultParams)
    {
        super({
            res,
            statusCode: IMUsed.defaultParams.statusCode,
            message,
            data,
        });
    }
}
