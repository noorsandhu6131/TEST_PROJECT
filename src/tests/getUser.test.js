const {getUserFromDatabase} = require('../functions/getUser.js');
// mocking an entire database module
jest.fn('../src/database');
//test suite procedure
test('fetching user from database', ()=>{
    jest.fn().mockReturnValueOnce({id: 1, name: 'HarnoorKaur'});
    const user = getUserFromDatabase(1);
    expect(user.name).toBe('HarnoorKaur');

});