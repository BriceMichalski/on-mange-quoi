const food_list = [
    "kebab",
    "tacos",
    "burger",
    "poutine",
    "sushi",
    "pad thai",
]

const shuffledArray = food_list.sort((a, b) => 0.5 - Math.random());
const choice = shuffledArray[0]

document.getElementById("choice").innerHTML = choice;