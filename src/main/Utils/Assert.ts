
const chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

export class Assert{

    static async fail(actual,expected,message,operator)
    {
        // Throw a failure. Node.js assert module-compatible.
        return await assert.fail(actual, expected, message, operator);
    }

    static async isOk(object,message)
    {
        // Asserts that object is truthy.
        return await assert.isOk(object, message);
    }

    static async isNotOk(object,message)
    {
        // Asserts that object is falsy.
        return await assert.isNotOk(object, message);
    }

    static async equal(actual, expected, message)
    {
        // Asserts non-strict equality (==) of actual and expected
        return await assert.equal(actual, expected, message);
    }

    static async notEqual(actual, expected, message)
    {
        // Asserts non-strict inequality (!=) of actual and expected.
        return await assert.notEqual(actual, expected, message);
    }

    static async strictEqual(actual, expected, message)
    {
        // Asserts strict equality (===) of actual and expected.
        return await assert.strictEqual(actual, expected, message);
    }

    static async notStrictEqual(actual, expected, message)
    {
        // Asserts strict inequality (!==) of actual and expected
        return await assert.notStrictEqual(actual, expected, message);
    }

    static async deepEqual(actual, expected, message)
    {
        // Asserts that actual is deeply equal to expected
        return await assert.deepEqual(actual, expected, message);
    }

    static async notDeepEqual(actual, expected, message)
    {
        // Assert that actual is not deeply equal to expected
        return await assert.notDeepEqual(actual, expected, message);
    }

    static async isAbove(valueToCheck, valueToBeAbove, message)
    {
        // Asserts valueToCheck is strictly greater than (>) valueToBeAbove.
        return await assert.isAbove(valueToCheck, valueToBeAbove, message);
    }

    static async isAtLeast(valueToCheck, valueToBeAtLeast, message)
    {
        // Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast.
        return await assert.isAtLeast(valueToCheck, valueToBeAtLeast, message);
    }

    static async isBelow(valueToCheck, valueToBeBelow, message)
    {
        // Asserts valueToCheck is strictly less than (<) valueToBeBelow.
        return await assert.isBelow(valueToCheck, valueToBeBelow, message);
    }

    static async isAtMost(valueToCheck, valueToBeAtMost, message)
    {
        // Asserts valueToCheck is less than or equal to (<=) valueToBeAtMost.
        return await assert.isAtMost(valueToCheck, valueToBeAtMost, message);
    }

    static async isTrue(value, message)
    {
        // Asserts that value is true.
        return await assert.isTrue(value, message);
    }

    static async isNotTrue(value, message)
    {
        // Asserts that value is not true.
        return await assert.isNotTrue(value, message);
    }

    static async isFalse(value, message)
    {
        // Asserts that value is false.
        return await assert.isFalse(value, message);
    }

    static async isNotFalse(value, message)
    {
        // Asserts that value is not false.
        return await assert.isNotFalse(value, message);
    }

    static async isNull(value, message)
    {
        // Asserts that value is null.
        return await assert.isNull(value, message);
    }

    static async isNotNull(value, message)
    {
        // Asserts that value is not null.
        return await assert.isNotNull(value, message);
    }

    static async match(value, regexp, message)
    {
        // Asserts that value matches the regular expression regexp.
        return await assert.match(value, regexp, message);
    }

    static async notMatch(value, regexp, message)
    {
        // Asserts that value does not match the regular expression regexp.
        return await assert.notMatch(value, regexp, message);
    }

    static async closeTo(actual, expected, delta, message)
    {
        // Asserts that the target is equal expected, to within a +/- delta range.
        return await assert.closeTo(actual, expected, delta, message);
    }

    static async sameMembers(set1, set2)
    {
        // Asserts that set1 and set2 have the same members in any order. Uses a strict equality check (===).
        return await assert.sameMembers(set1, set2,'Same Members');
    }

    static async notSameMembers(set1, set2)
    {
        // Asserts that set1 and set2 don’t have the same members in any order. Uses a strict equality check (===).
        return await assert.notSameMembers(set1, set2,'Not Same Members');
    }
    
