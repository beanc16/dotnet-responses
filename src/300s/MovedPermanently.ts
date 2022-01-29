import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class MovedPermanently extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[300].MovedPermanently;

    constructor({
        res,
        message = MovedPermanently.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = MovedPermanently.defaultParams)
    {
        super({
            res,
            statusCode: MovedPermanently.defaultParams.statusCode,
            message,
            data,
        });
    }
}
