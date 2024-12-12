// Initialize the map with default view
var map = L.map('map').setView([10.7332, 122.5585], 16); // Tabuc Suba coordinates

// Add the tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Initialize marker variable
var marker;

var tabucSubaBoundary = [
    [10.743164, 122.553640], // starting point of border coordinates
    [10.739382, 122.559256],
    [10.738431, 122.558515],
    [10.737611, 122.559689],
    [10.737120, 122.559314],
    [10.735866, 122.561052],
    [10.732595, 122.559950],
    [10.732244, 122.560343], // right upper corner
    [10.731820, 122.560315],
    [10.728212, 122.564755],
    [10.724658, 122.562600], // lower-right corner
    [10.724254, 122.561318],
    [10.725630, 122.559709],
    [10.729595, 122.558438],
    [10.731196, 122.557518], // lower left corner
    [10.731354, 122.556414],
    [10.732155, 122.553148],
    [10.732805, 122.551697],
    [10.743150, 122.553617] // back to starting point
];

var CubayBoundary = [
    [10.736462, 122.561303],
    [10.735294, 122.563511],
    [10.735716, 122.563897],
    [10.735427, 122.564427],
    [10.735695, 122.564720],
    [10.735431, 122.565215],
    [10.734709, 122.564683],
    [10.734431, 122.565041],
    [10.734149, 122.564873],
    [10.733706, 122.565522],
    [10.735877, 122.567353],
    [10.735615, 122.567721],
    [10.736652, 122.568487],
    [10.736349, 122.568867],
    [10.736151, 122.568721],
    [10.735383, 122.569882],
    [10.734911, 122.569978],
    [10.733453, 122.567136],
    [10.732947, 122.567606],
    [10.729133, 122.572549],
    [10.720910, 122.566068],
    [10.721580, 122.565784],
    [10.723093, 122.565627],
    [10.724181, 122.565713],
    [10.725195, 122.566019],
    [10.725655, 122.566191],
    [10.726274, 122.566544],
    [10.726828, 122.566764],
    [10.727179, 122.566801],
    [10.727732, 122.566711],
    [10.728251, 122.566642],
    [10.728645, 122.566417],
    [10.728974, 122.566064],
    [10.729103, 122.565565],
    [10.729047, 122.565377],
    [10.728768, 122.565133],
    [10.728221, 122.564758],
    [10.731838, 122.560306],
    [10.732259, 122.560373],
    [10.732591, 122.559947],
    [10.736452, 122.561302],
];

var sanIsidroBoundary = [
    [10.743134, 122.553613],
    [10.747129, 122.544828],
    [10.746827, 122.544916],
    [10.746575, 122.544881],
    [10.746411, 122.544781],
    [10.746267, 122.544720],
    [10.745939, 122.544459],
    [10.745661, 122.544015],
    [10.745529, 122.543830],
    [10.745003, 122.543386],
    [10.744801, 122.543143],
    [10.744640, 122.543002],
    [10.743781, 122.542519],
    [10.742031, 122.541926],
    [10.741630, 122.541872],
    [10.741354, 122.541916],
    [10.741158, 122.542053],
    [10.740701, 122.542223],
    [10.740578, 122.542416],
    [10.740549, 122.542814],
    [10.740664, 122.543767],
    [10.740606, 122.544104],
    [10.740624, 122.544352],
    [10.740494, 122.544739],
    [10.740290, 122.545248],
    [10.739925, 122.545701],
    [10.739885, 122.545613],
    [10.740288, 122.545050],
    [10.740506, 122.544554],
    [10.740303, 122.544960],
    [10.740096, 122.545273],
    [10.739868, 122.545480],
    [10.739618, 122.545616],
    [10.738867, 122.545753],
    [10.737806, 122.545870],
    [10.737603, 122.545945],
    [10.736627, 122.546545],
    [10.736451, 122.546694],
    [10.736346, 122.546815],
    [10.735666, 122.546363],
    [10.735950, 122.546055],
    [10.735517, 122.545680],
    [10.735335, 122.545889],
    [10.734779, 122.545405],
    [10.734962, 122.545211],
    [10.734602, 122.544899],
    [10.734520, 122.544987],
    [10.733106, 122.543822],
    [10.732993, 122.544049],
    [10.732823, 122.544119],
    [10.732725, 122.544123],
    [10.732493, 122.544013],
    [10.732374, 122.544038],
    [10.732314, 122.544235],
    [10.732300, 122.544438],
    [10.732159, 122.544719],
    [10.731872, 122.545037],
    [10.731645, 122.545329],
    [10.731576, 122.545451],
    [10.731496, 122.545698],
    [10.731410, 122.546335],
    [10.730700, 122.547108],
    [10.730600, 122.547137],
    [10.730440, 122.547127],
    [10.730102, 122.547046],
    [10.729816, 122.547120],
    [10.730305, 122.547644],
    [10.729700, 122.548353],
    [10.733105, 122.551156],
    [10.732804, 122.551688],
    [10.743167, 122.553604]
    
];

var tabucSubaPolygon = L.polygon(tabucSubaBoundary, {
    color: "#3388ff",
    weight: 3,
    fill: true,
}).addTo(map).bindTooltip("TABUC SUBA", { permanent: true, direction: "center",className: "no-box-label" });

var cubayPolygon = L.polygon(CubayBoundary, {
color: "#008000",
weight: 3,
fill: true,
}).addTo(map).bindTooltip("CUBAY", { permanent: true, direction: "center", className: "no-box-label" });

var sanIsidroPolygon = L.polygon(sanIsidroBoundary, {
    color: "#FFA500",
    weight: 3,
    fill: true,
}).addTo(map).bindTooltip("SAN ISIDRO", { permanent: true, direction: "center", className: "no-box-label" });

var familyIcon = L.icon({
    iconUrl: 'images/home2.svg', 
    iconSize: [32, 32],             
    iconAnchor: [16, 32],          
    popupAnchor: [0, -32]            
});

function placeMarker(lat, lng, address) {

    if (marker) {
        map.removeLayer(marker);
    }

    marker = L.marker([lat, lng]).addTo(map);

    map.setView([lat, lng], 16);

    document.getElementById('presentAddress').value = address;
}

// Function to handle map clicks and update the address
function onMapClick(e) {
    // Remove the old marker if it exists
    if (marker) {
        map.removeLayer(marker);
    }
    // Add a new marker at the clicked location
    marker = L.marker(e.latlng).addTo(map);
    // Update the latitude and longitude fields with the clicked location
    document.getElementById('latitude').value = e.latlng.lat;
    document.getElementById('longitude').value = e.latlng.lng;

    // Fetch the address based on the clicked coordinates
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`)
        .then(response => response.json())
        .then(data => {
            // Set the present address field with the fetched address
            document.getElementById('presentAddress').value = data.display_name;
        })
        .catch(error => console.error('Error:', error));
}

// Attach the click event to the map
map.on('click', onMapClick);

// Function to calculate age based on the date of birth
function calculateAge(formCount) {
    const dobInput = document.getElementById(`dateOfBirth${formCount}`);
    const ageInput = document.getElementById(`age${formCount}`);
    
    const dobValue = dobInput.value;
    if (dobValue) {
        const dob = new Date(dobValue);
        const today = new Date();

        // Calculate age
        let age = today.getFullYear() - dob.getFullYear();
        const monthDifference = today.getMonth() - dob.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        ageInput.value = age; // Update the age field
    } else {
        ageInput.value = ''; // Clear the age field if no date is selected
    }
}

