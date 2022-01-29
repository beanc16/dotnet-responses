import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Created extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[200].Created;

    constructor({
        res,
        message = Created.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Created.defaultParams)
    {
        super({
            res,
            statusCode: Created.defaultParams.statusCode,
            message,
            data,
        });
    }
}
