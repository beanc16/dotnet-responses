import { BaseResponseParams } from './BaseResponseParams';



interface ExpressResponse
{
    statusCode: number;
    [key: string]: any;
}

export interface ResponseParams extends BaseResponseParams
{
    res: ExpressResponse;
}
