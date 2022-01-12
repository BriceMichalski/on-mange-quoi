const food_list = [
    "kebab",
    "tacos",
    "burger",
    "poutine",
    "sushi",
    "pad thai",
    "pizza",
    "salade ... mais pas ouf"
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function choose(){
    const choice = food_list[Math.floor(Math.random()*food_list.length)]
    document.getElementById("choice").innerHTML = capitalizeFirstLetter(choice);
}

choose()