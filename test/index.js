/* eslint-env mocha */

const assert = require('assert');
const helpers = require('../src/helpers');

describe('Helpers', function() {
    describe('#formatCurrencyValue', function() {
        it('should return formatted currency value', function() {
            const result1 = helpers.formatCurrencyValue(10, 'GBP');
            const expectedResult1 = '£10';
            const result2 = helpers.formatCurrencyValue(5, 'EUR');
            const expectedResult2 = '€5';

            assert.equal(result1, expectedResult1);
            assert.equal(result2, expectedResult2);
        });

        it('should throw on invalid input', function() {
            assert.throws(() => {
                return helpers.formatCurrencyValue('10', 'GBP')
            }, (error) => error instanceof TypeError);

            assert.throws(() => {
                return helpers.formatCurrencyValue(5);
            });
        });
    });

    describe('#calculateDegree', function() {
        it('should return correct degree', function() {
            const result1 = helpers.calculateDegree(10, 0, 10);
            const expectedResult1 = 180;
            const result2 = helpers.calculateDegree(5, 0, 10);
            const expectedResult2 = 90;
            const result3 = helpers.calculateDegree(0, 0, 10);
            const expectedResult3 = 0;

            assert.equal(result1, expectedResult1);
            assert.equal(result2, expectedResult2);
            assert.equal(result3, expectedResult3);
        });

        it('should stay within <0, 180> range on incorrect input', function() {
            const result1 = helpers.calculateDegree(15, 0, 10);
            const expectedResult1 = 180;
            const result2 = helpers.calculateDegree(0, 5, 10);
            const expectedResult2 = 0;

            assert.equal(result1, expectedResult1);
            assert.equal(result2, expectedResult2);
        });
    });
});