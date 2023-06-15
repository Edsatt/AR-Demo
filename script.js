const locationsDiv = document.getElementById('locations');
const arDiv = document.getElementById('arLink');

let destination = getDestination();

function storeDestination(newDestination) {
    const data = {"destination": newDestination};
    localStorage.setItem("destinationData", JSON.stringify(data));
};

function getDestination() {
    var storedData = localStorage.getItem("destinationData");
    if(storedData) {
        var destinationData = JSON.parse(storedData);
        return destinationData.destination;
    };
    return "";
};

if(locationsDiv){
    locationsDiv.addEventListener('click', (event) => {
        if(!document.getElementById("arButton")){
            const arButton = document.createElement('button');
            arButton.id = "arButton";
            arButton.textContent = "Launch AR!";
            arButton.style.marginTop = '5px';
            arButton.addEventListener('click', () => {
                window.location.href = "marker.html";
            });
            arDiv.appendChild(arButton);
        }
        let newDestination = event.target.id;
        destination = newDestination;
        storeDestination(newDestination);
    });
}

