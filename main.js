let target = document.querySelector("#bullseye");

let dataArray = [
    ["apples", "plums", "cherries", "oranges"],
    ["sourdough", "wheat", "naan", "rye"],
    ["carrot juice", "tomato juice", "cherry juice", "orange-pineapple juice"]
]
// console.log(dataArray[1][1]);

for (let outerIndex = 0; outerIndex < dataArray.length; outerIndex += 1) {
    const currentArray = dataArray[outerIndex];
    let newList = document.createElement("ol");
    target.append(newList);
    for (let innerIndex = 0; innerIndex < currentArray.length; innerIndex += 1) {
        const element = currentArray[innerIndex];
        let newItem = document.createElement("li");
        newItem.innerText = element;
        newList.append(newItem);
    }
}