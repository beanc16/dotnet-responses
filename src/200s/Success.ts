import { ResponseParamsWithNoStatus, defaultParams } from "../base";
import { Ok } from "./Ok";



export class Success extends Ok
{
    protected static override defaultParams = defaultParams[200].Success;

    constructor({
        res,
        message = Success.defaultParams.message,
        data,
    }: ResponseParamsWithNoStatus = Success.defaultParams)
    {
        super({
            res,
            message,
            data,
        });
    }
}
