import { ResponseParamsWithNoStatus } from "../base";
import { Ok } from "./Ok";



export class Success extends Ok
{
    protected static override defaultParams = {
        res: undefined,
        statusCode: 200,
        message: "Success",
        data: null,
        error: null,
    };

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
