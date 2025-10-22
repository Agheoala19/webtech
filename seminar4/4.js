//Example

String.prototype.capitalizedWords = function () {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase())
}

console.log("these words will be calipalized".capitalizedWords())

//Exercise

Number.prototype.times = function (callback) {
    for (let i = 0; i < this; i++) {
        callback(i);
    }
};

(3).times(i => console.log(`Execute #${i + 1}`));
