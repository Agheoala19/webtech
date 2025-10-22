function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }

    const cloned = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }

    return cloned;
}

const original = {
    name: "Ion",
    age: 30,
    skills: ["JS", "Python"],
    address: {
        city: "Bucharest",
        coords: { lat: 44.43, lon: 26.10 }
    }
};

const copy = deepClone(original);

copy.name = "Maria";
copy.address.city = "Cluj";
copy.skills.push("C++");

console.log("Original:", original);
console.log("Copy:", copy);

