const fs = require('fs')

function question(){
	fs.readFile('./input.txt', (err,data)=> {
		const directions = data.toString();
		const directionsArray = directions.split('');
		const answer = directionsArray.reduce((acc,currentValue)) =>{
			if (currentValue ==='(') {
				return acc +=1
			} else if (currentValue === ')'){
				return acc -= 1
			}
			}, 0)
		}

	})
}

