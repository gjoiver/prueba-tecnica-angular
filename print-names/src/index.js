import { names } from './data/names.js';

const printNames = () => {

    if (!Array.isArray(names) || names.length === 0) {
        console.log("No names to print.");
        return;
    }

    names.forEach(name => {
        console.log(name);
    });
}

printNames();
