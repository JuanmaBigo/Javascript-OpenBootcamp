let marker, map;

function initMap() {
    const SantaFe = { 
        lat: -31.610731340045984, 
        lng: -60.69704986142465 
    };

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: SantaFe,
    });

    marker = new google.maps.Marker({
        position: SantaFe,
        map,
        title: "posicion Inicial",
    });

    //Obtener la geolocalizacion del usuario
    geoPosicion();
}

function geoPosicion() {
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation;
        const options = { timeout: 10000 }
        const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
    } else {
        alert("Tu navegador no soporta geolocalizacion");
    }
}

function centraMapa(position){
const nuevaPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
}
console.log(nuevaPos);
marker.setPosition(nuevaPos);
map.setCenter(nuevaPos);
}

function onError(error) {
    console.log("se ha producido un error");
    console.log(error);
}