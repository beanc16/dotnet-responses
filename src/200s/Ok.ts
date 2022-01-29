import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Ok extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].Ok;

    constructor({
        res,
        message = Ok.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Ok.defaultParams)
    {
        super({
            res,
            statusCode: Ok.defaultParams.statusCode,
            message,
            data,
        });
    }
}
