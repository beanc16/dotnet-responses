import { statusCodeMap } from "./statusCodeMap";



export function getResponseByStatusCode(statusCode: number)
{
    return statusCodeMap[statusCode];
}
