import { lensProp, lens, view, set, prop, assoc, over, add } from 'ramda';

interface OurDataType {
    age: number,
    name: string
};

const ourData:OurDataType = {
    age: 26,
    name: 'Paul'
}

// definitions
const prop1 = lensProp('age');
const prop2 = lens(prop('name'), assoc('name'));

// operations
view(prop1, ourData);
set(prop1, 2, ourData); 
over(prop1, add(2), ourData); 