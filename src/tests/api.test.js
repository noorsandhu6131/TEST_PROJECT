
const { fetchData } = require('../functions/api.js');


describe('fetchData', () =>{
    it('should give us data in json', async () =>{
        // mock the function first 
        const fetchData = jest.fn()
        // arrange mock function responsse
        fetchData.mockResolvedValue({ id: 1, product: "A"});
        // act by envoking the real  function
        const data = await fetchData();
        // assert
        expect(data).toEqual({id: 1, product: "A"})
        expect(fetchData).toHaveBeenCalled();


    });
    });