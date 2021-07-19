describe('Is from Bellville tests' , function(){

    it('Test uses Sudarshan as the numPlate' , function(){
        assert.equal(True,isFromBellville("CY"));
    });

    it('Test uses Jack as the numPlate' , function(){
        assert.deepEqual("Hello, Jack",isFromBellville("Jack"));
    });

    it('Test uses Jill as the numPlate' , function(){
        assert.equal("Hello, Jill",isFromBellville("Jill"));
    });

});