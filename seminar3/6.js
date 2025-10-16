//Example

const sortObjects = (array, key) => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        } else {
            return 1;
        }
    })
}

const laptops = [
    {
        brand: 'HP',
        processor: 'i5',
        ram: 25
    },
    {
        brand: 'Lenovo',
        processor: 'i5',
        ram: 16
    },
    {
        brand: 'Acer',
        processor: 'i5',
        ram: 8
    },
    {
        brand: 'Asus',
        processor: 'i7',
        ram: 8
    },
]

const result = sortObjects(laptops, "ram")
console.log(JSON.stringify(result, null, 2))


//Exercise

const sortObjects2 = (array, key) => {
    return array.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        } else {
            return 1;
        }
    });
};

const cars = [
    {
        model: 'Audi',
        year: 2020,
        horsepower: 150
    },
    {
        model: 'BMW',
        year: 2018,
        horsepower: 190
    },
    {
        model: 'Dacia',
        year: 2022,
        horsepower: 110
    },
    {
        model: 'Mercedes',
        year: 2019,
        horsepower: 200
    },
];

const result2 = sortObjects(cars, "year");
console.log("result", JSON.stringify(result2, null, 2));
