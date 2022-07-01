
use countriesApp;
db.dropDatabase();

db.countries.insertMany([
    [
        {
            "name": {
                "common": "Somalia",
                "official": "Federal Republic of Somalia",
            },
            "currencies": {
                "SOS": {
                    "name": "Somali shilling",
                    "symbol": "Sh"
                }
            },
            "capital": [
                "Mogadishu"
            ],
            "region": "Africa",
            "languages": {
                "ara": "Arabic",
                "som": "Somali"
            },
            "latlng": [
                10,
                49
            ],
            "borders": [
                "DJI",
                "ETH",
                "KEN"
            ],
            "area": 637657,
            "maps": {
                "googleMaps": "https://goo.gl/maps/8of8q7D1a8p7R6Fc9",
                "openStreetMaps": "https://www.openstreetmap.org/relation/192799"
            },
            "population": 15893219,
            "continents": [
                "Africa"
            ],
            "flags": {
                "png": "https://flagcdn.com/w320/so.png",
                "svg": "https://flagcdn.com/so.svg"
            },
            "capitalInfo": {
                "latlng": [
                    2.07,
                    45.33
                ]
            },
        },
        {
            "name": {
                "common": "Venezuela",
                "official": "Bolivarian Republic of Venezuela",
            },
            "currencies": {
                "VES": {
                    "name": "Venezuelan bolívar soberano",
                    "symbol": "Bs.S."
                }
            },
            "capital": [
                "Caracas"
            ],
            "region": "Americas",
            "languages": {
                "spa": "Spanish"
            },
            "latlng": [
                8,
                -66
            ],
            "borders": [
                "BRA",
                "COL",
                "GUY"
            ],
            "area": 916445,
            "maps": {
                "googleMaps": "https://goo.gl/maps/KLCwDN8sec7z2kse9",
                "openStreetMaps": "https://www.openstreetmap.org/relation/272644"
            },
            "population": 28435943,
            "continents": [
                "South America"
            ],
            "flags": {
                "png": "https://flagcdn.com/w320/ve.png",
                "svg": "https://flagcdn.com/ve.svg"
            },
            "capitalInfo": {
                "latlng": [
                    10.48,
                    -66.87
                ]
            },
        }
    ]
])

