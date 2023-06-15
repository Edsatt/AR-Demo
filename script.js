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

function resetButtons(){
    const children = locationsDiv.children;
    for(const child of children) {
        child.style.backgroundColor = 'darkCyan';
    }
}

if(locationsDiv){
    locationsDiv.addEventListener('touchstart', handleButtonClick);
    locationsDiv.addEventListener('click', handleButtonClick);
}

function handleButtonClick (event) {
    if (!document.getElementById("arButton")) {
      const arButton = document.createElement("button");
      arButton.id = "arButton";
      arButton.textContent = "Launch AR!";
      arButton.style.marginTop = "5px";
      arButton.addEventListener("touchstart", handleArButtonCLick);
      arButton.addEventListener('click', handleArButtonCLick);
      arDiv.appendChild(arButton);
    }
  
    resetButtons();
    const button = event.target;
    button.style.backgroundColor = "#79dada";
    let newDestination = button.id;
    destination = newDestination;
    storeDestination(newDestination);
  };


function handleArButtonCLick() {
    window.location.href = "marker.html";
    arButton.style.backgroundColor = "#79dada";
}

const arEntity = document.getElementById('arEntity');

function getModel() {
    if(destination == 'toilet') {
        //alert("Arrow to right");
        return 'data/direction_arrow_right/scene.gltf';
    }
    if(destination == 'kitchen') {
        //alert("Arrow to left");
        return 'data/direction_arrow_left/scene.gltf';
    }
}

if(arEntity){
    const gltfModel = getModel();
    arEntity.setAttribute('gltf-model', gltfModel);
}

