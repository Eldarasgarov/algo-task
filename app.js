const operations =  ["5","2","C","D","+"]


function ShowScore(operationArray)
{
    const scoreArray = [];
    let totalSum = 0;
    for (const operation of operationArray) {

         if(scoreArray.length === 0 && operation === "D")
         {
            alert("Must be at least one point to double !")
            break
         }
         if(scoreArray ===0 && operation === "C")
         {
            alert("There are not exist any score for removing")
            break
         }

         if(scoreArray.length < 2 && operation === '+')
         {
            alert("There must be at least two points for this operation")
            break;
         } 

        if(Number(operation) === parseInt(operation))
        {
            scoreArray.push(operation)
        }

        else if(operation === "D")
        {
            let num = scoreArray[scoreArray.length-1]*2
           scoreArray.push(num.toString())
        }

        else if(operation === "C")
        {
            scoreArray.pop();
        }

        else if(operation === '+')
        {
           scoreArray.push(Number(scoreArray[scoreArray.length-1]) + Number(scoreArray[scoreArray.length-2]) )
        }
        else{
            alert("invalid operation")
            break;
        }
       

    }

    scoreArray.forEach(item => {
        totalSum+=Number(item)
    })

    return `
    Sum of the scores is ${totalSum} 
    and Scores : ${scoreArray.length?scoreArray:"[empty]"}
    `

}

console.log(ShowScore(operations));