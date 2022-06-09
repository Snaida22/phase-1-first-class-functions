function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    return function sny() {
        return "before all"
    } 
}
function returnsAnAnonymousFunction() {
    return function(){
    return "I am anonymous";
    }
}