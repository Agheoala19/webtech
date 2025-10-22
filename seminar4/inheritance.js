//Example

class Robot {
    constructor(name) {
        this.name = name;
    }

    move() {
        console.log(`${this.name} is moving`)
    }
}

const r0 = new Robot('some robot')
r0.move()

class Weapon {
    constructor(description) {
        this.description = description;
    }

    fire() {
        console.log(`${this.description} is firing`)
    }
}

const w0 = new Weapon('pew pew laser')
w0.fire()

class CombatRobot extends Robot { //combat robot is a robot(Extends Robot class) 
    constructor(name) {
        super(name)
        this.weapons = []
    }

    //combat robot has some weapons(Weapon class)
    addWeapon(w) {
        this.weapons.push(w)
    }

    fire() {
        console.log('firing all weapons')
        for (const w of this.weapons) {
            w.fire()
        }
    }
}

const r1 = new CombatRobot('some combat robot')
r1.addWeapon(w0)
r1.fire()

Robot.prototype.fly = function () {
    console.log(`${this.name} is flying`)
}

r1.fly()

//Exercise

class Software {
    constructor(name) {
        this.name = name;
    }

    run() {
        console.log(`${this.name} is running`);
    }
}

const s0 = new Software('Generic Software');
s0.run();

class Pluginn {
    constructor(name) {
        this.name = name;
    }

    install() {
        console.log(`Installing plugin: ${this.name}`);
    }
}

const p0 = new Pluginn('AdBlocker');
p0.install();

class Browser extends Software { // Browser it's a Software (extends Software)
    constructor(name) {
        super(name);
        this.plugins = [];
    }

    // Browser has plugins (Plugin class)
    addPlugin(p) {
        this.plugins.push(p);
    }

    installPlugins() {
        if (this.plugins.length === 0) {
            console.log(`${this.name} has no plugins to install.`);
            return;
        }

        console.log(`${this.name} is installing its plugins:`);
        for (const p of this.plugins) {
            p.install();
        }
    }
}

const chrome = new Browser('Chrome');
chrome.addPlugin(new Pluginn('Dark Mode'));
chrome.addPlugin(new Pluginn('Password Manager'));
chrome.addPlugin(p0);

chrome.run();            // inheritance from Software
chrome.installPlugins(); // installs all plugins
