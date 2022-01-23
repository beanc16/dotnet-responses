import { ResponseParamsWithNoStatus } from "../base";
import { Ok } from "./Ok";



export class Success extends Ok
{
    constructor({
        res,
        message = "Success",
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            message,
            data,
            error,
        });
    }
}