    static async sameDeepMembers(set1, set2)
    {
        // Asserts that set1 and set2 have the same members in any order. Uses a deep equality check.
        return await assert.sameDeepMembers(set1, set2,'Same deep Members');
    }

    static async notSameDeepMembers(set1, set2)
    {
        // Asserts that set1 and set2 don’t have the same members in any order. Uses a deep equality check.
        return await assert.notSameDeepMembers(set1, set2,'Not Same deep Members');
    }

    static async sameOrderedMembers(set1, set2)
    {
        // Asserts that set1 and set2 have the same members in the same order. Uses a strict equality check (===).
        return await assert.sameOrderedMembers(set1, set2,'same ordered members');
    }

    static async notSameOrderedMembers(set1, set2)
    {
        // Asserts that set1 and set2 don’t have the same members in the same order. Uses a strict equality check (===).
        return await assert.notSameOrderedMembers(set1, set2,'not same ordered members');
    }

    static async sameDeepOrderedMembers(set1, set2)
    {
        // Asserts that set1 and set2 have the same members in the same order. Uses a deep equality check.
        return await assert.sameDeepOrderedMembers(set1, set2,'same deep ordered members');
    }

    static async notSameDeepOrderedMembers(set1, set2)
    {
        // Asserts that set1 and set2 don’t have the same members in the same order. Uses a deep equality check.
        return await assert.notSameOrderedMembers(set1, set2,'not same deep ordered members');
    }

    static async includeMembers(superset, subset)
    {
        // Asserts that subset is included in superset in any order. Uses a strict equality check (===). Duplicates are ignored.
        return await assert.includeMembers(superset, subset, 'superset includes subset members');
    }

    static async notIncludeMembers(superset, subset)
    {
        // Asserts that subset isn’t included in superset in any order. Uses a strict equality check (===). Duplicates are ignored.
        return await assert.notIncludeMembers(superset, subset, 'superset not includes subset members');
    }

    static async includeDeepMembers(superset, subset)
    {
        // Asserts that subset is included in superset in any order. Uses a deep equality check. Duplicates are ignored.
        return await assert.includeDeepMembers(superset, subset, 'superset includes deep subset members');
    }

    static async notIncludeDeepMembers(superset, subset)
    {
        // Asserts that subset isn’t included in superset in any order. Uses a deep equality check. Duplicates are ignored.
        return await assert.notIncludeDeepMembers(superset, subset, 'superset not includes deep subset members');
    }

    static async includeOrderedMembers(superset, subset)
    {
        // Asserts that subset is included in superset in the same order beginning with the first element 
        // in superset. Uses a strict equality check (===).
        return await assert.includeOrderedMembers(superset, subset, 'superset includes ordered subset members');
    }

    static async notIncludeOrderedMembers(superset, subset)
    {
        // Asserts that subset isn’t included in superset in the same order beginning with the first element in superset. 
        // Uses a strict equality check (===).
        return await assert.notIncludeOrderedMembers(superset, subset, 'superset not includes ordered subset members');
    }

    static async includeDeepOrderedMembers(superset, subset)
    {
        // Asserts that subset is included in superset in the same order beginning with the first element in superset. 
        // Uses a deep equality check.
        return await assert.includeDeepOrderedMembers(superset, subset, 'superset includes deep ordered subset members');
    }

    static async notIncludeDeepOrderedMembers(superset, subset)
    {
        // Asserts that subset isn’t included in superset in the same order beginning with the first element 
        // in superset. Uses a deep equality check.
        return await assert.notIncludeDeepOrderedMembers(superset, subset, 'superset not includes deep ordered subset members');
    }

    static async isEmpty(target)
    {
        // Asserts that the target does not contain any values. For arrays and strings, 
        // it checks the length property. For Map and Set instances, it checks the size property. 
        // For non-function objects, it gets the count of own enumerable string keys.
        return await assert.isEmpty(target,'is Empty');
    }

    static async isNotEmpty(target)
    {
        // Asserts that the target contains values. For arrays and strings, it checks the length property. 
        // For Map and Set instances, it checks the size property. For non-function objects, 
        // it gets the count of own enumerable string keys.
        return await assert.isNotEmpty(target,'is Not Empty');
    }

}