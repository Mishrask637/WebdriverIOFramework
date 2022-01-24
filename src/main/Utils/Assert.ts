
const chai = require('chai');
var assert = chai.assert;    // Using Assert style
var expect = chai.expect;    // Using Expect style
var should = chai.should();  // Using Should style

export class Assert{

    static async fail(actual,expected,operator)
    {
        // Throw a failure. Node.js assert module-compatible.
        return await assert.fail(actual, expected,expected+' is not equal to '+actual, operator);
    }

    static async isOk(object)
    {
        // Asserts that object is truthy.
        return await assert.isOk(object, object+' is Not OK');
    }

    static async isNotOk(object)
    {
        // Asserts that object is falsy.
        return await assert.isNotOk(object, object+' is OK');
    }

    static async equal(actual, expected)
    {
        // Asserts non-strict equality (==) of actual and expected
        return await assert.equal(actual, expected, expected+' is Not Equal to '+actual);
    }

    static async notEqual(actual, expected)
    {
        // Asserts non-strict inequality (!=) of actual and expected.
        return await assert.notEqual(actual, expected, expected+' is Equal to '+actual);
    }

    static async strictEqual(actual, expected)
    {
        // Asserts strict equality (===) of actual and expected.
        return await assert.strictEqual(actual, expected, expected+' is Not Strictly Equal to '+actual);
    }

    static async notStrictEqual(actual, expected)
    {
        // Asserts strict inequality (!==) of actual and expected
        return await assert.notStrictEqual(actual, expected, expected+' is Strictly Equal to '+actual);
    }

    static async deepEqual(actual, expected)
    {
        // Asserts that actual is deeply equal to expected
        return await assert.deepEqual(actual, expected, expected+' is Not Deeply Equal to '+actual);
    }

    static async notDeepEqual(actual, expected)
    {
        // Assert that actual is not deeply equal to expected
        return await assert.notDeepEqual(actual, expected, actual+' is Deeply Equal to '+expected);
    }

    static async isAbove(valueToCheck, valueToBeAbove)
    {
        // Asserts valueToCheck is strictly greater than (>) valueToBeAbove.
        return await assert.isAbove(valueToCheck, valueToBeAbove, valueToCheck+' is Not strictly greater than '+valueToBeAbove);
    }

    static async isAtLeast(valueToCheck, valueToBeAtLeast)
    {
        // Asserts valueToCheck is greater than or equal to (>=) valueToBeAtLeast.
        return await assert.isAtLeast(valueToCheck, valueToBeAtLeast, valueToCheck+' is Not greater or equal to '+valueToBeAtLeast);
    }

    static async isBelow(valueToCheck, valueToBeBelow)
    {
        // Asserts valueToCheck is strictly less than (<) valueToBeBelow.
        return await assert.isBelow(valueToCheck, valueToBeBelow, valueToCheck=' is Not strictly less than (<) '+valueToBeBelow);
    }

    static async isAtMost(valueToCheck, valueToBeAtMost)
    {
        // Asserts valueToCheck is less than or equal to (<=) valueToBeAtMost.
        return await assert.isAtMost(valueToCheck, valueToBeAtMost, valueToCheck+' is Not less than or equal to (<=) '+valueToBeAtMost);
    }

    static async isTrue(value)
    {
        // Asserts that value is true.
        return await assert.isTrue(value,value+' is Not true');
    }

    static async isNotTrue(value)
    {
        // Asserts that value is not true.
        return await assert.isNotTrue(value, value+' is true');
    }

    static async isFalse(value)
    {
        // Asserts that value is false.
        return await assert.isFalse(value, value+' is Not false');
    }

    static async isNotFalse(value)
    {
        // Asserts that value is not false.
        return await assert.isNotFalse(value, value+' is false');
    }

    static async isNull(value)
    {
        // Asserts that value is null.
        return await assert.isNull(value, value+' is Not Null');
    }

    static async isNotNull(value)
    {
        // Asserts that value is not null.
        return await assert.isNotNull(value, value+' is null');
    }

    static async match(value, regexp)
    {
        // Asserts that value matches the regular expression regexp.
        return await assert.match(value, regexp, value+' does not matches the regular expression '+regexp);
    }

    static async notMatch(value, regexp)
    {
        // Asserts that value does not match the regular expression regexp.
        return await assert.notMatch(value, regexp, value+' matche the regular expression '+regexp);
    }

    static async closeTo(actual, expected, delta)
    {
        // Asserts that the target is equal expected, to within a +/- delta range.
        return await assert.closeTo(actual, expected, delta,actual +'is Not equal '+expected+' , to within a +/- '+delta+ 'range');
    }

