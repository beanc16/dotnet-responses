import { Ok } from '../../200s/Ok';



// Helpers
const defaultResponse = {
    res: undefined,
    statusCode: 200,
    message: "Ok",
    data: null,
    error: null,
};

function getResult(params?: object)
{
    return Object.assign({}, defaultResponse, params);
}



// Tests
test("Okay - Empty Params", function ()
{
    const response = new Ok();
    const result = getResult();

    expect(response).toEqual(result);
});


test("Response - Undefined Params", function ()
{
    const params = {
        res: undefined,
    };

    const response = new Ok(params);
    const result = getResult(params);

    expect(response).toEqual(result);
});
