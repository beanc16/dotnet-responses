import { Success } from "../../200s/Success";
import { response as expressRes } from "express";
import { ExpressResponse } from "../../base";
import {
    ResDoesNotExistError,
    ResFunctionDoesNotExistError,
 } from "../../base/errors";



// Helpers
const defaultResponse = {
    res: undefined,
    statusCode: 200,
    message: "Success",
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
test("Success - Empty Params", function ()
{
    const response = new Success();
    const result = getResult();

    expect(response).toEqual(result);
});


test("Success - Undefined Params", function ()
{
    const params = {
        res: undefined,
    };

    const response = new Success(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`Success - message="hi"`, function ()
{
    const params = {
        res: undefined,
        message: "hi",
    };

    const response = new Success(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`Success - data={ foo: "bar" }`, function ()
{
    const params = {
        res: undefined,
        data: {
            foo: "bar",
        }
    };

    const response = new Success(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


// Object functions
test(`Success - send (undefined res)`, function ()
{
    const params = {
        res: undefined,
    };

    const response = new Success(params);

    expect(() => response.send()).toThrowError(ResDoesNotExistError);
});


test(`Success - send (null res)`, function ()
{
    const params = {
        res: null,
    };

    const response = new Success(params);

    expect(() => response.send()).toThrowError(ResDoesNotExistError);
});


test(`Success - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Success(params);

    // Express throws TypeError for non-live responses
    expect(() => response.send()).toThrowError(TypeError);
});


test(`Success - send (undefined function)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };
    // Remove send function to trigger error
    params.res.send = undefined;

    const response = new Success(params);

    expect(() => response.send()).toThrowError(ResFunctionDoesNotExistError);
});


test(`Success - json`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Success(params);

    // Express throws TypeError for non-live responses
    expect(() => response.json()).toThrowError(TypeError);
});


test(`Success - jsonp`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Success(params);

    // Express throws TypeError for non-live responses
    expect(() => response.jsonp()).toThrowError(TypeError);
});


test(`Success - sendStatus`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Success(params);

    // Express throws TypeError for non-live responses
    expect(() => response.sendStatus()).toThrowError(TypeError);
});


test(`Success - status (no input)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Success(params);
    const result = response.status();

    expect(params.res).toEqual(result);
});


test(`Success - status (statusCode=200)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Success(params);
    const result = response.status(200);

    expect(params.res).toEqual(result);
});


test(`Success - status (statusCode=400)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const response = new Success(params);
    const result = response.status(400);

    expect(params.res).toEqual(result);
});

// TODO: end


// Static functions
test(`Success static - send (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Success.send(params)).toThrowError(TypeError);
});


test(`Success static - json (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Success.json(params)).toThrowError(TypeError);
});


test(`Success static - jsonp (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Success.jsonp(params)).toThrowError(TypeError);
});


test(`Success static - sendStatus (valid res)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    // Express throws TypeError for non-live responses
    expect(() => Success.sendStatus(params)).toThrowError(TypeError);
});


test(`Success static - status (no input)`, function ()
{
    const params = {
        res: getExpressResponse(),
    };

    const result = Success.status(params);

    expect(params.res).toEqual(result);
});


test(`Success - status (statusCode=200)`, function ()
{
    const params = {
        res: getExpressResponse(),
        statusCode: 200,
    };

    const result = Success.status(params);

    expect(params.res).toEqual(result);
});


test(`Success - status (statusCode=400)`, function ()
{
    const params = {
        res: getExpressResponse(),
        statusCode: 400,
    };

    const result = Success.status(params);

    expect(params.res).toEqual(result);
});

// TODO: Static end
