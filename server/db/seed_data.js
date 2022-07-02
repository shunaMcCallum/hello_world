
use countriesApp;
db.dropDatabase();

db.users.insertMany([
    {
        "name": "Shuna",
        "email": "shuna.shuna@shuna.com",
        "countries_studied": []
    },
    {
        "name": "Sushi",
        "email": "sushi@meow.com",
        "countries_studied": []
    }
])

db.countries.insertMany([
    {
        "name": {
            "common": "Somalia",
            "official": "Federal Republic of Somalia",
        },
        "currencies": {
            "name": "Somali shilling",
            "symbol": "Sh"
        },
        "capital": "Mogadishu",
        "languages": {
            "ara": "Arabic",
            "som": "Somali"
        },
        "latlng": [
            10,
            49
        ],
        "area": 637657,
        "maps": {
            "googleMaps": "https://goo.gl/maps/8of8q7D1a8p7R6Fc9",
        },
        "population": 15893219,
        "continent": "Africa",
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
            "name": "Venezuelan bolívar soberano",
            "symbol": "Bs.S."
        },
        "capital": "Caracas",
        "languages": {
            "spa": "Spanish"
        },
        "latlng": [
            8,
            -66
        ],
        "area": 916445,
        "maps": {
            "googleMaps": "https://goo.gl/maps/KLCwDN8sec7z2kse9",
        },
        "population": 28435943,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/ve.png",
            "svg": "https://flagcdn.com/ve.svg"
        },
        "capitalInfo": {
            "latlng": [
                10.48,
                -66.87
            ]
        }
    },
    {
        "name": {
            "common": "Kenya",
            "official": "Republic of Kenya",
        },
        "currencies": {
            "name": "Kenyan shilling",
            "symbol": "Sh"
        },
        "capital": "Nairobi",
        "region": "Africa",
        "languages": {
            "eng": "English",
            "swa": "Swahili"
        },
        "latlng": [
            1,
            38
        ],
        "area": 580367,
        "maps": {
            "googleMaps": "https://goo.gl/maps/Ni9M7wcCxf8bJHLX8",
        },
        "population": 53771300,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ke.png",
            "svg": "https://flagcdn.com/ke.svg"
        },
        "capitalInfo": {
            "latlng": [
                -1.28,
                36.82
            ]
        },
    },
    {
        "name": {
            "common": "Cameroon",
            "official": "Republic of Cameroon",
        },
        "currencies": {
            "name": "Central African CFA franc",
            "symbol": "Fr"
        },
        "capital": "Yaoundé",
        "languages": {
            "eng": "English",
            "fra": "French"
        },
        "latlng": [
            6,
            12
        ],
        "area": 475442,
        "maps": {
            "googleMaps": "https://goo.gl/maps/JqiipHgFboG3rBJh9",
        },
        "population": 26545864,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/cm.png",
            "svg": "https://flagcdn.com/cm.svg"
        },
        "capitalInfo": {
            "latlng": [
                3.85,
                11.5
            ]
        }
    },
    {
        "name": {
            "common": "Fiji",
            "official": "Republic of Fiji",
        },
        "currencies": {
            "name": "Fijian dollar",
            "symbol": "$"
        },
        "capital": "Suva",
        "languages": {
            "eng": "English",
            "fij": "Fijian",
            "hif": "Fiji Hindi"
        },
        "latlng": [
            -18,
            175
        ],
        "area": 18272,
        "maps": {
            "googleMaps": "https://goo.gl/maps/r9fhDqoLZdg1zmE99",
        },
        "population": 896444,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/fj.png",
            "svg": "https://flagcdn.com/fj.svg"
        },
        "capitalInfo": {
            "latlng": [
                -18.13,
                178.42
            ]
        }
    },
    {
        "name": {
            "common": "Argentina",
            "official": "Argentine Republic",
        },
        "currencies": {
            "name": "Argentine peso",
            "symbol": "$"
        },
        "capital": "Buenos Aires",
        "languages": {
            "grn": "Guaraní",
            "spa": "Spanish"
        },
        "latlng": [
            -34,
            -64
        ],
        "area": 2780400,
        "maps": {
            "googleMaps": "https://goo.gl/maps/Z9DXNxhf2o93kvyc6",
        },
        "population": 45376763,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/ar.png",
            "svg": "https://flagcdn.com/ar.svg"
        },
        "capitalInfo": {
            "latlng": [
                -34.58,
                -58.67
            ]
        }
    },
    {
        "name": {
            "common": "United Kingdom",
            "official": "United Kingdom of Great Britain and Northern Ireland",
        },
        "currencies": {
            "name": "British pound",
            "symbol": "£"
        },
        "capital": "London",
        "languages": {
            "eng": "English"
        },
        "latlng": [
            54,
            -2
        ],
        "area": 242900,
        "maps": {
            "googleMaps": "https://goo.gl/maps/FoDtc3UKMkFsXAjHA",
        },
        "population": 67215293,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/gb.png",
            "svg": "https://flagcdn.com/gb.svg"
        },
        "capitalInfo": {
            "latlng": [
                51.5,
                -0.08
            ]
        }
    },
    {
        "name": {
            "common": "Netherlands",
            "official": "Kingdom of the Netherlands",
        },
        "currencies": {
            "name": "Euro",
            "symbol": "€"
        },
        "capital": "Amsterdam",
        "languages": {
            "nld": "Dutch"
        },
        "latlng": [
            52.5,
            5.75
        ],
        "area": 41850,
        "maps": {
            "googleMaps": "https://goo.gl/maps/Hv6zQswGhFxoVVBm6",
        },
        "population": 16655799,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/nl.png",
            "svg": "https://flagcdn.com/nl.svg"
        },
        "capitalInfo": {
            "latlng": [
                52.35,
                4.92
            ]
        }
    },
    {
        "name": {
            "common": "New Zealand",
            "official": "New Zealand",
        },
        "currencies": {
            "name": "New Zealand dollar",
            "symbol": "$"
        },
        "capital": "Wellington",
        "languages": {
            "eng": "English",
            "mri": "Māori",
            "nzs": "New Zealand Sign Language"
        },
        "latlng": [
            -41,
            174
        ],
        "area": 270467,
        "maps": {
            "googleMaps": "https://goo.gl/maps/xXiDQo65dwdpw9iu8",
        },
        "population": 5084300,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/nz.png",
            "svg": "https://flagcdn.com/nz.svg"
        },
        "capitalInfo": {
            "latlng": [
                -41.3,
                174.78
            ]
        }
    },
    {
        "name": {
            "common": "Tunisia",
            "official": "Tunisian Republic",
        },
        "currencies": {
            "name": "Tunisian dinar",
            "symbol": "د.ت"
        },
        "capital": "Tunis",
        "languages": {
            "ara": "Arabic"
        },
        "latlng": [
            34,
            9
        ],
        "area": 163610,
        "maps": {
            "googleMaps": "https://goo.gl/maps/KgUmpZdUuNRaougs8",
        },
        "population": 11818618,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/tn.png",
            "svg": "https://flagcdn.com/tn.svg"
        },
        "capitalInfo": {
            "latlng": [
                36.8,
                10.18
            ]
        }
    },
    {
        "name": {
            "common": "Puerto Rico",
            "official": "Commonwealth of Puerto Rico",
        },
        "currencies": {
            "name": "United States dollar",
            "symbol": "$"
        },
        "capital": "San Juan",
        "languages": {
            "eng": "English",
            "spa": "Spanish"
        },
        "latlng": [
            18.25,
            -66.5
        ],
        "area": 8870,
        "maps": {
            "googleMaps": "https://goo.gl/maps/sygfDbtwn389wu8x5",
        },
        "population": 3194034,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/pr.png",
            "svg": "https://flagcdn.com/pr.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.47,
                -66.12
            ]
        }
    },
    {
        "name": {
            "common": "Indonesia",
            "official": "Republic of Indonesia",
        },
        "currencies": {
            "name": "Indonesian rupiah",
            "symbol": "Rp"
        },
        "capital": "Jakarta",
        "languages": {
            "ind": "Indonesian"
        },
        "latlng": [
            -5,
            120
        ],
        "area": 1904569,
        "maps": {
            "googleMaps": "https://goo.gl/maps/9gfPupm5bffixiFJ6",
        },
        "population": 273523621,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/id.png",
            "svg": "https://flagcdn.com/id.svg"
        },
        "capitalInfo": {
            "latlng": [
                -6.17,
                106.82
            ]
        }
    },
    {
        "name": {
            "common": "Croatia",
            "official": "Republic of Croatia",
        },
        "currencies": {
            "name": "Croatian kuna",
            "symbol": "kn"
        },
        "capital": "Zagreb",
        "languages": {
            "hrv": "Croatian"
        },
        "latlng": [
            45.16666666,
            15.5
        ],
        "area": 56594,
        "maps": {
            "googleMaps": "https://goo.gl/maps/qSG6xTKUmrYpwmGQ6",
        },
        "population": 4047200,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/hr.png",
            "svg": "https://flagcdn.com/hr.svg"
        },
        "capitalInfo": {
            "latlng": [
                45.8,
                16
            ]
        }
    },
    {
        "name": {
            "common": "South Korea",
            "official": "Republic of Korea",
        },
        "currencies": {
            "name": "South Korean won",
            "symbol": "₩"
        },
        "capital": "Seoul",
        "languages": {
            "kor": "Korean"
        },
        "latlng": [
            37,
            127.5
        ],
        "area": 100210,
        "maps": {
            "googleMaps": "https://goo.gl/maps/7ecjaJXefjAQhxjGA",
        },
        "population": 51780579,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/kr.png",
            "svg": "https://flagcdn.com/kr.svg"
        },
        "capitalInfo": {
            "latlng": [
                37.55,
                126.98
            ]
        }
    },
    {
        "name": {
            "common": "Sweden",
            "official": "Kingdom of Sweden",
        },
        "currencies": {
            "name": "Swedish krona",
            "symbol": "kr"
        },
        "capital": "Stockholm",
        "languages": {
            "swe": "Swedish"
        },
        "latlng": [
            62,
            15
        ],
        "area": 450295,
        "maps": {
            "googleMaps": "https://goo.gl/maps/iqygE491ADVgnBW39",
        },
        "population": 10353442,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/se.png",
            "svg": "https://flagcdn.com/se.svg"
        },
        "capitalInfo": {
            "latlng": [
                59.33,
                18.05
            ]
        },
    }
])


