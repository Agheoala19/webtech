//Example

const orderCoffee = (type) => {

    const types = {
        REGULAR: 'REGULAR',
        SPECIAL: 'SPECIAL'
    }

    if (Object.values(types).indexOf(type) === -1) {
        throw new Error('coffee error')
    } else {
        console.log(`preparing ${type} coffee`)
    }
}

try {
    orderCoffee('REGULAR')
    orderCoffee('SWEET_COFFEE_NO_SUGAR')
} catch (err) {
    console.log(err)
}

//Exercise

const increaseSalary = (salaries, percent) => {
    if (!Array.isArray(salaries)) {
        throw new TypeError("first parameter should be an array!");
    }

    if (typeof percent !== 'number' || isNaN(percent)) {
        throw new TypeError("second parameter should be a number!");
    }

    return salaries.map(salary => {
        if (typeof salary !== 'number' || isNaN(salary)) {
            throw new TypeError("array elements should all be numbers!");
        }
        return salary + (salary * percent / 100);
    });
}

try {
    const initialSalaries = [3000, 4500, 5000];
    const updatedSalaries = increaseSalary(initialSalaries, 10);

    console.log("Initial Salaries:", initialSalaries);
    console.log("Updated Salaries", updatedSalaries);
} catch (e) {
    console.error("Error:", e.message);
}
