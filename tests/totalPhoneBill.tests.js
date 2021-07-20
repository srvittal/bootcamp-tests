describe('Total phone bill tests', function () {

    it('Test uses call,sms,call,call as the usage', function () {
        assert.equal("R8.90", totalPhoneBill("call,sms,call,call"));
    });


});