import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class SeeOther extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[300].SeeOther;

    constructor({
        res,
        message = SeeOther.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = SeeOther.defaultParams)
    {
        super({
            res,
            statusCode: SeeOther.defaultParams.statusCode,
            message,
            data,
        });
    }
}
