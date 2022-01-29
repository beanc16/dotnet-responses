import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class Found extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[300].Found;

    constructor({
        res,
        message = Found.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Found.defaultParams)
    {
        super({
            res,
            statusCode: Found.defaultParams.statusCode,
            message,
            data,
        });
    }
}
