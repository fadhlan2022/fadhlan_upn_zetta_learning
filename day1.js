function Slicer(text, first_index, last_index) {
    var result = "";
    for (var i = first_index; i < last_index; i++) {
        result += text[i];
    }
    return result;
}
console.log(Slicer("Learning Typescript is different than Javascript", 9, 19));
