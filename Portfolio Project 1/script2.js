//Another method to generate a random name

const names = [
    {
        firstName: 'Jack',
        middleName: 'Daniel',
        lastName: 'Witter',
        age: 26
    },
    {
        firstName: 'Callum',
        middleName: 'Kyle',
        lastName: 'Taylor',
        age: 32
    },
    {
        firstName: 'Jordan',
        middleName: 'David',
        lastName: 'Archer',
        age: 12
    },
    {
        firstName: 'Chris',
        middleName: 'William',
        lastName: 'Smith',
        age: 54
    },
    {
        firstName: 'Drew',
        middleName: 'Dylan',
        lastName: 'Knox',
        age: 24
    },
    {
        firstName: 'Trace',
        middleName: 'Dallas',
        lastName: 'Cameron',
        age: 65
    },
    {
        firstName: 'Chloe',
        middleName: 'Darline',
        lastName: 'Stevens',
        age: 41
    }
]


names.forEach(name => console.log(`Your name is ${name.firstName} ${name.middleName} ${name.lastName}, you're ${name.age} years old` ))