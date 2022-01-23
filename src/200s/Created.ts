import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class Created extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 201,
        message: "Created",
        data: null,
        error: null,
    };

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
