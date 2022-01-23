import { BadRequest } from "../../400s/BadRequest";
import { response as expressRes } from "express";
import { ExpressResponse } from "../../base";
import {
    ResDoesNotExistError,
    ResFunctionDoesNotExistError,
 } from "../../base/errors";



// Helpers
const defaultResponse = {
    res: undefined,
    statusCode: 400,
    message: "Bad Request",
    data: null,
    error: null,
};

function getResult(params?: object)
{
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
test("BadRequest - Empty Params", function ()
{
    const response = new BadRequest();
    const result = getResult();

    expect(response).toEqual(result);
});


test("BadRequest - Undefined Params", function ()
{
    const params = {
        res: undefined,
    };

    const response = new BadRequest(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`BadRequest - message="hi"`, function ()
{
    const params = {
        res: undefined,
        message: "hi",
    };

    const response = new BadRequest(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`BadRequest - data={ foo: "bar" }`, function ()
{
    const params = {
        res: undefined,
        data: {
            foo: "bar",
        }
    };

    const response = new BadRequest(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`BadRequest - Error`, function ()
{
    const params = {
        res: undefined,
        error: new Error("I'm a big scary error!"),
    };

    const response = new BadRequest(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`BadRequest - Custom Error`, function ()
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

    const response = new BadRequest(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


// Object functions
test(`BadRequest - send (undefined res)`, function ()
{
    const params = {
        res: undefined,
    };

    const response = new BadRequest(params);

    expect(() => response.send()).toThrowError(ResDoesNotExistError);
});


test(`BadRequest - send (null res)`, function ()
{
    const params = {
        res: null,
    };

    const response = new BadRequest(params);

    expect(() => response.send()).toThrowError(ResDoesNotExistError);
});


test(`BadRequest - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new BadRequest(params);

    // Express throws TypeError for non-live responses
    expect(() => response.send()).toThrowError(TypeError);
});


test(`BadRequest - send (undefined function)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };
    // Remove send function to trigger error
    params.res.send = undefined;

    const response = new BadRequest(params);

    expect(() => response.send()).toThrowError(ResFunctionDoesNotExistError);
});


test(`BadRequest - json`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new BadRequest(params);

    // Express throws TypeError for non-live responses
    expect(() => response.json()).toThrowError(TypeError);
});


test(`BadRequest - jsonp`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new BadRequest(params);

    // Express throws TypeError for non-live responses
    expect(() => response.jsonp()).toThrowError(TypeError);
});


test(`BadRequest - sendStatus`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new BadRequest(params);

    // Express throws TypeError for non-live responses
    expect(() => response.sendStatus()).toThrowError(TypeError);
});


test(`BadRequest - status (no input)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new BadRequest(params);
    const result = response.status();

    expect(params.res).toEqual(result);
});


test(`BadRequest - status (statusCode=200)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new BadRequest(params);
    const result = response.status(200);

    expect(params.res).toEqual(result);
});


test(`BadRequest - status (statusCode=400)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new BadRequest(params);
    const result = response.status(400);

    expect(params.res).toEqual(result);
});

// TODO: end


// Static functions
test(`BadRequest static - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => BadRequest.send(params)).toThrowError(TypeError);
});


test(`BadRequest static - json (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => BadRequest.json(params)).toThrowError(TypeError);
});


test(`BadRequest static - jsonp (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => BadRequest.jsonp(params)).toThrowError(TypeError);
});


test(`BadRequest static - sendStatus (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => BadRequest.sendStatus(params)).toThrowError(TypeError);
});


test(`BadRequest static - status (no input)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const result = BadRequest.status(params);

    expect(params.res).toEqual(result);
});


test(`BadRequest - status (statusCode=200)`, function ()
{
    const params = {
        res: getExpressResponse(),
        statusCode: 200,
    };

    const result = BadRequest.status(params);

    expect(params.res).toEqual(result);
});


test(`BadRequest - status (statusCode=400)`, function ()
{
    const params = {
        res: getExpressResponse(),
        statusCode: 400,
    };

    const result = BadRequest.status(params);

    expect(params.res).toEqual(result);
});

// TODO: Static end
