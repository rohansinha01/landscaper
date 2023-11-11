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
        tool: 0
    }

const tool = tools[mower.tool] //wanted an easier way to connect the object of mower to the array of tools
const nextTool = tools[mower.tool + 1] //made a const variable for the next tool
function mowLawn(){
    alert(`You added ${tool.profits} dollar using your ${tool.name}`)
    mower.money += tools.profit
}

const answer = prompt(`You have ${mower.money} dollars. Do you want to mow a lawn or upgrade`)
    if (answer === 'm'){
    mowLawn()}

function upGrade(){
    alert(`You are now using ${tool.name}.`)
    if (mower.tool + 1 < tools.length) //We can only upgrade the tools if there is a tool available.
    if (nextTool.costs <= mower.money){ //If the next tool is less than or equal to our mower money, we are going to run this function.
        mower.money -= nextTool.price //This line subtracts the price of the next tool from the mower money total
        mower.tool += 1 //This line upgrades us
                                      }
    
        else{
            alert('There are no more tools left to upgrade!')
        }
    
    else {
        alert('Insufficient funds. You cannot upgrade yet.')
    }
}
                    
mowLawn()

