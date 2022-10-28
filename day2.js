var mixed1 = [1, 'data', '3', 'result'];
var mixed2 = ['Bejo', 'has', '4', 'sport', 'car'];
function combinator(array) {
    var result = "";
    array.map(function (array) {
        result = result + " " + array;
    });
    return result;
}
console.log(combinator(mixed1));
console.log(combinator(mixed2));
