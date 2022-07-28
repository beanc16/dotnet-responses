import { getResponseByStatusCode } from "../../base/getResponseByStatusCode";
import { Continue } from "../../100s";
import { Ok } from "../../200s";
import { MultipleChoices } from "../../300s";
import { BadRequest } from "../../400s";
import { InternalServerError } from "../../500s";



// Tests
test(`getResponseByStatusCode - statusCode=100`, function ()
{
    const ResponseClass = getResponseByStatusCode(100);
    
    expect(ResponseClass).toEqual(Continue);
});

test(`getResponseByStatusCode - statusCode=200`, function ()
{
    const ResponseClass = getResponseByStatusCode(200);
    
    expect(ResponseClass).toEqual(Ok);
});

test(`getResponseByStatusCode - statusCode=300`, function ()
{
    const ResponseClass = getResponseByStatusCode(300);
    
    expect(ResponseClass).toEqual(MultipleChoices);
});

test(`getResponseByStatusCode - statusCode=400`, function ()
{
    const ResponseClass = getResponseByStatusCode(400);
    
    expect(ResponseClass).toEqual(BadRequest);
});

test(`getResponseByStatusCode - statusCode=500`, function ()
{
    const ResponseClass = getResponseByStatusCode(500);
    
    expect(ResponseClass).toEqual(InternalServerError);
});
