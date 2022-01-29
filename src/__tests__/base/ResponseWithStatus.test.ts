import { response as expressRes } from "express";
import {
    ExpressResponse,
    defaultParams,
    ResDoesNotExistError,
    ResFunctionDoesNotExistError,
    ResponseWithStatus,
} from "../../base";



// Helpers
function getResult(params?: object)
{
    const defaultResponse = {
        statusCode: 200,
        message: null,
        data: null,
        error: null,
    };

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



// Constructor
test(`ResponseWithStatus - Empty Params`, function ()
{
    const response = new ResponseWithStatus({});
    const result = getResult();

    expect(response).toEqual(result);
});


test(`ResponseWithStatus - Undefined Params`, function ()
{
    const params = {
        res: undefined,
    };

    const response = new ResponseWithStatus(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`ResponseWithStatus - message="hi"`, function ()
{
    const params = {
        res: undefined,
        message: "hi",
    };

    const response = new ResponseWithStatus(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`ResponseWithStatus - data={ foo: "bar" }`, function ()
{
    const params = {
        res: undefined,
        data: {
            foo: "bar",
        }
    };

    const response = new ResponseWithStatus(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`ResponseWithStatus - Error`, function ()
{
    const params = {
        res: undefined,
        error: new Error("I'm a big scary error!"),
    };

    const response = new ResponseWithStatus(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`ResponseWithStatus - Custom Error`, function ()
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

    const response = new ResponseWithStatus(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


// Object functions
test(`ResponseWithStatus - send (undefined res)`, function ()
{
    const params = {
        res: undefined,
    };

    const response = new ResponseWithStatus(params);

    expect(() => response.send()).toThrowError(ResDoesNotExistError);
});


test(`ResponseWithStatus - send (null res)`, function ()
{
    const params = {
        res: null,
    };

    const response = new ResponseWithStatus(params);

    expect(() => response.send()).toThrowError(ResDoesNotExistError);
});


test(`ResponseWithStatus - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new ResponseWithStatus(params);

    // Express throws TypeError for non-live responses
    expect(() => response.send()).toThrowError(TypeError);
});


test(`ResponseWithStatus - send (undefined function)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };
    // Remove send function to trigger error
    params.res.send = undefined;

    const response = new ResponseWithStatus(params);

    expect(() => response.send()).toThrowError(ResFunctionDoesNotExistError);
});


test(`ResponseWithStatus - json`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new ResponseWithStatus(params);

    // Express throws TypeError for non-live responses
    expect(() => response.json()).toThrowError(TypeError);
});


test(`ResponseWithStatus - jsonp`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new ResponseWithStatus(params);

    // Express throws TypeError for non-live responses
    expect(() => response.jsonp()).toThrowError(TypeError);
});


test(`ResponseWithStatus - sendStatus`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new ResponseWithStatus(params);

    // Express throws TypeError for non-live responses
    expect(() => response.sendStatus()).toThrowError(TypeError);
});


test(`ResponseWithStatus - status (no input)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new ResponseWithStatus(params);
    const result = response.status();

    expect(params.res).toEqual(result);
});


test(`ResponseWithStatus - status (statusCode=200)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new ResponseWithStatus(params);
    const result = response.status(200);

    expect(params.res).toEqual(result);
});


test(`ResponseWithStatus - status (statusCode=400)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new ResponseWithStatus(params);
    const result = response.status(400);

    expect(params.res).toEqual(result);
});


test(`ResponseWithStatus - end`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new ResponseWithStatus(params);

    expect(() => response.end()).toThrowError(ResFunctionDoesNotExistError);
});


// Static functions
test(`ResponseWithStatus static - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => ResponseWithStatus.send(params)).toThrowError(TypeError);
});


test(`ResponseWithStatus static - json (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => ResponseWithStatus.json(params)).toThrowError(TypeError);
});


test(`ResponseWithStatus static - jsonp (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => ResponseWithStatus.jsonp(params)).toThrowError(TypeError);
});


test(`ResponseWithStatus static - sendStatus (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => ResponseWithStatus.sendStatus(params)).toThrowError(TypeError);
});


test(`ResponseWithStatus static - status (no input)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const result = ResponseWithStatus.status(params);

    expect(params.res).toEqual(result);
});


test(`ResponseWithStatus - status (statusCode=200)`, function ()
{
    const params = {
        res: getExpressResponse(),
        statusCode: 200,
    };

    const result = ResponseWithStatus.status(params);

    expect(params.res).toEqual(result);
});


test(`ResponseWithStatus - status (statusCode=400)`, function ()
{
    const params = {
        res: getExpressResponse(),
        statusCode: 400,
    };

    const result = ResponseWithStatus.status(params);

    expect(params.res).toEqual(result);
});


test(`ResponseWithStatus static - end`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => ResponseWithStatus.end(params)).toThrowError(ResFunctionDoesNotExistError);
});
