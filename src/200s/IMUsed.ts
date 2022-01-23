import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class IMUsed extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 226,
        message: "Instance-Manipulations Used",
        data: null,
        error: null,
    };

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
