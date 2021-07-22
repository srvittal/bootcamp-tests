describe('Find items over 20 tests', function () {

    it("Test uses [{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3}] as the list", function () {
        assert.deepEqual([{name : 'pears', qty : 37},{name : 'bananas', qty : 27},], findItemsOver20([{name : 'apples', qty : 10},{name : 'pears', qty : 37},{name : 'bananas', qty : 27},{name : 'apples', qty : 3},]));
    });

    it("Test uses [{name : 'apples', qty : 10},{name : 'pears', qty : 19},{name : 'bananas', qty : 17},{name : 'apples', qty : 3}] as the list", function () {
        assert.deepEqual([], findItemsOver20([{name : 'apples', qty : 10},{name : 'pears', qty : 19},{name : 'bananas', qty : 17},{name : 'apples', qty : 3},]));
    });

    it("Test uses [{name : 'apples', qty : 40},{name : 'pears', qty : 20},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}] as the list", function () {
        assert.deepEqual([{name : 'apples', qty : 40},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}], findItemsOver20([{name : 'apples', qty : 40},{name : 'pears', qty : 20},{name : 'bananas', qty : 23},{name : 'apples', qty : 37}]));
    });

});