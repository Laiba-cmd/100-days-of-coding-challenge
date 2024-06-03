function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(", "), "."));
}
make_sandwich('lettuce', 'onion', 'tomato', 'honey mustard');
make_sandwich('burger', 'ketchup', 'lettuce');
make_sandwich('subway', 'lettuce', 'onion', 'tomato');
