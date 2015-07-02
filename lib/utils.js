let indexOf = Array.prototype.indexOf;
let slice = Array.prototype.slice;

function toArray(subject) {
    return slice.call(subject);
}

// returns true if collection is empty
function isEmpty(collection) {
    return collection.length === 0;
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

// negate a funcion result
function negate(fn) {
    return function() {
        return !fn.apply(this, arguments);
    }
}

// returns true when predicate is true for every item in collection
function every(collection, predicate) {
    return isEmpty(collection.filter(negate(predicate)));
}

// return a one dimensional array containing all the items
function flatMap(collection) {
    return collection.reduce(function(accumulator, row) {
        return accumulator.concat(row);
    }, []);
}

// returns clone of source object
function clone(source) {
    if (source == null || typeof(source) != 'object') {
        return source;
    }

    var obj = source.constructor();

    for(var key in source) {
        if(source.hasOwnProperty(key)) {
            obj[key] = clone(source[key]);
        }
    }

    return obj;
}

export {
    indexOf,
    slice,
    flatMap,
    isEmpty,
    negate,
    every,
    clone,
    toArray
};
