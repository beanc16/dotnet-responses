import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Accepted extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].Accepted;

    constructor({
        res,
        message = Accepted.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Accepted.defaultParams)
    {
        super({
            res,
            statusCode: Accepted.defaultParams.statusCode,
            message,
            data,
        });
    }
}
