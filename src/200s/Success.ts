import { ResponseParamsWithNoStatus } from "../base";
import { Ok } from "./Ok";



export class Success extends Ok
{
    constructor({
        res,
        message,
        data,
        error,
    }: ResponseParamsWithNoStatus)
    {
        super({
            res,
            message: message ?? "Success",
            data,
            error,
        });
    }
}