    static async sameMembers(set1, set2)
    {
        // Asserts that set1 and set2 have the same members in any order. Uses a strict equality check (===).
        return await assert.sameMembers(set1, set2,'Not Same Members');
    }

    static async notSameMembers(set1, set2)
    {
        // Asserts that set1 and set2 don’t have the same members in any order. Uses a strict equality check (===).
        return await assert.notSameMembers(set1, set2,' Same Members');
    }
    
    static async sameDeepMembers(set1, set2)
    {
        // Asserts that set1 and set2 have the same members in any order. Uses a deep equality check.
        return await assert.sameDeepMembers(set1, set2,'Not Same deep Members');
    }

    static async notSameDeepMembers(set1, set2)
    {
        // Asserts that set1 and set2 don’t have the same members in any order. Uses a deep equality check.
        return await assert.notSameDeepMembers(set1, set2,' Same deep Members');
    }

    static async sameOrderedMembers(set1, set2)
    {
        // Asserts that set1 and set2 have the same members in the same order. Uses a strict equality check (===).
        return await assert.sameOrderedMembers(set1, set2,'Not same ordered members');
    }

    static async notSameOrderedMembers(set1, set2)
    {
        // Asserts that set1 and set2 don’t have the same members in the same order. Uses a strict equality check (===).
        return await assert.notSameOrderedMembers(set1, set2,'Same ordered members');
    }

    static async sameDeepOrderedMembers(set1, set2)
    {
        // Asserts that set1 and set2 have the same members in the same order. Uses a deep equality check.
        return await assert.sameDeepOrderedMembers(set1, set2,'Not same deep ordered members');
    }

    static async notSameDeepOrderedMembers(set1, set2)
    {
        // Asserts that set1 and set2 don’t have the same members in the same order. Uses a deep equality check.
        return await assert.notSameOrderedMembers(set1, set2,' Same deep ordered members');
    }

    static async includeMembers(superset, subset)
    {
        // Asserts that subset is included in superset in any order. Uses a strict equality check (===). Duplicates are ignored.
        return await assert.includeMembers(superset, subset, 'superset does not includes subset members');
    }

    static async notIncludeMembers(superset, subset)
    {
        // Asserts that subset isn’t included in superset in any order. Uses a strict equality check (===). Duplicates are ignored.
        return await assert.notIncludeMembers(superset, subset, 'superset includes subset members');
    }

    static async includeDeepMembers(superset, subset)
    {
        // Asserts that subset is included in superset in any order. Uses a deep equality check. Duplicates are ignored.
        return await assert.includeDeepMembers(superset, subset, 'superset does not includes deep subset members');
    }

    static async notIncludeDeepMembers(superset, subset)
    {
        // Asserts that subset isn’t included in superset in any order. Uses a deep equality check. Duplicates are ignored.
        return await assert.notIncludeDeepMembers(superset, subset, 'superset includes deep subset members');
    }

    static async includeOrderedMembers(superset, subset)
    {
        // Asserts that subset is included in superset in the same order beginning with the first element 
        // in superset. Uses a strict equality check (===).
        return await assert.includeOrderedMembers(superset, subset, 'superset does not includes ordered subset members');
    }

    static async notIncludeOrderedMembers(superset, subset)
    {
        // Asserts that subset isn’t included in superset in the same order beginning with the first element in superset. 
        // Uses a strict equality check (===).
        return await assert.notIncludeOrderedMembers(superset, subset, 'superset includes ordered subset members');
    }

    static async includeDeepOrderedMembers(superset, subset)
    {
        // Asserts that subset is included in superset in the same order beginning with the first element in superset. 
        // Uses a deep equality check.
        return await assert.includeDeepOrderedMembers(superset, subset, 'superset does not includes deep ordered subset members');
    }

    static async notIncludeDeepOrderedMembers(superset, subset)
    {
        // Asserts that subset isn’t included in superset in the same order beginning with the first element 
        // in superset. Uses a deep equality check.
        return await assert.notIncludeDeepOrderedMembers(superset, subset, 'superset includes deep ordered subset members');
    }

    static async isEmpty(target)
    {
        // Asserts that the target does not contain any values. For arrays and strings, 
        // it checks the length property. For Map and Set instances, it checks the size property. 
        // For non-function objects, it gets the count of own enumerable string keys.
        return await assert.isEmpty(target,'is Not Empty');
    }

    static async isNotEmpty(target)
    {
        // Asserts that the target contains values. For arrays and strings, it checks the length property. 
        // For Map and Set instances, it checks the size property. For non-function objects, 
        // it gets the count of own enumerable string keys.
        return await assert.isNotEmpty(target,'is Empty');
    }

}