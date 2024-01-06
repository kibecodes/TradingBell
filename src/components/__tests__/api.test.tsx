import nock from 'nock';

test('should fetch data from the API', async () => {
  const mockResponse = {
    "ticker": "AAPL",
    "queryCount": 1,
    "resultsCount": 1,
    "adjusted": true,
    "results": [
        {
            "v": 7.0790813e+07,
            "vw": 131.6292,
            "o": 130.465,
            "c": 130.15,
            "h": 133.41,
            "l": 129.89,
            "t": 1673240400000,
            "n": 645365
        }
    ],
    "status": "OK",
    //** "request_id": "ca1b28db567342cb9a5f344625f3f538", **//
    "count": 1
  };

  nock('https://api.polygon.io')
    .get('/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U')
    .reply(200, mockResponse);

  const fetchDataFromAPI = async () => {
    const response = await fetch('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=tWerjbnMMo3aH2xOpsTBVMx50KfE2F7U');
    return response.json();
  };

  const data = await fetchDataFromAPI();
  delete data.request_id;
  expect(data).toEqual(mockResponse);
});

