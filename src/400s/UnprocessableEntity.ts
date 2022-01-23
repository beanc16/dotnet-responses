import { ResponseWithStatus, ResponseParamsWithNoStatus } from "../base";



export class UnprocessableEntity extends ResponseWithStatus
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 422,
        message: "Unprocessable Entity",
        data: null,
        error: null,
    };

    constructor({
        res,
        message = UnprocessableEntity.defaultParams.message,
        data,
        error,
    }: ResponseParamsWithNoStatus = UnprocessableEntity.defaultParams)
    {
        super({
            res,
            statusCode: UnprocessableEntity.defaultParams.statusCode,
            message,
            data,
            error,
        });
    }
}
