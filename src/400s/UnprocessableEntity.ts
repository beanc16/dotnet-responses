import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class UnprocessableEntity extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[400].UnprocessableEntity;

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
