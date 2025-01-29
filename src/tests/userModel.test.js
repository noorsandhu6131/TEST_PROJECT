const mongoose = require('mongoose');
const {createUser, User} = require('../functions/userModel.js');


describe('user model test', () =>{
    beforeEach(()=>{
        //clear all mocks after each test
        jest.clearAllMocks();

    });

    describe('createUser', ()=>{
        //test dtypes, unique email, age boundary, validation/verification, 

        //AAA pattern 
        it('should create the new user',  async() => {
            //arrange - setup the variables

       
        const mockUser = { name: "myname", 
            email:"mygmail@gmail.com",
             password:"password", 
             age: 19 };

            // action
             jest.spyOn(User.prototype, 'save').mockResolvedValue(mockUser);
             const result = await createUser('myname', 'mygmail@gmail.com','password',19 );

             //Assert
            expect(result).toEqual(expect.objectContaining(mockUser));
            expect(User.prototype.save).toHaveBeenCalledTimes(1);

 
        });



    });
});