use countriesApp;
db.dropDatabase();

db.users.insertMany([
    {
        "name": "Shuna",
        "email": "shuna.shuna@shuna.com",
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
        ],
        "nationalAnthem": "/somalia.mp3"
    },
    {
        "name": {
            "common": "Venezuela",
            "official": "Bolivarian Republic of Venezuela",
            "img": "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iUSR6YqdwshA/v1/-999x-999.gif"
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
            "svg": "https://flagcdn.com/ve.svg",
            "meaning": "The three colours of Venezuela's flag have meaning. The yellow band stands for the wealth of the land, the red for courage, and the blue for the independence from Spain."
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
                "name": "Angel Falls",
                "img": " https://www.worldatlas.com/r/w1200/upload/ed/fd/07/shutterstock-1056803657.jpg"
            },
            {
                "name": "National Pantheon of Venezuela",
                "img": "https://onlybyland.com/wp-content/uploads/2016/12/caracas4-300x243.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Kenya",
            "official": "Republic of Kenya",
            "img": "https://c8.alamy.com/comp/E5K8MG/kenya-political-map-with-capital-nairobi-national-borders-most-important-E5K8MG.jpg"
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
            "svg": "https://flagcdn.com/ke.svg",
            "meaning": "The Kenyan flag was adopted on 12th December, 1963 as the country's flag. The color black represents the people of the Republic of Kenya, red for the blood shed during the fight for independence, green for the country's landscape and the white fimbriation was added later to symbolize peace and honesty."
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
        },
        "landmarks": [
            {
                "name": "Mount Kenya",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Mount_Kenya.jpg/1200px-Mount_Kenya.jpg"
            },
            {
                "name": "KICC Tower",
                "img": "https://upload.wikimedia.org/wikipedia/commons/c/c5/KICC_nairobi_kenya.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Cameroon",
            "official": "Republic of Cameroon",
            "img": "https://maps-cameroon.com/img/1200/yaounde-cameroon-map.jpg"
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
            "svg": "https://flagcdn.com/cm.svg",
            "meaning": "Cameroon's flag features the traditional Pan-African colors of green, red and yellow. The color red stands for unity, yellow represents the sun and the savannas located in the northern part of Cameroon, and the green is symbolic of the forests located to the south."
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
        },
        "landmarks": [
            {
                "name": "Reunification Monument",
                "img": "https://i.pinimg.com/originals/f1/5f/d3/f15fd31ffede41068eb39688bc36bdd3.jpg"
            },
            {
                "name": "Foumban Palace",
                "img": "https://preview.redd.it/9l7qou4sik291.jpg?auto=webp&s=7080474593e91e8237e999e6aac2e139343d3194"
            }
        ]
    },
    {
        "name": {
            "common": "Fiji",
            "official": "Republic of Fiji",
            "img": "https://as1.ftcdn.net/v2/jpg/01/13/62/16/1000_F_113621697_4EgU8Y95Oq6Q37jMuEbeYqhywp3um4rh.jpg"
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
            "svg": "https://flagcdn.com/fj.svg",
            "meaning": "The Union Jack and St George's Cross on Fiji's flag are symbolic of the once close connection with Britain. The light blue field represents the Pacific Ocean. The sugar cane, bananas and coconut signify the rich lush land and its agricultural production. The dove is a symbol of peace."
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
        },
        "landmarks": [
            {
                "name": "Bouma National Heritage Park",
                "img": "https://franks-travelbox.com/wp-content/uploads/2017/11/fidschi-wasserfall-bouma-national-heritage-parkam-ende-des-lavena-coastal-walk-der-fucc88r-anspruchsvolle-wanderer-zu-empfehlen-ist-fidschi-daniel-tucc88ckmantel-fotolia.jpg"
            },
            {
                "name": "Sacred Heart Cathedral",
                "img": "https://www.mediastorehouse.com/t/467/sacred-heart-cathedral-suva-viti-levu-fiji-13949397.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Argentina",
            "official": "Argentine Republic",
            "img": "https://cdn.britannica.com/83/183583-050-B79EFF03/World-Data-Locator-Map-Argentina.jpg"
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
            "svg": "https://flagcdn.com/ar.svg",
            "meaning": "The blue and white colors of Argentina's flag were selected by Manual Belgrano, who led the revolution against Spain. These colors are meant to symbolise the blue sky opening up to reveal white cloud. This was said to have occurred during the Liberation demonstration in 1810."
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
        },
        "landmarks": [
            {
                "name": "Rainbow Mountains",
                "img": "https://thewholeworldornothing.com/wp-content/uploads/2019/06/14-Coloured-Mountains-Humahuaca-Argentina-Social.jpg"
            },
            {
                "name": "Talampaya National Park",
                "img": "https://toucanslandmarks.s3.amazonaws.com/media/com_scatalog/images/listings/o/2020032312031523775.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "United Kingdom",
            "official": "United Kingdom of Great Britain and Northern Ireland",
            "img": "https://i.pinimg.com/564x/1e/31/1b/1e311b57c79260847e86452f462fdeb1--united-kingdom-map-world-atlas-map.jpg"
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
            "svg": "https://flagcdn.com/gb.svg",
            "meaning": "The Union Flag, or Union Jack, combines the crosses of the three countries united under one Sovereign - the kingdoms of England and Wales, of Scotland and of Northern Ireland."
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
        },
        "landmarks": [
            {
                "name": "Stonehenge",
                "img": "https://www.planetware.com/photos-large/ENG/england-stonehenge.jpg"
            },
            {
                "name": "Buckingham Palace",
                "img": "https://cdn.images.express.co.uk/img/dynamic/136/590x/500735_1.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Netherlands",
            "official": "Kingdom of the Netherlands",
            "img": "https://wwwnc.cdc.gov/travel/images/map-netherlands.png"
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
            "svg": "https://flagcdn.com/nl.svg",
            "meaning": "The red band on Netherlands' flag symbolises bravery, strength, valor, and hardiness; the white band, peace and honesty; and the blue band represents vigilance, truth, loyalty, perseverance, and justice."
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
        },
        "landmarks": [
            {
                "name": "Van Gogh Museum",
                "img": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/48/51/81/van-gogh-museum-foto.jpg?w=1200&h=-1&s=1"
            },
            {
                "name": "Erasmusburg Bridge",
                "img": "https://418-feedfactory.imgix.net/5ff8a1e7de7e8633a4ab7bdd/be486723-0937-4845-9ca4-0cc795a0faae.jpg?fit=max&auto=format"
            }
        ]
    },
    {
        "name": {
            "common": "New Zealand",
            "official": "New Zealand",
            "img": "https://i.pinimg.com/originals/4b/6a/b4/4b6ab43007000027d56e5bae070dbe1d.gif"
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
            "svg": "https://flagcdn.com/nz.svg",
            "meaning": "The stars on New Zealand's Flag represent the Southern Cross constellation, emphasising New Zealand's location in the South Pacific Ocean. The Union Jack in the top left-hand corner of the Flag recognises New Zealand's historical foundations as a former British colony and dominion."
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
        },
        "landmarks": [
            {
                "name": "Maungakiekie",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/One_Tree_Hill%2C_Auckland%2C_March_2015.jpg/1200px-One_Tree_Hill%2C_Auckland%2C_March_2015.jpg"
            },
            {
                "name": "Moeraki Boulders",
                "img": "https://dl0.creation.com/articles/p104/c10481/giant-marbles.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Tunisia",
            "official": "Tunisian Republic",
            "img": "https://cdn.britannica.com/45/3045-050-55330084/Tunisia-map-boundaries-cities-locator.jpg"
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
            "svg": "https://flagcdn.com/tn.svg",
            "meaning": "The white of Tunisia's flag symbolises peace, the disk symbolizes the radiance of the nation as the sun, while the crescent and five-pointed star represent unity of all Muslims and the Five Pillars of Islam, respectively."
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
        },
        "landmarks": [
            {
                "name": "El Djem Amphitheater",
                "img": "https://d3vonci41uckcv.cloudfront.net/old-images/original/9cf704f3-77ed-4857-bff7-1fa46e7e91bb.Roman_Ampitheatre_El_Jem_Tunisia.jpg"
            },
            {
                "name": "Carthage",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/MYTHICAL_CARTHAGE.jpg/1200px-MYTHICAL_CARTHAGE.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Puerto Rico",
            "official": "Commonwealth of Puerto Rico",
            "img": "https://i.pinimg.com/originals/00/b2/56/00b256e61668d1713179584468f08e5d.gif"
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
            "svg": "https://flagcdn.com/pr.svg",
            "meaning": "On the left of Puerto Rico's flag is a single white five-pointed star resting in a blue triangle. The three red stripes symbolizes the blood from the brave warriors, the two white stripes victory and peace after obtaining independence, blue symbolises the sky and sea and the white star is the island."
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
        },
        "landmarks": [
            {
                "name": "Santa Maria Magdalena de Pazzis",
                "img": "https://previews.123rf.com/images/mikolaj64/mikolaj641702/mikolaj64170200037/73080953-santa-maria-magdalena-de-pazzis-cemetery-old-san-juan-puerto-rico.jpg"
            },
            {
                "name": "Cabo Rojo Lighthouse",
                "img": "https://live.staticflickr.com/3516/3898793522_cc6bc13d27_b.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Indonesia",
            "official": "Republic of Indonesia",
            "img": "https://www.freeworldmaps.net/asia/indonesia/indonesia-provinces-map.jpg"
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
            "svg": "https://flagcdn.com/id.svg",
            "meaning": "The red of Indonesia's flag symbolises human blood and the white represents the human spirit. The design of the flag is based on the 13th centry Javan Majapahit Empire flag that had nine red and white stripes."
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
        },
        "landmarks": [
            {
                "name": "Prambanan",
                "img": "https://lp-cms-production.imgix.net/2019-06/d7ecf43d5c78652daaab5e0256d1bc50-prambanan-temple.jpg"
            },
            {
                "name": "Tegalalang Rice Terraces",
                "img": "https://jonistravelling.com/wp-content/uploads/2018/05/bali-best-rice-terraces-tegalalang.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Croatia",
            "official": "Republic of Croatia",
            "img": "https://www.visit-croatia.co.uk/wp-content/uploads/2017/11/croatia-map.jpg"
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
            "svg": "https://flagcdn.com/hr.svg",
            "meaning": "The red-white-blue colours of Croatia's were inspired by the flag of imperial Russia, which was an opponent of Austria-Hungary and hence a potential Croatian ally. Although Croatians were unable to establish their independence at that time, the flag remained a symbol of aspirations for the future."
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
        },
        "landmarks": [
            {
                "name": "Krka National Park",
                "img": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/71/1c/37.jpg"
            },
            {
                "name": "Ban Jalacic Square",
                "img": "https://img.itinari.com/pages/images/original/ff74e7c8-4662-4a73-b95b-49e606bfd7ec-joyt-istock-510104309.jpg?ch=DPR&dpr=2.625&w=1600&s=85e962bf8fd4fdc8c46c1446746046d1"
            }
        ]
    },
    {
        "name": {
            "common": "South Korea",
            "official": "Republic of Korea",
            "img": "https://wwwnc.cdc.gov/travel/images/map-republic-of-korea.png"
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
            "svg": "https://flagcdn.com/kr.svg",
            "meaning": "The colours on South Korea's flag represent peace and purity. The circle in the flag's center symbolizes balance in the world. The red half represents the sky, and the blue half represents the land. Together, the trigrams represent movement and harmony as fundamental principles."
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
        },
        "landmarks": [
            {
                "name": "Gyeongbokgung Palace",
                "img": "https://a.cdn-hotels.com/gdcs/production87/d1597/ecdd89f2-79d4-46a1-b474-6f132ffdc2d1.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            },
            {
                "name": "Incheon Tri-Bowl",
                "img": "https://img.freepik.com/free-photo/tri-bowl-building-central-park-songdo-district-incheon-south-korea_174052-58.jpg?w=2000"
            }
        ]
    },
    {
        "name": {
            "common": "Sweden",
            "official": "Kingdom of Sweden",
            "img": "https://cdn.britannica.com/33/4533-050-F97DC4AB/Sweden-map-features-locator.jpg"
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
            "svg": "https://flagcdn.com/se.svg",
            "meaning": "The cross on Sweden's flag creates two blue square sections on the hoist side and two rectangular sections on its flying side. The blue represents justice, loyalty, truth, vigilance and perseverance. The yellow or gold color used on the cross is a representation of generosity."
        },
        "capitalInfo": {
            "latlng": [
                59.33,
                18.05
            ]
        },
        "funFact": {
            "header": "Sweden LOVES islands!",
            "fact": "Sweden has more islands than any other country in the world - 267, 570 to be exact!",
            "img": "https://i.stack.imgur.com/5PkfW.jpg"
        },
        "landmarks": [
            {
                "name": "Kebnekaise",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1i7DjtAoGM-wdzD-geXl8dXlCCwdtICaGw&usqp=CAU"
            },
            {
                "name": "Stockholm Public Library",
                "img": "https://static.dezeen.com/uploads/2014/12/Asplund-Public-Library_dezeen_ban.jpg"
            }
        ]
    },
    {
        "name": {
            "common": "Mexico",
            "official": "United Mexican States",
            "img": "https://geology.com/world/mexico-map.gif"
        },
        "currencies": {
                "name": "Mexican peso",
                "symbol": "$"
        },
        "capital": "Mexico City",
        "languages": {
            "spa": "Spanish"
        },
        "latlng": [
            23,
            -102
        ],
        "area": 1964375,
        "maps": {
            "googleMaps": "https://goo.gl/maps/s5g7imNPMDEePxzbA",
            "openStreetMaps": "https://www.openstreetmap.org/relation/114686"
        },
        "population": 128932753,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/mx.png",
            "svg": "https://flagcdn.com/mx.svg",
            "meaning": "The design of the Mexican flag was influenced by the French flag. The green colour symbolises independence, white is for the Roman Catholic religion and red is for union - the 'Three Guarantees of Iguala."
        },
        "coatOfArms": {
            "png": "https://mainfacts.com/media/images/coats_of_arms/mx.png",
            "svg": "https://mainfacts.com/media/images/coats_of_arms/mx.svg"
        },
        "capitalInfo": {
            "latlng": [
                19.43,
                -99.13
            ]
        },
        "funFact": {
            "header": "Mexico was hit by a Meteorite!",
            "fact": "That's right, the meteorite that wiped out the dinosaurs 65 million years ago hit the Mexican peninsula of Yucatán. A 180 square meters crater with a depth of more than 600 meters was left behind. Employees of the state oil company PEMEX discovered the crater in 1981 while drilling an oil well.",
            "img": "https://assets.answersingenesis.org/img/articles/am/v15/n1/barringer-crater.jpg"
        },
        "landmarks": [
            {
                "name": "Chichen Itza",
                "img": "https://travel2next.com/wp-content/uploads/landmark-in-mexico-chichen-itza-1024x748.jpg"
            },
            {
                "name": "Great Pyramid of Cholula",
                "img": "https://travel2next.com/wp-content/uploads/mexico-landmarks-2-1024x660.jpg"
            }
        ],
        "nationalAnthem": "/mexico.mp3",
        "hello": "Hola",
        "helloAudio": "hola.mp3"
    }
])





