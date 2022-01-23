import { Response } from '../../base/Response';



// Helpers
const defaultResponse = {
    statusCode: 200,
    message: null,
    data: null,
    error: null,
};

function getResult(params?: object)
{
    return Object.assign({}, defaultResponse, params);
}



// Tests
test("Response - Empty Params", function ()
{
    const response = new Response();
    const result = getResult();

    expect(response).toEqual(result);
});


test("Response - Undefined Params", function ()
{
    const params = {
    };

    const response = new Response(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test("Response - statusCode=400", function ()
{
    const params = {
        statusCode: 400,
    };

    const response = new Response(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`Response - message="hi"`, function ()
{
    const params = {
        message: "hi",
    };

    const response = new Response(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`Response - data={ foo: "bar" }`, function ()
{
    const params = {
        data: {
            foo: "bar",
        }
    };

    const response = new Response(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`Response - Error`, function ()
{
    const params = {
        error: new Error("I'm a big scary error!"),
    };

    const response = new Response(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});


test(`Response - Custom Error`, function ()
{
    class BigScaryError extends Error
    {
        constructor()
        {
            super("I'm a big scary error!");
        }
    }
    
    const params = {
        error: new BigScaryError(),
    };

    const response = new Response(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});
