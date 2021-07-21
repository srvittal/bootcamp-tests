describe('Is weekday tests', function () {

    it('Test uses Saturday as the dayName', function () {
        assert.equal(isWeekday('Saturday'), false);
    });

    it('Test uses Monday as the dayName', function () {
        assert.equal(isWeekday('Monday'), true);
    });


});