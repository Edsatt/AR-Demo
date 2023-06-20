const markers = document.querySelectorAll("a-marker");

markers.forEach((marker) => {
  marker.addEventListener("markerFound", () => {
    alert(marker.id);
  });
});