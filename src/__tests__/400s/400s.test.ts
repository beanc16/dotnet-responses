import * as Responses400s from "../../400s";
import { defaultParams } from "../../base/defaultParams";
import { response as expressRes } from "express";
import { ExpressResponse } from "../../base";
import {
    ResDoesNotExistError,
    ResFunctionDoesNotExistError,
} from "../../base/errors";



// Helpers
function getResult(responseName: string, params?: object)
{
    const defaultResponse = defaultParams[400][responseName];

    return Object.assign({}, defaultResponse, params);
}

function getExpressResponse() : ExpressResponse
{
    const output = {
        status: expressRes.status,
        statusCode: expressRes.statusCode,
    };

    Object.entries(expressRes).map(function ([key, value])
    {
        output[key] = value;
    });

    return output;
}



for (const [responseName, ResponseModel] of Object.entries(Responses400s))
{
    // Constructor
    test(`${responseName} - Empty Params`, function ()
    {
        const response = new ResponseModel();
        const result = getResult(responseName);
    
        expect(response).toEqual(result);
    });
    
    
    test(`${responseName} - Undefined Params`, function ()
    {
        const params = {
            res: undefined,
        };
    
        const response = new ResponseModel(params);
        const result = getResult(responseName, params);
    
        expect(response).toEqual(result);
    });
    
    
    test(`${responseName} - message="hi"`, function ()
    {
        const params = {
            res: undefined,
            message: "hi",
        };
    
        const response = new ResponseModel(params);
        const result = getResult(responseName, params);
    
        expect(response).toEqual(result);
    });
    
    
    test(`${responseName} - data={ foo: "bar" }`, function ()
    {
        const params = {
            res: undefined,
            data: {
                foo: "bar",
            }
        };
    
        const response = new ResponseModel(params);
        const result = getResult(responseName, params);
    
        expect(response).toEqual(result);
    });
    
    
    test(`${responseName} - Error`, function ()
    {
        const params = {
            res: undefined,
            error: new Error("I'm a big scary error!"),
        };
    
        const response = new ResponseModel(params);
        const result = getResult(responseName, params);
    
        expect(response).toEqual(result);
    });
    
    
    test(`${responseName} - Custom Error`, function ()
    {
        class BigScaryError extends Error
        {
            constructor()
            {
                super("I'm a big scary error!");
            }
        }
        
        const params = {
            res: undefined,
            error: new BigScaryError(),
        };
    
        const response = new ResponseModel(params);
        const result = getResult(responseName, params);
    
        expect(response).toEqual(result);
    });
    
    
    // Object functions
    test(`${responseName} - send (undefined res)`, function ()
    {
        const params = {
            res: undefined,
        };
    
        const response = new ResponseModel(params);
    
        expect(() => response.send()).toThrowError(ResDoesNotExistError);
    });
    
    
    test(`${responseName} - send (null res)`, function ()
    {
        const params = {
            res: null,
        };
    
        const response = new ResponseModel(params);
    
        expect(() => response.send()).toThrowError(ResDoesNotExistError);
    });
    
    
    test(`${responseName} - send (valid res)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const response = new ResponseModel(params);
    
        // Express throws TypeError for non-live responses
        expect(() => response.send()).toThrowError(TypeError);
    });
    
    
    test(`${responseName} - send (undefined function)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
        // Remove send function to trigger error
        params.res.send = undefined;
    
        const response = new ResponseModel(params);
    
        expect(() => response.send()).toThrowError(ResFunctionDoesNotExistError);
    });
    
    
    test(`${responseName} - json`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const response = new ResponseModel(params);
    
        // Express throws TypeError for non-live responses
        expect(() => response.json()).toThrowError(TypeError);
    });
    
    
    test(`${responseName} - jsonp`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const response = new ResponseModel(params);
    
        // Express throws TypeError for non-live responses
        expect(() => response.jsonp()).toThrowError(TypeError);
    });
    
    
    test(`${responseName} - sendStatus`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const response = new ResponseModel(params);
    
        // Express throws TypeError for non-live responses
        expect(() => response.sendStatus()).toThrowError(TypeError);
    });
    
    
    test(`${responseName} - status (no input)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const response = new ResponseModel(params);
        const result = response.status();
    
        expect(params.res).toEqual(result);
    });
    
    
    test(`${responseName} - status (statusCode=200)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const response = new ResponseModel(params);
        const result = response.status(200);
    
        expect(params.res).toEqual(result);
    });
    
    
    test(`${responseName} - status (statusCode=400)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const response = new ResponseModel(params);
        const result = response.status(400);
    
        expect(params.res).toEqual(result);
    });
    
    
    test(`${responseName} - end`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const response = new ResponseModel(params);
    
        expect(() => response.end()).toThrowError(ResFunctionDoesNotExistError);
    });
    
    
    // Static functions
    test(`${responseName} static - send (valid res)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        // Express throws TypeError for non-live responses
        expect(() => ResponseModel.send(params)).toThrowError(TypeError);
    });
    
    
    test(`${responseName} static - json (valid res)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        // Express throws TypeError for non-live responses
        expect(() => ResponseModel.json(params)).toThrowError(TypeError);
    });
    
    
    test(`${responseName} static - jsonp (valid res)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        // Express throws TypeError for non-live responses
        expect(() => ResponseModel.jsonp(params)).toThrowError(TypeError);
    });
    
    
    test(`${responseName} static - sendStatus (valid res)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        // Express throws TypeError for non-live responses
        expect(() => ResponseModel.sendStatus(params)).toThrowError(TypeError);
    });
    
    
    test(`${responseName} static - status (no input)`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        const result = ResponseModel.status(params);
    
        expect(params.res).toEqual(result);
    });
    
    
    test(`${responseName} - status (statusCode=200)`, function ()
    {
        const params = {
            res: getExpressResponse(),
            statusCode: 200,
        };
    
        const result = ResponseModel.status(params);
    
        expect(params.res).toEqual(result);
    });
    
    
    test(`${responseName} - status (statusCode=400)`, function ()
    {
        const params = {
            res: getExpressResponse(),
            statusCode: 400,
        };
    
        const result = ResponseModel.status(params);
    
        expect(params.res).toEqual(result);
    });
    
    
    test(`${responseName} static - end`, function ()
    {
        const params = {
            res: getExpressResponse(),
        };
    
        // Express throws TypeError for non-live responses
        expect(() => ResponseModel.end(params)).toThrowError(ResFunctionDoesNotExistError);
    });
}
