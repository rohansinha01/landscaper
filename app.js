const tools = [
    {name: "Teeth",
    costs: 0,
    profits: 1},
    {
    name: "Scissors",
    costs: 5,
    profits: 5
    }
] //We need an array of the objects that define the name of the item we are using, how much we paid for it, and how much it will make us.

const mower = //removed brackets to get the interprolation to work. Not an array here. Just an object.
    {
        money: 0,
        tool: 0,
        winner: false //we need a reason to keep the game going
    }


function mowLawn(){
    const tool = tools[mower.tool] //wanted an easier way to connect the object of mower to the array of tools. Have to keep it in this blocked scope because we need the function to recognize when we upgrade.
    alert(`You added ${tool.profits} dollar using your ${tool.name}`)
    mower.money += tool.profits
}

function upGrade(){
    if (mower.tool + 1 < tools.length) //We can only upgrade the tools if there is a tool available.
    {const nextTool = tools[mower.tool + 1] //made a const variable for the next tool. Moved this to this line to make sure that this function recognizes this tool upgrade.
        if (nextTool.costs <= mower.money){ //If the next tool is less than or equal to our mower money, we are going to run this function.
        mower.money -= nextTool.costs //This line subtracts the price of the next tool from the mower money total
        mower.tool += 1 //This line upgrades us
                                          }
    
        else {
            alert('Insufficient funds. You cannot upgrade yet.')
            }//If the next tool is out of our price range, then we will get this message.
    }  else {
        alert("There are no more tools to upgrade")
     }
    }
      //if there are no more tools, then we will get this message
function youWin(){ // we need to make sure this game will end.
    if(mower.tool === tools.length - 1 && mower.money >= 10){ //If the current tool is equal to the last item in the array and the mower has earned enough money, run this function.
        alert('You have mowed the lawns!')
        mower.winner = true //this will flip the switch on our mower object
    }
    while (!mower.winner){ //this will keep the game running until that flip is switched on winner.
        const answer = prompt(`You have ${mower.money} dollars. Do you want to mow a lawn or upgrade?`) //As the game is running, we will have this prompt asked.
            if (answer === 'm'){
            mowLawn()} //need an answer on whether to mow the lawn.
            if (answer === 'u'){
            upGrade() //need an answer on whether to upgrade our tool
            }
            if (answer !== 'm' && answer !== 'u'){
                alert('Not a valid answer. Use m or u') //need to weed out the other options.
            }
        }
        youWin()
    }
