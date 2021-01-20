// Initialize and add map
function initMap() {
    // Your location
    const loc = { lat: 50.450100, lng: 30.523399 };
    // Centered map on Location
    const map = new google.maps.Map(document.querySelector('.map')
        , {
            zoom: 13,
            center: loc
        });
    // The marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map });
}

// Slicky menu background
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        this.document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        this.document.querySelector('#navbar').style.opacity = 1;
    }
});

//Smooth Scroling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});
