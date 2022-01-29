import {
    ResponseWithStatus,
    ResponseParamsWithNoStatus,
    defaultParams,
} from "../base";



export class SwitchingProtocols extends ResponseWithStatus
{
    protected static override defaultParams = defaultParams[100].SwitchingProtocols;

    constructor({
        res,
        message = SwitchingProtocols.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = SwitchingProtocols.defaultParams)
    {
        super({
            res,
            statusCode: SwitchingProtocols.defaultParams.statusCode,
            message,
            data,
        });
    }
}
