
const arrayOfTasks = [
    {
        title:'beat the game',
        task:'kill the ender dragon',
    },
    {
        title:'a villigers dismay',
        task:'murder a villiger',
    },
    {
        title:'go make friends loser',
        task:'go outside irl',
    },
    {
        title:'monumental cunstuction',
        task:'build a monument'
    },
]

function pickTask(){
    const randomIndex = Math.random()* arrayOfTasks.length
    const  roundedIndex = Math.floor(randomIndex)
   return arrayOfTasks[roundedIndex]
}

function handleClick(){
    const task = pickTask()
document.querySelector(".genorated").innerHTML = `${task.title}: <br> ${task.task}`;
}