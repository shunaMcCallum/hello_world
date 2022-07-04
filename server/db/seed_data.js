
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
            "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Somalia_sm_2011.gif"
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
            "svg": "https://flagcdn.com/so.svg",
            "meaning": "The Somali flag was adopted on 12 October 1954, The five-pointed star is known as the Start of Unity and represents the five regions where Somali people reside."
        },
        "capitalInfo": {
            "latlng": [
                2.07,
                45.33
            ]
        },
        "funFact": {
            "header": "Somali homes smell good.",
            "fact": "In Somalia, people often perfume homes after large meals or when guests are visiting. Dabqaads, a white clar or soapstone pot, is used as an incense burner. Frankincense or other incense is place inside and burns for around 10 minutes, however the smell remains in the house for several hours.",
            "img": "https://cdn.myminifactory.com/assets/object-assets/5852b60179574/images/720X720-1000x1000-208ef525f583960a5ef02ecf87ce92f1bdee2807.jpg"
        },
        "landmarks": [
            {
                "name": "Cathedral of Mogadishu",
                "img": "https://qph.cf2.quoracdn.net/main-qimg-e94c4f874e5486e9cfd4abd3366a2b34.webp"
            },
            {
                "name": "Shanghai Old City",
                "img": "https://qph.cf2.quoracdn.net/main-qimg-6f1c01c2f025980d97a6b41274f7c81b.webp"
            }
        ]
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
        },
        "funFact": {
            "header": "Beauty is big business in Venezuela.",
            "fact": "Venezuela has won all of the world's biggest beauty pagents for women and has held more crowns than most other countries. The country has won 7 Miss Universe titles, 8 Miss International titles, 6 Miss World titles and 2 Miss Earth titles. It is the first and only country to win all of these pageants multiple times.",
            "img": "https://www.occrp.org/images/stories/CCWatch/investigations/Pageant1.jpg"
        },
        "landmarks": [
            {
                "name": "",
                "img": ""
            },
            {
                "name": "",
                "img": ""
            }
        ]
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
        "funFact": {
            "header": "The first woman to win a Nobel Peace Prize was from Kenya.",
            "fact": "Wangari Muta Maathai was a Kenyan environmental, social and political activist who won the Nobel Peace Prize in 2004 for her contribution to sustainable development, democracy and peace.",
            "img": "https://4.bp.blogspot.com/-d4c0ZGR3eh8/XkPhZFg6UQI/AAAAAAAApdc/CPQDN8Mw_EEFCQYcZb8gIZzvcJK0Y6WIgCLcBGAsYHQ/s1600/wangari_muta_maathai_first_black_woman_to_win_nobel_peace_prize.jpg"
        }
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
        },
        "funFact": {
            "header": "Cameroon is one of the wettest countries on earth.",
            "fact": "Every year the country has a short dry season and a very long wet season because it is located close to Mount Cameroon and the equator.",
            "img": "https://theculturetrip.com/wp-content/uploads/2018/11/ekom-nkam-falls.jpg"
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
        },
        "funFact": {
            "header": "Fiji LOVES rugby.",
            "fact": "Despite its relatively small population, Fiji's men's rugby team is ranked 9th in the world and there are roughly 80,000 registered rugby players in the country. That's about one in 10 people!",
            "img": "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/7/2019/08/GettyImages-1163130189.jpg"
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
        },
        "funFact": {
            "header": "Argentina produced the world's first animated film.",
            "fact": "Move over Disney, there's another legendary animator that few of us have heard of! The first feature-length cartoon was made by Quirino Cristiani in 1917. It was a 70-minute film named El Apostol.",
            "img": "https://m.media-amazon.com/images/M/MV5BOGJhNTIzMGMtN2UzYy00YjAzLWE2NDMtNDZmZmU2MWJjMTZmL2ltYWdlXkEyXkFqcGdeQXVyNjcyNzA4Mjk@._V1_FMjpg_UX1000_.jpg"
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
        },
        "funFact": {
            "header": "The UK LOVES tea!",
            "fact": "Collectively, people in the UK drink an average of 165 million cups of tea per day. That's over 60 billion cups of tea every year!",
            "img": "https://cdn3.vectorstock.com/i/1000x1000/53/52/color-image-cartoon-porcelain-cup-tea-vector-14885352.jpg"
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
        },
        "funFact": {
            "header": "Dutch men are the tallest in the world.",
            "fact": "On average, Dutch men are 1.83m or 6ft tall. Women also tend to be tall, with an average height of 1.69m or 5ft 7inches tall, however Latvian women have been found to be the tallest in the world.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhSF7yDTB3ENcX-i4u0ThNgDjgv1M36GHug&usqp=CAU"
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
        },
        "funFact": {
            "header": "There is a hill in New Zealand who's name is 85 letters long.",
            "fact": "Yes that's right, 85!!! The hill's name, Taumatawhakatangi­hangakoauauotamatea­turipukakapikimaunga­horonukupokaiwhen­uakitanatahu, us of Maori origin, and is often shortened to Taumata for brevity. The name roughly translates to 'The summit where Tamatea, the man with the big knees, the slider, the climber of mountains, the land-swallower who travelled about, played his koauau (flute) to his loved one'.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjVlM9pzr8WN1AiQrUtX5yetvlJjYLkXFxJQ&usqp=CAU"
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
        },
        "funFact": {
            "header": "In Matmata, Tunisia, people live underground.",
            "fact": "Matmata is a small town where houses were built to escape the scorching heat and sun of the Sahara Dessert. The underground houses can ofen house 5 - 9 families.",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6jyvwJoKbRyEvM3YJdwoVLQ0-m_p1f43cpA&usqp=CAU"
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
        },
        "funFact": {
            "header": "The Puerto Rico Trench is the deepest point in the Atlantic Ocean.",
            "fact": "The trenhch is located on the northern side of Puerto Rico and has a maximum depth of 27,480ft or 5.20 miles.",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Atlantic-trench.JPG/300px-Atlantic-trench.JPG"
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
        },
        "funFact": {
            "header": "Indonesia's population is the youngest in the world.",
            "fact": "Indonesia is home to over 165 million people under the age of 30, and only 8% of the population is over 60 years of age.",
            "img": "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F0-4856_a-group-of-young-people-group-of-people.png&imgrefurl=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FbRRb_a-group-of-young-people-group-of-people%2F&tbnid=P1z5-vc0C8I7UM&vet=12ahUKEwiJgvmzmdv4AhXEhM4BHUXzBC4QMygQegUIARD6AQ..i&docid=apHEAIGMttaYyM&w=860&h=803&q=young%20people%20cartoon&ved=2ahUKEwiJgvmzmdv4AhXEhM4BHUXzBC4QMygQegUIARD6AQ"
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
        },
        "funFact": {
            "header": "Croatia is home to the world's smallest town.",
            "fact": "Hum is located in Northwest of Croatia and is said to be the smallest in the world with a population of between 17 and 23!",
            "img": "https://external-preview.redd.it/z8oKRGEl8UagVrvhVn6SZtOFdu7CW_sQ9SsEua4ogkY.jpg?auto=webp&s=de8fcee5627bd5f028602cf0fbdd172afebc7094"
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
        },
        "funFact": {
            "header": "South Korea LOVES being online!",
            "fact": "In South Korea, WiFi is available practically everywhere! In coffee shops, libraries, museums and even on remote islands, you can connect to WiFi.",
            "img": "https://mpng.subpng.com/20180716/wtw/kisspng-wi-fi-wireless-computer-icons-clip-art-wifi-image-5b4cec363bbbc0.0964989915317678622447.jpg"
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
        "funFact": {
            "header" :"Sweden LOVES islands!",
            "fact": "Sweden has more islands than any other country in the world - 267, 570 to be exact!",
            "img": "https://i.stack.imgur.com/5PkfW.jpg"
        }
    }
])


