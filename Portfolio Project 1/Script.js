//Random name generator

function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
  }
  
  const names = { 
    firstName: ['Matthew ', 'Miles ', 'Henry', 'Gordon'],
    middleName: ['Kay', 'Kimberleigh ', 'Daniel', 'Oh'],
    lastName: ['Palmer', "O'Moore", 'Phillips', 'Butler'],
    age: [23, 43, 12, 56, 23, 5, 67, 32, 23]
  }
  
  let randomName = [] 
  
  for(let prop in names) {
    let optionIdx = generateRandomNumber(names[prop].length)
 
    switch(prop) {
      case 'firstName':
        randomName.push(`Your first name is: "${names[prop][optionIdx]}".`)
        break
      case 'middleName':
        randomName.push(`Your middle name is: "${names[prop][optionIdx]}".`)
        break
      case 'lastName':
        randomName.push(`Your last name is: "${names[prop][optionIdx]}".`)
        break
      case 'age':
        randomName.push(`You are: ${names[prop][optionIdx]} years old.`)
        break
      default:
        randomName.push('There is not enough info.')
    }
  }
  
  function formatName(name) { 
    const formatted = randomName.join('\n')
    console.log(formatted)
  }
  
  formatName(randomName);