import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class UseProxy extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[300].UseProxy;

    constructor({
        res,
        message = UseProxy.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = UseProxy.defaultParams)
    {
        super({
            res,
            statusCode: UseProxy.defaultParams.statusCode,
            message,
            data,
        });
    }
}
