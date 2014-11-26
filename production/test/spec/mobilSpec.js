define(['../../app/mobil/model'], function (mobilModel) {
    'use strict';
    suite('Mobil : mobilModel', function () {
        test("expected mobilModel as an object", function () {
            assert.equal(typeof mobilModel, 'object');
        });
    });
});
