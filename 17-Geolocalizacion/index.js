const SantaFe = { 
    lat: -31.610731340045984, 
    lng: -60.69704986142465 
};

const Orlando ={
    lat: 28.5383355,
    lng: -81.3792365
}

const Cordoba ={
    lat: -31.4201,
    lng: -64.1888
}

function initMap() {
    
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5,
        center: SantaFe,
    });

    let marker1 = new google.maps.Marker({
        position: SantaFe,
        map,
        title: "posicion Inicial",
    });
    
    let marker2 = new google.maps.Marker({
        position: Orlando,
        map,
    });
    
    let marker3 = new google.maps.Marker({
        position: Cordoba,
        map,
    });

}

