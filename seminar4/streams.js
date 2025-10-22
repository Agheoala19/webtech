//Example

class Stream {
    //private members should be declared with '#' in front of them
    #value;
    #nextValue;
    static #count = 0;
    constructor(seed, nextValue) {
        //to refer to members from the current object we use "this."
        this.#value = seed;
        this.#nextValue = nextValue;
        //to refer to static members we use "ClassName."
        Stream.#count++;
    }
    get value() {
        return this.#value;
    }
    get next() {
        this.#value = this.#nextValue(this.#value);
        return this.#value;
    }
    static get count() {
        return Stream.#count;
    }
}
class ConstantStream extends Stream {
    constructor(value) {
        super(value, value => value);
    }
}
class NextIntegerStream extends Stream {
    constructor(value) {
        super(0, value => value + 1);
    }
}
const constant = new ConstantStream(1);
const nextInteger = new NextIntegerStream();
for (let i = 0; i < 10; i++) {
    console.log(`constant[${i}] = ${constant.next}`);
    console.log(`nextInteger[${i}] = ${nextInteger.next}`);
}
console.log(Stream.count);

//Exercise


class Stream2 {
    #value;
    #nextValue;
    static #count = 0;

    constructor(seed, nextValue) {
        this.#value = seed;
        this.#nextValue = nextValue;
        Stream2.#count++;
    }

    get value() {
        return this.#value;
    }

    get next() {
        this.#value = this.#nextValue(this.#value);
        return this.#value;
    }

    static get count() {
        return Stream2.#count;
    }
}

class EvenStream2 extends Stream2 {
    constructor(startValue) {
        const evenStart = startValue % 2 === 0 ? startValue : startValue + 1;
        super(evenStart, value => value + 2);
    }
}

const evenNumbers = new EvenStream2(3);

for (let i = 0; i < 10; i++) {
    console.log(`even[${i}] = ${evenNumbers.next}`);
}

console.log("Număr total de fluxuri create:", Stream2.count);
