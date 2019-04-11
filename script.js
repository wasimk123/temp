                    var geocoder;
                    var map;
                   
                    function initialize() {
                        directionsDisplay = new google.maps.DirectionsRenderer();
                        geocoder = new google.maps.Geocoder();
                        var mapOptions = {
                            zoom: 16,
                            mapTypeId: 'terrain'
                        };
                        map = new google.maps.Map(document.getElementById("GoogleMap"),
                                           mapOptions);
                        directionsDisplay.setMap(map)
                    };

                    function Adress() {
                        geocoder.geocode(
                            {
                                'address': "כינרת 5, בני ברק"
                            },
                            function (results, status) {
                                if (results != null && results.length > 0) {
                                    map.setCenter(results[0].geometry.location);
                                    var marker = new google.maps.Marker({
                                        position: results[0].geometry.location,
                                        map: map
                                    });
                                }
                                
                            });
                                   };
/*
                    $(window).load(function () {
                        initialize();
                        Adress();
					})
	*/