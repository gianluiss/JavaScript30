const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
console.log( people.some(user => 2025 - user.year >= 19) );

// Array.prototype.every() // is everyone 19 or older?
console.log( people.every(user => 2025 - user.year >= 19) );