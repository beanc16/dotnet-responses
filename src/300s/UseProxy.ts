import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class UseProxy extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 305,
        message: "Use Proxy",
        data: null,
        error: null,
    };

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
