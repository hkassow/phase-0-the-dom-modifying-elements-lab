// Write your code here!
document.getElementById('main').remove()

const newHeader = document.createElement("h1");
newHeader.textContent = 'YOUR-NAME is the champion'
newHeader.id = 'victory'
document.body.append(newHeader);