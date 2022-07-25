use countriesApp;
db.dropDatabase();

db.users.insertMany([
    {
        "name": "Shuna",
        "password": "123",
        "countries_studied": []
    },
    {
        "name": "Sushi",
        "password": "123",
        "countries_studied": []
    }
])

db.countries.insertMany([
    {
        "name": {
            "common": "Guam",
            "official": "Guam",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Hagåtña",
        "region": "Oceania",
        "latlng": [
            13.46666666,
            144.78333333
        ],
        "area": 549,
        "population": 168783,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/gu.png",
            "svg": "https://flagcdn.com/gu.svg"
        },
        "capitalInfo": {
            "latlng": [
                13.48,
                144.75
            ]
        }
    },

    {
        "name": {
            "common": "Bangladesh",
            "official": "People's Republic of Bangladesh",
        },
        "currencies": {
            "BDT": {
                "name": "Bangladeshi taka",
                "symbol": "৳"
            }
        },
        "capital": "Dhaka",
        "latlng": [
            24,
            90
        ],
        "area": 147570,
        "population": 164689383,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/bd.png",
            "svg": "https://flagcdn.com/bd.svg"
        },
        "capitalInfo": {
            "latlng": [
                23.72,
                90.4
            ]
        }
    },

    {
        "name": {
            "common": "Cook Islands",
            "official": "Cook Islands",
        },
        "currencies": {
            "CKD": {
                "name": "Cook Islands dollar",
                "symbol": "$"
            },
            "NZD": {
                "name": "New Zealand dollar",
                "symbol": "$"
            }
        },
        "capital": "Avarua",
        "latlng": [
            -21.23333333,
            -159.76666666
        ],
        "area": 236,
        "population": 18100,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/ck.png",
            "svg": "https://flagcdn.com/ck.svg"
        },
        "capitalInfo": {
            "latlng": [
                -21.2,
                -159.77
            ]
        }
    },

    {
        "name": {
            "common": "Nepal",
            "official": "Federal Democratic Republic of Nepal",
        },
        "currencies": {
            "NPR": {
                "name": "Nepalese rupee",
                "symbol": "₨"
            }
        },
        "capital": "Kathmandu",
        "latlng": [
            28,
            84
        ],
        "area": 147181,
        "population": 29136808,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/np.png",
            "svg": "https://flagcdn.com/np.svg"
        },
        "capitalInfo": {
            "latlng": [
                27.72,
                85.32
            ]
        }
    },

    {
        "name": {
            "common": "Monaco",
            "official": "Principality of Monaco",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Monaco",
        "latlng": [
            43.73333333,
            7.4
        ],
        "area": 2.02,
        "population": 39244,
        "continent": "Europe",
        "flags": {
            "png": "zhttps://flagcdn.com/w320/mc.png",
            "svg": "https://flagcdn.com/mc.svg"
        },
        "capitalInfo": {
            "latlng": [
                43.73,
                7.42
            ]
        }
    },

    {
        "name": {
            "common": "Turkey",
            "official": "Republic of Turkey",
        },
        "currencies": {
            "TRY": {
                "name": "Turkish lira",
                "symbol": "₺"
            }
        },
        "capital": "Ankara",
        "latlng": [
            39,
            35
        ],
        "area": 783562,
        "population": 84339067,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/tr.png",
            "svg": "https://flagcdn.com/tr.svg"
        },
        "capitalInfo": {
            "latlng": [
                39.93,
                32.87
            ]
        }
    },

    {
        "name": {
            "common": "Saint Barthélemy",
            "official": "Collectivity of Saint Barthélemy",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Gustavia",
        "latlng": [
            18.5,
            -63.41666666
        ],
        "area": 21,
        "population": 4255,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/bl.png",
            "svg": "https://flagcdn.com/bl.svg"
        },
        "capitalInfo": {
            "latlng": [
                17.88,
                -62.85
            ]
        }
    },

    {
        "name": {
            "common": "Jamaica",
            "official": "Jamaica",
        },
        "currencies": {
            "JMD": {
                "name": "Jamaican dollar",
                "symbol": "$"
            }
        },
        "capital": "Kingston",
        "latlng": [
            18.25,
            -77.5
        ],
        "area": 10991,
        "population": 2961161,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/jm.png",
            "svg": "https://flagcdn.com/jm.svg"
        },
        "capitalInfo": {
            "latlng": [
                17.99702,
                -76.79358
            ]
        }
    },

    {
        "name": {
            "common": "Andorra",
            "official": "Principality of Andorra",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Andorra la Vella",
        "latlng": [
            42.5,
            1.5
        ],
        "area": 468,
        "population": 77265,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ad.png",
            "svg": "https://flagcdn.com/ad.svg"
        },
        "capitalInfo": {
            "latlng": [
                42.5,
                1.52
            ]
        }
    },

    {
        "name": {
            "common": "Libya",
            "official": "State of Libya",
        },
        "currencies": {
            "LYD": {
                "name": "Libyan dinar",
                "symbol": "ل.د"
            }
        },
        "capital": "Tripoli",
        "latlng": [
            25,
            17
        ],
        "area": 1759540,
        "population": 6871287,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ly.png",
            "svg": "https://flagcdn.com/ly.svg"
        },
        "capitalInfo": {
            "latlng": [
                32.88,
                13.17
            ]
        }
    },

    {
        "name": {
            "common": "Jersey",
            "official": "Bailiwick of Jersey",
        },
        "currencies": {
            "GBP": {
                "name": "British pound",
                "symbol": "£"
            },
            "JEP": {
                "name": "Jersey pound",
                "symbol": "£"
            }
        },
        "capital": "Saint Helier",
        "latlng": [
            49.25,
            -2.16666666
        ],
        "area": 116,
        "population": 100800,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/je.png",
            "svg": "https://flagcdn.com/je.svg"
        },
        "capitalInfo": {
            "latlng": [
                49.18,
                -2.1
            ]
        }
    },

    {
        "name": {
            "common": "Malta",
            "official": "Republic of Malta",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Valletta",
        "latlng": [
            35.83333333,
            14.58333333
        ],
        "area": 316,
        "population": 525285,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/mt.png",
            "svg": "https://flagcdn.com/mt.svg"
        },
        "capitalInfo": {
            "latlng": [
                35.88,
                14.5
            ]
        }
    },

    {
        "name": {
            "common": "Bolivia",
            "official": "Plurinational State of Bolivia",
        },
        "currencies": {
            "BOB": {
                "name": "Bolivian boliviano",
                "symbol": "Bs."
            }
        },
        "capital": "Sucre",
        "latlng": [
            -17,
            -65
        ],
        "area": 1098581,
        "population": 11673029,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/bo.png",
            "svg": "https://flagcdn.com/bo.svg"
        },
        "capitalInfo": {
            "latlng": [
                -19.02,
                -65.26
            ]
        }
    },

    {
        "name": {
            "common": "Mauritius",
            "official": "Republic of Mauritius",
        },
        "currencies": {
            "MUR": {
                "name": "Mauritian rupee",
                "symbol": "₨"
            }
        },
        "capital": "Port Louis",
        "latlng": [
            -20.28333333,
            57.55
        ],
        "area": 2040,
        "population": 1265740,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/mu.png",
            "svg": "https://flagcdn.com/mu.svg"
        },
        "capitalInfo": {
            "latlng": [
                -20.15,
                57.48
            ]
        }
    },

    {
        "name": {
            "common": "Puerto Rico",
            "official": "Commonwealth of Puerto Rico",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "San Juan",
        "latlng": [
            18.25,
            -66.5
        ],
        "area": 8870,
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
    },

    {
        "name": {
            "common": "France",
            "official": "French Republic",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Paris",
        "latlng": [
            46,
            2
        ],
        "area": 551695,
        "population": 67391582,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/fr.png",
            "svg": "https://flagcdn.com/fr.svg"
        },
        "capitalInfo": {
            "latlng": [
                48.87,
                2.33
            ]
        }
    },

    {
        "name": {
            "common": "Luxembourg",
            "official": "Grand Duchy of Luxembourg",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Luxembourg",
        "latlng": [
            49.75,
            6.16666666
        ],
        "area": 2586,
        "population": 632275,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/lu.png",
            "svg": "https://flagcdn.com/lu.svg"
        },
        "capitalInfo": {
            "latlng": [
                49.6,
                6.12
            ]
        },
    },

    {
        "name": {
            "common": "Kosovo",
            "official": "Republic of Kosovo",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Pristina",
        "latlng": [
            42.666667,
            21.166667
        ],
        "area": 10908,
        "population": 1775378,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/xk.png",
            "svg": "https://flagcdn.com/xk.svg"
        },
        "capitalInfo": {
            "latlng": [
                42.67,
                21.17
            ]
        }
    },

    {
        "name": {
            "common": "Madagascar",
            "official": "Republic of Madagascar",
        },
        "currencies": {
            "MGA": {
                "name": "Malagasy ariary",
                "symbol": "Ar"
            }
        },
        "capital": "Antananarivo",
        "latlng": [
            -20,
            47
        ],
        "area": 587041,
        "population": 27691019,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/mg.png",
            "svg": "https://flagcdn.com/mg.svg"
        },
        "capitalInfo": {
            "latlng": [
                -18.92,
                47.52
            ]
        }
    },

    {
        "name": {
            "common": "Pakistan",
            "official": "Islamic Republic of Pakistan",
        },
        "currencies": {
            "PKR": {
                "name": "Pakistani rupee",
                "symbol": "₨"
            }
        },
        "capital": "Islamabad",
        "latlng": [
            30,
            70
        ],
        "area": 881912,
        "population": 220892331,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/pk.png",
            "svg": "https://flagcdn.com/pk.svg"
        },
        "capitalInfo": {
            "latlng": [
                33.68,
                73.05
            ]
        }
    },

    {
        "name": {
            "common": "Malawi",
            "official": "Republic of Malawi",
        },
        "currencies": {
            "MWK": {
                "name": "Malawian kwacha",
                "symbol": "MK"
            }
        },
        "capital": "Lilongwe",
        "latlng": [
            -13.5,
            34
        ],
        "area": 118484,
        "population": 19129955,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/mw.png",
            "svg": "https://flagcdn.com/mw.svg"
        },
        "capitalInfo": {
            "latlng": [
                -13.97,
                33.78
            ]
        }
    },

    {
        "name": {
            "common": "Slovenia",
            "official": "Republic of Slovenia",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Ljubljana",
        "latlng": [
            46.11666666,
            14.81666666
        ],
        "area": 20273,
        "population": 2100126,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/si.png",
            "svg": "https://flagcdn.com/si.svg"
        },
        "capitalInfo": {
            "latlng": [
                46.05,
                14.52
            ]
        }
    },

    {
        "name": {
            "common": "Eswatini",
            "official": "Kingdom of Eswatini",
        },
        "currencies": {
            "SZL": {
                "name": "Swazi lilangeni",
                "symbol": "L"
            },
            "ZAR": {
                "name": "South African rand",
                "symbol": "R"
            }
        },
        "capital": "Mbabane",
        "latlng": [
            -26.5,
            31.5
        ],
        "area": 17364,
        "population": 1160164,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/sz.png",
            "svg": "https://flagcdn.com/sz.svg"
        },
        "capitalInfo": {
            "latlng": [
                -26.32,
                31.13
            ]
        }
    },

    {
        "name": {
            "common": "United States",
            "official": "United States of America",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Washington, D.C.",
        "latlng": [
            38,
            -97
        ],
        "area": 9372610,
        "population": 329484123,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/us.png",
            "svg": "https://flagcdn.com/us.svg"
        },
        "capitalInfo": {
            "latlng": [
                38.89
                - 77.05
            ]
        },
    },

    {
        "name": {
            "common": "Kiribati",
            "official": "Independent and Sovereign Republic of Kiribati",
        },
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            },
            "KID": {
                "name": "Kiribati dollar",
                "symbol": "$"
            }
        },
        "capital": "South Tarawa",
        "latlng": [
            1.41666666,
            173
        ],
        "area": 811,
        "population": 119446,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/ki.png",
            "svg": "https://flagcdn.com/ki.svg"
        },
        "capitalInfo": {
            "latlng": [
                1.33,
                172.98
            ]
        }
    },

    {
        "name": {
            "common": "Azerbaijan",
            "official": "Republic of Azerbaijan",
        },
        "currencies": {
            "AZN": {
                "name": "Azerbaijani manat",
                "symbol": "₼"
            }
        },
        "capital": "Baku",
        "latlng": [
            40.5,
            47.5
        ],
        "area": 86600,
        "population": 10110116,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/az.png",
            "svg": "https://flagcdn.com/az.svg"
        },
        "capitalInfo": {
            "latlng": [
                40.38,
                49.87
            ]
        },
    },

    {
        "name": {
            "common": "Zambia",
            "official": "Republic of Zambia",
        },
        "currencies": {
            "ZMW": {
                "name": "Zambian kwacha",
                "symbol": "ZK"
            }
        },
        "capital": "Lusaka",
        "latlng": [
            -15,
            30
        ],
        "area": 752612,
        "population": 18383956,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/zm.png",
            "svg": "https://flagcdn.com/zm.svg"
        },
        "capitalInfo": {
            "latlng": [
                -15.42,
                28.28
            ]
        }
    },

    {
        "name": {
            "common": "Kenya",
            "official": "Republic of Kenya",
        },
        "currencies": {
            "KES": {
                "name": "Kenyan shilling",
                "symbol": "Sh"
            }
        },
        "capital": "Nairobi",
        "latlng": [
            1,
            38
        ],
        "area": 580367,
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
        }
    },

    {
        "name": {
            "common": "Kuwait",
        },
        "currencies": {
            "KWD": {
                "name": "Kuwaiti dinar",
                "symbol": "د.ك"
            }
        },
        "capital": "Kuwait City",
        "latlng": [
            29.5,
            45.75
        ],
        "area": 17818,
        "population": 4270563,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/kw.png",
            "svg": "https://flagcdn.com/kw.svg"
        },
        "capitalInfo": {
            "latlng": [
                29.37,
                47.97
            ]
        }
    },

    {
        "name": {
            "common": "Kazakhstan",
            "official": "Republic of Kazakhstan",
        },
        "currencies": {
            "KZT": {
                "name": "Kazakhstani tenge",
                "symbol": "₸"
            }
        },
        "latlng": [
            48,
            68
        ],
        "area": 2724900,
        "population": 18754440,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/kz.png",
            "svg": "https://flagcdn.com/kz.svg"
        },
        "capitalInfo": {
            "latlng": [
                51.16,
                71.45
            ]
        }
    },

    {
        "name": {
            "common": "Latvia",
            "official": "Republic of Latvia",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Riga",
        "latlng": [
            57,
            25
        ],
        "area": 64559,
        "population": 1901548,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/lv.png",
            "svg": "https://flagcdn.com/lv.svg"
        },
        "capitalInfo": {
            "latlng": [
                56.95,
                24.1
            ]
        }
    },

    {
        "name": {
            "common": "Sierra Leone",
        },
        "currencies": {
            "SLL": {
                "name": "Sierra Leonean leone",
                "symbol": "Le"
            }
        },
        "capital": "Freetown",
        "latlng": [
            8.5,
            -11.5
        ],
        "area": 71740,
        "population": 7976985,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/sl.png",
            "svg": "https://flagcdn.com/sl.svg"
        },
        "capitalInfo": {
            "latlng": [
                8.48,
                -13.23
            ]
        }
    },

    {
        "name": {
            "common": "Saint Kitts and Nevis",
        },
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "capital": "Basseterre",
        "latlng": [
            17.33333333,
            -62.75
        ],
        "area": 261,
        "population": 53192,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/kn.png",
            "svg": "https://flagcdn.com/kn.svg"
        },
        "capitalInfo": {
            "latlng": [
                17.3,
                -62.72
            ]
        }
    },

    {
        "name": {
            "common": "Belize",
            "official": "Belize",
        },
        "currencies": {
            "BZD": {
                "name": "Belize dollar",
                "symbol": "$"
            }
        },
        "capital": "Belmopan",
        "latlng": [
            17.25,
            -88.75
        ],
        "area": 22966,
        "population": 397621,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/bz.png",
            "svg": "https://flagcdn.com/bz.svg"
        },
        "capitalInfo": {
            "latlng": [
                17.25,
                -88.77
            ]
        }
    },

    {
        "name": {
            "common": "Martinique",
            "official": "Martinique",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Fort-de-France",
        "latlng": [
            14.666667,
            -61
        ],
        "area": 1128,
        "population": 378243,
        "continents": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/mq.png",
            "svg": "https://flagcdn.com/mq.svg"
        },
        "capitalInfo": {
            "latlng": [
                14.6,
                -61.08
            ]
        }
    },

    {
        "name": {
            "common": "Romania",
            "official": "Romania",
        },
        "currencies": {
            "RON": {
                "name": "Romanian leu",
                "symbol": "lei"
            }
        },
        "capital": "Bucharest",
        "latlng": [
            46,
            25
        ],
        "area": 238391,
        "population": 19286123,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ro.png",
            "svg": "https://flagcdn.com/ro.svg"
        },
        "capitalInfo": {
            "latlng": [
                44.43,
                26.1
            ]
        }
    },

    {
        "name": {
            "common": "British Virgin Islands",
            "official": "Virgin Islands",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Road Town",
        "latlng": [
            18.431383,
            -64.62305
        ],
        "area": 151,
        "population": 30237,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/vg.png",
            "svg": "https://flagcdn.com/vg.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.42,
                -64.62
            ]
        }
    },

    {
        "name": {
            "common": "New Zealand",
            "official": "New Zealand",
        },
        "currencies": {
            "NZD": {
                "name": "New Zealand dollar",
                "symbol": "$"
            }
        },
        "capital": "Wellington",
        "latlng": [
            -41,
            174
        ],
        "area": 270467,
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
            "common": "Brazil",
            "official": "Federative Republic of Brazil",
        },
        "currencies": {
            "BRL": {
                "name": "Brazilian real",
                "symbol": "R$"
            }
        },
        "capital": "Brasília",
        "latlng": [
            -10,
            -55
        ],
        "area": 8515767,
        "population": 212559409,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/br.png",
            "svg": "https://flagcdn.com/br.svg"
        },
        "capitalInfo": {
            "latlng": [
                -15.79,
                -47.88
            ]
        }
    },

    {
        "name": {
            "common": "Central African Republic",
            "official": "Central African Republic",
        },
        "currencies": {
            "XAF": {
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Bangui",
        "latlng": [
            7,
            21
        ],
        "area": 622984,
        "population": 4829764,
        "continents": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/cf.png",
            "svg": "https://flagcdn.com/cf.svg"
        },
        "capitalInfo": {
            "latlng": [
                4.37,
                18.58
            ]
        }
    },

    {
        "name": {
            "common": "Marshall Islands",
            "official": "Republic of the Marshall Islands",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Majuro",
        "latlng": [
            9,
            168
        ],
        "area": 181,
        "population": 59194,
        "continents": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/mh.png",
            "svg": "https://flagcdn.com/mh.svg"
        },
        "capitalInfo": {
            "latlng": [
                7.1,
                171.38
            ]
        }
    },

    {
        "name": {
            "common": "French Southern and Antarctic Lands",
            "official": "Territory of the French Southern and Antarctic Lands",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Port-aux-Français",
        "latlng": [
            -49.25,
            69.167
        ],
        "population": 400,
        "continent": "Antarctica",
        "flags": {
            "png": "https://flagcdn.com/w320/tf.png",
            "svg": "https://flagcdn.com/tf.svg"
        },
        "capitalInfo": {
            "latlng": [
                48.81,
                -1.4
            ]
        }
    },

    {
        "name": {
            "common": "Wallis and Futuna",
            "official": "Territory of the Wallis and Futuna Islands",
        },
        "currencies": {
            "XPF": {
                "name": "CFP franc",
                "symbol": "₣"
            }
        },
        "capital": "Mata-Utu",
        "latlng": [
            -13.3,
            -176.2
        ],
        "area": 142,
        "population": 11750,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/wf.png",
            "svg": "https://flagcdn.com/wf.svg"
        },
        "capitalInfo": {
            "latlng": [
                -13.95,
                -171.93
            ]
        }
    },

    {
        "name": {
            "common": "Russia",
            "official": "Russian Federation",
        },
        "currencies": {
            "RUB": {
                "name": "Russian ruble",
                "symbol": "₽"
            }
        },
        "capital": "Moscow",
        "latlng": [
            60,
            100
        ],
        "area": 17098242,
        "population": 144104080,
        "gini": {
            "2018": 37.5
        },
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ru.png",
            "svg": "https://flagcdn.com/ru.svg"
        },
        "capitalInfo": {
            "latlng": [
                55.75,
                37.6
            ]
        },
    },

    {
        "name": {
            "common": "Panama",
            "official": "Republic of Panama",
        },
        "currencies": {
            "PAB": {
                "name": "Panamanian balboa",
                "symbol": "B/."
            },
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Panama City",
        "latlng": [
            9,
            -80
        ],
        "area": 75417,
        "population": 4314768,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/pa.png",
            "svg": "https://flagcdn.com/pa.svg"
        },
        "capitalInfo": {
            "latlng": [
                8.97,
                -79.53
            ]
        }
    },

    {
        "name": {
            "common": "Brunei",
            "official": "Nation of Brunei, Abode of Peace",
        },
        "currencies": {
            "BND": {
                "name": "Brunei dollar",
                "symbol": "$"
            },
            "SGD": {
                "name": "Singapore dollar",
                "symbol": "$"
            }
        },
        "capital": "Bandar Seri Begawan",
        "latlng": [
            4.5,
            114.66666666
        ],
        "area": 5765,
        "population": 437483,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/bn.png",
            "svg": "https://flagcdn.com/bn.svg"
        },
        "capitalInfo": {
            "latlng": [
                4.88,
                114.93
            ]
        },
    },

    {
        "name": {
            "common": "Gibraltar",
            "official": "Gibraltar",
        },
        "currencies": {
            "GIP": {
                "name": "Gibraltar pound",
                "symbol": "£"
            }
        },
        "capital": "Gibraltar",
        "latlng": [
            36.13333333,
            -5.35
        ],
        "area": 6,
        "population": 33691,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/gi.png",
            "svg": "https://flagcdn.com/gi.svg"
        },
        "capitalInfo": {
            "latlng": [
                36.13,
                -5.35
            ]
        }
    },

    {
        "name": {
            "common": "Malaysia",
            "official": "Malaysia",
        },
        "currencies": {
            "MYR": {
                "name": "Malaysian ringgit",
                "symbol": "RM"
            }
        },
        "capital": "Kuala Lumpur",
        "latlng": [
            2.5,
            112.5
        ],
        "area": 330803,
        "population": 32365998,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/my.png",
            "svg": "https://flagcdn.com/my.svg"
        },
        "capitalInfo": {
            "latlng": [
                3.17,
                101.7
            ]
        },
    },

    {
        "name": {
            "common": "Ecuador",
            "official": "Republic of Ecuador",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Quito",
        "latlng": [
            -2,
            -77.5
        ],
        "area": 276841,
        "population": 17643060,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/ec.png",
            "svg": "https://flagcdn.com/ec.svg"
        },
        "capitalInfo": {
            "latlng": [
                -0.22,
                -78.5
            ]
        }
    },

    {
        "name": {
            "common": "Morocco",
            "official": "Kingdom of Morocco",
        },
        "currencies": {
            "MAD": {
                "name": "Moroccan dirham",
                "symbol": "د.م."
            }
        },
        "capital": "Rabat",
        "latlng": [
            32,
            -5
        ],
        "area": 446550,
        "population": 36910558,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ma.png",
            "svg": "https://flagcdn.com/ma.svg"
        },
        "capitalInfo": {
            "latlng": [
                34.02,
                -6.82
            ]
        }
    },

    {
        "name": {
            "common": "Saint Vincent and the Grenadines",
            "official": "Saint Vincent and the Grenadines",
        },
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "capital": "Kingstown",
        "latlng": [
            13.25,
            -61.2
        ],
        "area": 389,
        "population": 110947,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/vc.png",
            "svg": "https://flagcdn.com/vc.svg"
        },
        "capitalInfo": {
            "latlng": [
                13.13,
                -61.22
            ]
        }
    },

    {
        "name": {
            "common": "Cuba",
            "official": "Republic of Cuba",
        },
        "currencies": {
            "CUC": {
                "name": "Cuban convertible peso",
                "symbol": "$"
            },
            "CUP": {
                "name": "Cuban peso",
                "symbol": "$"
            }
        },
        "capital": "Havana",
        "latlng": [
            21.5,
            -80
        ],
        "area": 109884,
        "population": 11326616,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/cu.png",
            "svg": "https://flagcdn.com/cu.svg"
        },
        "capitalInfo": {
            "latlng": [
                23.12,
                -82.35
            ]
        }
    },

    {
        "name": {
            "common": "Liechtenstein",
            "official": "Principality of Liechtenstein",
        },
        "currencies": {
            "CHF": {
                "name": "Swiss franc",
                "symbol": "Fr"
            }
        },
        "capital": "Vaduz",
        "latlng": [
            47.26666666,
            9.53333333
        ],
        "area": 160,
        "population": 38137,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/li.png",
            "svg": "https://flagcdn.com/li.svg"
        },
        "capitalInfo": {
            "latlng": [
                47.13,
                9.52
            ]
        }
    },

    {
        "name": {
            "common": "Bahamas",
            "official": "Commonwealth of the Bahamas",
        },
        "currencies": {
            "BSD": {
                "name": "Bahamian dollar",
                "symbol": "$"
            },
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Nassau",
        "latlng": [
            24.25,
            -76
        ],
        "area": 13943,
        "population": 393248,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/bs.png",
            "svg": "https://flagcdn.com/bs.svg"
        },
        "capitalInfo": {
            "latlng": [
                25.08,
                -77.35
            ]
        }
    },

    {
        "name": {
            "common": "Canada",
            "official": "Canada",
        },
        "currencies": {
            "CAD": {
                "name": "Canadian dollar",
                "symbol": "$"
            }
        },
        "capital": "Ottawa",
        "latlng": [
            60,
            -95
        ],
        "area": 9984670,
        "population": 38005238,
        "continents": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/ca.png",
            "svg": "https://flagcdn.com/ca.svg"
        },
        "capitalInfo": {
            "latlng": [
                45.42,
                -75.7
            ]
        }
    },

    {
        "name": {
            "common": "Fiji",
            "official": "Republic of Fiji",
        },
        "currencies": {
            "FJD": {
                "name": "Fijian dollar",
                "symbol": "$"
            }
        },
        "capital": "Suva",
        "latlng": [
            -18,
            175
        ],
        "area": 18272,
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
            "common": "Saudi Arabia",
            "official": "Kingdom of Saudi Arabia",
        },
        "currencies": {
            "SAR": {
                "name": "Saudi riyal",
                "symbol": "ر.س"
            }
        },
        "capital": "Riyadh",
        "latlng": [
            25,
            45
        ],
        "area": 2149690,
        "population": 34813867,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/sa.png",
            "svg": "https://flagcdn.com/sa.svg"
        },
        "capitalInfo": {
            "latlng": [
                24.65,
                46.7
            ]
        }
    },

    {
        "name": {
            "common": "Cayman Islands",
            "official": "Cayman Islands",
        },
        "currencies": {
            "KYD": {
                "name": "Cayman Islands dollar",
                "symbol": "$"
            }
        },
        "capital": "George Town",
        "latlng": [
            19.5,
            -80.5
        ],
        "area": 264,
        "population": 65720,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/ky.png",
            "svg": "https://flagcdn.com/ky.svg"
        },
        "capitalInfo": {
            "latlng": [
                19.3,
                -81.38
            ]
        }
    },

    {
        "name": {
            "common": "Lithuania",
            "official": "Republic of Lithuania",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Vilnius",
        "latlng": [
            56,
            24
        ],
        "area": 65300,
        "population": 2794700,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/lt.png",
            "svg": "https://flagcdn.com/lt.svg"
        },
        "capitalInfo": {
            "latlng": [
                54.68,
                25.32
            ]
        }
    },

    {
        "name": {
            "common": "Caribbean Netherlands",
            "official": "Bonaire, Sint Eustatius and Saba",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Kralendijk",
        "latlng": [
            12.18,
            -68.25
        ],
        "area": 328,
        "population": 25987,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/bq.png",
            "svg": "https://flagcdn.com/bq.svg"
        },
        "capitalInfo": {
            "latlng": [
                12.14,
                -68.27
            ]
        }
    },

    {
        "name": {
            "common": "Ireland",
            "official": "Republic of Ireland",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Dublin",
        "latlng": [
            53,
            -8
        ],
        "area": 70273,
        "population": 4994724,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ie.png",
            "svg": "https://flagcdn.com/ie.svg"
        },
        "capitalInfo": {
            "latlng": [
                53.32,
                -6.23
            ]
        }
    },

    {
        "name": {
            "common": "Chile",
        },
        "currencies": {
            "CLP": {
                "name": "Chilean peso",
                "symbol": "$"
            }
        },
        "capital": "Santiago",
        "latlng": [
            -30,
            -71
        ],
        "area": 756102,
        "population": 19116209,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/cl.png",
            "svg": "https://flagcdn.com/cl.svg"
        },
        "capitalInfo": {
            "latlng": [
                -33.45,
                -70.67
            ]
        }
    },

    {
        "name": {
            "common": "Turkmenistan",
        },
        "currencies": {
            "TMT": {
                "name": "Turkmenistan manat",
                "symbol": "m"
            }
        },
        "capital": "Ashgabat",
        "latlng": [
            40,
            60
        ],
        "area": 488100,
        "population": 6031187,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/tm.png",
            "svg": "https://flagcdn.com/tm.svg"
        },
        "capitalInfo": {
            "latlng": [
                37.95,
                58.38
            ]
        }
    },

    {
        "name": {
            "common": "Myanmar",
            "official": "Republic of the Union of Myanmar",
        },
        "currencies": {
            "MMK": {
                "name": "Burmese kyat",
                "symbol": "Ks"
            }
        },
        "capital": "Naypyidaw",
        "latlng": [
            22,
            98
        ],
        "area": 676578,
        "population": 54409794,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/mm.png",
            "svg": "https://flagcdn.com/mm.svg"
        },
        "capitalInfo": {
            "latlng": [
                19.76,
                96.07
            ]
        }
    },

    {
        "name": {
            "common": "Yemen",
            "official": "Republic of Yemen",
        },
        "currencies": {
            "YER": {
                "name": "Yemeni rial",
                "symbol": "﷼"
            }
        },
        "capital": "Sana'a",
        "latlng": [
            15,
            48
        ],
        "area": 527968,
        "population": 29825968,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/ye.png",
            "svg": "https://flagcdn.com/ye.svg"
        },
        "capitalInfo": {
            "latlng": [
                15.37,
                44.19
            ]
        }
    },

    {
        "name": {
            "common": "Saint Helena, Ascension and Tristan da Cunha",
            "official": "Saint Helena, Ascension and Tristan da Cunha",
        },
        "currencies": {
            "GBP": {
                "name": "Pound sterling",
                "symbol": "£"
            }
        },
        "capital": "Jamestown",
        "latlng": [
            -15.95,
            -5.72
        ],
        "area": 394,
        "population": 53192,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/sh.png",
            "svg": "https://flagcdn.com/sh.svg"
        },
        "capitalInfo": {
            "latlng": [
                -15.93,
                -5.72
            ]
        }
    },

    {
        "name": {
            "common": "São Tomé and Príncipe",
            "official": "Democratic Republic of São Tomé and Príncipe",
        },
        "currencies": {
            "STN": {
                "name": "São Tomé and Príncipe dobra",
                "symbol": "Db"
            }
        },
        "capital": "São Tomé",
        "latlng": [
            1,
            7
        ],
        "area": 964,
        "population": 219161,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/st.png",
            "svg": "https://flagcdn.com/st.svg"
        },
        "capitalInfo": {
            "latlng": [
                0.34,
                6.73
            ]
        }
    },

    {
        "name": {
            "common": "Guatemala",
            "official": "Republic of Guatemala",
        },
        "currencies": {
            "GTQ": {
                "name": "Guatemalan quetzal",
                "symbol": "Q"
            }
        },
        "capital": "Guatemala City",
        "latlng": [
            15.5,
            -90.25
        ],
        "area": 108889,
        "population": 16858333,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/gt.png",
            "svg": "https://flagcdn.com/gt.svg"
        },
        "capitalInfo": {
            "latlng": [
                14.62,
                -90.52
            ]
        }
    },

    {
        "name": {
            "common": "Singapore",
            "official": "Republic of Singapore",
        },
        "currencies": {
            "SGD": {
                "name": "Singapore dollar",
                "symbol": "$"
            }
        },
        "capital": "Singapore",
        "latlng": [
            1.36666666,
            103.8
        ],
        "area": 710,
        "population": 5685807,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/sg.png",
            "svg": "https://flagcdn.com/sg.svg"
        },
        "capitalInfo": {
            "latlng": [
                1.28,
                103.85
            ]
        }
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
        "capital": "Caracas",
        "latlng": [
            8,
            -66
        ],
        "area": 916445,
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
            "common": "Comoros",
            "official": "Union of the Comoros",
        },
        "currencies": {
            "KMF": {
                "name": "Comorian franc",
                "symbol": "Fr"
            }
        },
        "capital": "Moroni",
        "latlng": [
            -12.16666666,
            44.25
        ],
        "area": 1862,
        "population": 869595,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/km.png",
            "svg": "https://flagcdn.com/km.svg"
        },
        "capitalInfo": {
            "latlng": [
                -11.7,
                43.23
            ]
        }
    },

    {
        "name": {
            "common": "Western Sahara",
            "official": "Sahrawi Arab Democratic Republic",
        },
        "currencies": {
            "DZD": {
                "name": "Algerian dinar",
                "symbol": "دج"
            },
            "MAD": {
                "name": "Moroccan dirham",
                "symbol": "DH"
            },
            "MRU": {
                "name": "Mauritanian ouguiya",
                "symbol": "UM"
            }
        },
        "capital": "El Aaiún",
        "latlng": [
            24.5,
            -13
        ],
        "area": 266000,
        "population": 510713,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/eh.png",
            "svg": "https://flagcdn.com/eh.svg"
        },
        "capitalInfo": {
            "latlng": [
                -13.28,
                27.14
            ]
        }
    },

    {
        "name": {
            "common": "Namibia",
            "official": "Republic of Namibia",
        },
        "currencies": {
            "NAD": {
                "name": "Namibian dollar",
                "symbol": "$"
            },
            "ZAR": {
                "name": "South African rand",
                "symbol": "R"
            }
        },
        "capital": "Windhoek",
        "latlng": [
            -22,
            17
        ],
        "area": 825615,
        "population": 2540916,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/na.png",
            "svg": "https://flagcdn.com/na.svg"
        },
        "capitalInfo": {
            "latlng": [
                -22.57,
                17.08
            ]
        }
    },

    {
        "name": {
            "common": "Timor-Leste",
            "official": "Democratic Republic of Timor-Leste",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Dili",
        "latlng": [
            -8.83333333,
            125.91666666
        ],
        "area": 14874,
        "population": 1318442,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/tl.png",
            "svg": "https://flagcdn.com/tl.svg"
        },
        "capitalInfo": {
            "latlng": [
                -8.58,
                125.6
            ]
        }
    },

    {
        "name": {
            "common": "Bosnia and Herzegovina",
            "official": "Bosnia and Herzegovina",
        },
        "currencies": {
            "BAM": {
                "name": "Bosnia and Herzegovina convertible mark"
            }
        },
        "capital": "Sarajevo",
        "latlng": [
            44,
            18
        ],
        "area": 51209,
        "population": 3280815,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ba.png",
            "svg": "https://flagcdn.com/ba.svg"
        },
        "capitalInfo": {
            "latlng": [
                43.87,
                18.42
            ]
        }
    },

    {
        "name": {
            "common": "Cape Verde",
            "official": "Republic of Cabo Verde",
        },
        "currencies": {
            "CVE": {
                "name": "Cape Verdean escudo",
                "symbol": "Esc"
            }
        },
        "capital": "Praia",
        "latlng": [
            16,
            -24
        ],
        "area": 4033,
        "population": 555988,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/cv.png",
            "svg": "https://flagcdn.com/cv.svg"
        },
        "capitalInfo": {
            "latlng": [
                14.92,
                -23.52
            ]
        }
    },

    {
        "name": {
            "common": "Hong Kong",
            "official": "Hong Kong Special Administrative Region of the People's Republic of China",
        },
        "currencies": {
            "HKD": {
                "name": "Hong Kong dollar",
                "symbol": "$"
            }
        },
        "capital": "City of Victoria",
        "latlng": [
            22.267,
            114.188
        ],
        "area": 1104,
        "population": 7500700,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/hk.png",
            "svg": "https://flagcdn.com/hk.svg"
        },
        "capitalInfo": {
            "latlng": [
                48.41,
                -123.33
            ]
        }
    },

    {
        "name": {
            "common": "Moldova",
            "official": "Republic of Moldova",
        },
        "currencies": {
            "MDL": {
                "name": "Moldovan leu",
                "symbol": "L"
            }
        },
        "latlng": [
            47,
            29
        ],
        "area": 33846,
        "population": 2617820,
        "continents": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/md.png",
            "svg": "https://flagcdn.com/md.svg"
        },
        "capitalInfo": {
            "latlng": [
                47.01,
                28.9
            ]
        }
    },

    {
        "name": {
            "common": "Philippines",
            "official": "Republic of the Philippines",
        },
        "currencies": {
            "PHP": {
                "name": "Philippine peso",
                "symbol": "₱"
            }
        },
        "capital": "Manila",
        "latlng": [
            13,
            122
        ],
        "area": 342353,
        "population": 109581085,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/ph.png",
            "svg": "https://flagcdn.com/ph.svg"
        },
        "capitalInfo": {
            "latlng": [
                14.6,
                120.97
            ]
        }
    },

    {
        "name": {
            "common": "Guadeloupe",
            "official": "Guadeloupe",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Basse-Terre",
        "latlng": [
            16.25,
            -61.583333
        ],
        "area": 1628,
        "population": 400132,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/gp.png",
            "svg": "https://flagcdn.com/gp.svg"
        },
        "capitalInfo": {
            "latlng": [
                16.03,
                -61.73
            ]
        }
    },

    {
        "name": {
            "common": "Zimbabwe",
            "official": "Republic of Zimbabwe",
        },
        "currencies": {
            "ZWL": {
                "name": "Zimbabwean dollar",
                "symbol": "$"
            }
        },
        "capital": "Harare",
        "latlng": [
            -20,
            30
        ],
        "area": 390757,
        "population": 14862927,
        "flags": {
            "png": "https://flagcdn.com/w320/zw.png",
            "svg": "https://flagcdn.com/zw.svg"
        },
        "capitalInfo": {
            "latlng": [
                -17.82,
                31.03
            ]
        }
    },

    {
        "name": {
            "common": "Grenada",
            "official": "Grenada",
        },
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "capital": "St. George's",
        "latlng": [
            12.11666666,
            -61.66666666
        ],
        "area": 344,
        "population": 112519,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/gd.png",
            "svg": "https://flagcdn.com/gd.svg"
        },
        "capitalInfo": {
            "latlng": [
                32.38,
                -64.68
            ]
        }
    },

    {
        "name": {
            "common": "Isle of Man",
            "official": "Isle of Man",
        },
        "currencies": {
            "GBP": {
                "name": "British pound",
                "symbol": "£"
            },
            "IMP": {
                "name": "Manx pound",
                "symbol": "£"
            }
        },
        "capital": "Douglas",
        "latlng": [
            54.25,
            -4.5
        ],
        "area": 572,
        "population": 85032,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/im.png",
            "svg": "https://flagcdn.com/im.svg"
        },
        "capitalInfo": {
            "latlng": [
                54.15,
                -4.48
            ]
        }
    },

    {
        "name": {
            "common": "Tanzania",
            "official": "United Republic of Tanzania",
        },
        "currencies": {
            "TZS": {
                "name": "Tanzanian shilling",
                "symbol": "Sh"
            }
        },
        "capital": "Dodoma",
        "latlng": [
            -6,
            35
        ],
        "area": 945087,
        "population": 59734213,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/tz.png",
            "svg": "https://flagcdn.com/tz.svg"
        },
        "capitalInfo": {
            "latlng": [
                -6.16,
                35.75
            ]
        }
    },

    {
        "name": {
            "common": "Seychelles",
            "official": "Republic of Seychelles",
        },
        "currencies": {
            "SCR": {
                "name": "Seychellois rupee",
                "symbol": "₨"
            }
        },
        "capital": "Victoria",
        "latlng": [
            -4.58333333,
            55.66666666
        ],
        "area": 452,
        "population": 98462,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/sc.png",
            "svg": "https://flagcdn.com/sc.svg"
        },
        "capitalInfo": {
            "latlng": [
                -4.62,
                55.45
            ]
        }
    },

    {
        "name": {
            "common": "Netherlands",
            "official": "Kingdom of the Netherlands",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Amsterdam",
        "latlng": [
            52.5,
            5.75
        ],
        "area": 41850,
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
            "common": "Paraguay",
            "official": "Republic of Paraguay",
        },
        "currencies": {
            "PYG": {
                "name": "Paraguayan guaraní",
                "symbol": "₲"
            }
        },
        "capital": "Asunción",
        "latlng": [
            -23,
            -58
        ],
        "area": 406752,
        "population": 7132530,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/py.png",
            "svg": "https://flagcdn.com/py.svg"
        },
        "capitalInfo": {
            "latlng": [
                -25.28,
                -57.57
            ]
        }
    },

    {
        "name": {
            "common": "San Marino",
            "official": "Republic of San Marino",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "City of San Marino",
        "latlng": [
            43.76666666,
            12.41666666
        ],
        "area": 61,
        "population": 33938,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/sm.png",
            "svg": "https://flagcdn.com/sm.svg"
        },
        "capitalInfo": {
            "latlng": [
                43.94,
                12.45
            ]
        }
    },

    {
        "name": {
            "common": "Bulgaria",
            "official": "Republic of Bulgaria",
        },
        "currencies": {
            "BGN": {
                "name": "Bulgarian lev",
                "symbol": "лв"
            }
        },
        "capital": "Sofia",
        "latlng": [
            43,
            25
        ],
        "area": 110879,
        "population": 6927288,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/bg.png",
            "svg": "https://flagcdn.com/bg.svg"
        },
        "capitalInfo": {
            "latlng": [
                42.68,
                23.32
            ]
        }
    },

    {
        "name": {
            "common": "United States Virgin Islands",
            "official": "Virgin Islands of the United States",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Charlotte Amalie",
        "latlng": [
            18.35,
            -64.933333
        ],
        "area": 347,
        "population": 106290,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/vi.png",
            "svg": "https://flagcdn.com/vi.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.35,
                -64.93
            ]
        }
    },

    {
        "name": {
            "common": "Tunisia",
            "official": "Tunisian Republic",
        },
        "currencies": {
            "TND": {
                "name": "Tunisian dinar",
                "symbol": "د.ت"
            }
        },
        "capital": "Tunis",
        "latlng": [
            34,
            9
        ],
        "area": 163610,
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
            "common": "Iceland",
            "official": "Iceland",
        },
        "currencies": {
            "ISK": {
                "name": "Icelandic króna",
                "symbol": "kr"
            }
        },
        "capital": "Reykjavik",
        "latlng": [
            65,
            -18
        ],
        "area": 103000,
        "population": 366425,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/is.png",
            "svg": "https://flagcdn.com/is.svg"
        },
        "capitalInfo": {
            "latlng": [
                64.15,
                -21.95
            ]
        }
    },

    {
        "name": {
            "common": "DR Congo",
            "official": "Democratic Republic of the Congo",
        },
        "currencies": {
            "CDF": {
                "name": "Congolese franc",
                "symbol": "FC"
            }
        },
        "capital": "Kinshasa",
        "latlng": [
            0,
            25
        ],
        "area": 2344858,
        "population": 108407721,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/cd.png",
            "svg": "https://flagcdn.com/cd.svg"
        },
        "capitalInfo": {
            "latlng": [
                -4.32,
                15.3
            ]
        }
    },

    {
        "name": {
            "common": "Aruba",
            "official": "Aruba",
        },
        "currencies": {
            "AWG": {
                "name": "Aruban florin",
                "symbol": "ƒ"
            }
        },
        "capital": "Oranjestad",
        "latlng": [
            12.5,
            -69.96666666
        ],
        "area": 180,
        "population": 106766,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/aw.png",
            "svg": "https://flagcdn.com/aw.svg"
        },
        "capitalInfo": {
            "latlng": [
                12.52,
                -70.03
            ]
        }
    },

    {
        "name": {
            "common": "Indonesia",
            "official": "Republic of Indonesia",
        },
        "currencies": {
            "IDR": {
                "name": "Indonesian rupiah",
                "symbol": "Rp"
            }
        },
        "capital": "Jakarta",
        "latlng": [
            -5,
            120
        ],
        "area": 1904569,
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
            "common": "El Salvador",
            "official": "Republic of El Salvador",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "San Salvador",
        "latlng": [
            13.83333333,
            -88.91666666
        ],
        "area": 21041,
        "population": 6486201,
        "continents": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/sv.png",
            "svg": "https://flagcdn.com/sv.svg"
        },
        "capitalInfo": {
            "latlng": [
                13.7,
                -89.2
            ]
        }
    },

    {
        "name": {
            "common": "Slovakia",
            "official": "Slovak Republic",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Bratislava",
        "latlng": [
            48.66666666,
            19.5
        ],
        "area": 49037,
        "population": 5458827,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/sk.png",
            "svg": "https://flagcdn.com/sk.svg"
        },
        "capitalInfo": {
            "latlng": [
                48.15,
                17.12
            ]
        }
    },

    {
        "name": {
            "common": "Sweden",
            "official": "Kingdom of Sweden",
        },
        "currencies": {
            "SEK": {
                "name": "Swedish krona",
                "symbol": "kr"
            }
        },
        "capital": "Stockholm",
        "latlng": [
            62,
            15
        ],
        "area": 450295,
        "population": 10353442,
        "continents": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/se.png",
            "svg": "https://flagcdn.com/se.svg"
        },
        "capitalInfo": {
            "latlng": [
                59.33,
                18.05
            ]
        }
    },

    {
        "name": {
            "common": "Laos",
            "official": "Lao People's Democratic Republic",
        },
        "currencies": {
            "LAK": {
                "name": "Lao kip",
                "symbol": "₭"
            }
        },
        "capital": "Vientiane",
        "latlng": [
            18,
            105
        ],
        "area": 236800,
        "population": 7275556,
        "continents": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/la.png",
            "svg": "https://flagcdn.com/la.svg"
        },
        "capitalInfo": {
            "latlng": [
                17.97,
                102.6
            ]
        }
    },

    {
        "name": {
            "common": "Gambia",
            "official": "Republic of the Gambia",
        },
        "currencies": {
            "GMD": {
                "name": "dalasi",
                "symbol": "D"
            }
        },
        "capital": "Banjul",
        "latlng": [
            13.46666666,
            -16.56666666
        ],
        "area": 10689,
        "population": 2416664,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/gm.png",
            "svg": "https://flagcdn.com/gm.svg"
        },
        "capitalInfo": {
            "latlng": [
                13.45,
                -16.57
            ]
        }
    },

    {
        "name": {
            "common": "Israel",
            "official": "State of Israel"
        },
        "currencies": {
            "ILS": {
                "name": "Israeli new shekel",
                "symbol": "₪"
            }
        },
        "capital": "Jerusalem",
        "latlng": [
            31.47,
            35.13
        ],
        "area": 20770,
        "population": 9216900,
        "continents": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/il.png",
            "svg": "https://flagcdn.com/il.svg"
        },
        "capitalInfo": {
            "latlng": [
                31.77,
                35.23
            ]
        }
    },

    {
        "name": {
            "common": "Svalbard and Jan Mayen",
            "official": "Svalbard og Jan Mayen",
        },
        "currencies": {
            "NOK": {
                "name": "krone",
                "symbol": "kr"
            }
        },
        "capital": "Longyearbyen",
        "latlng": [
            78,
            20
        ],
        "area": -1,
        "population": 2562,
        "continents": [
            "Europe"
        ],
        "flags": {
            "png": "https://flagcdn.com/w320/sj.png",
            "svg": "https://flagcdn.com/sj.svg"
        },
        "capitalInfo": {
            "latlng": [
                78.22,
                15.63
            ]
        }
    },

    {
        "name": {
            "common": "Montenegro",
            "official": "Montenegro",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Podgorica",
        "latlng": [
            42.5,
            19.3
        ],
        "area": 13812,
        "population": 621718,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/me.png",
            "svg": "https://flagcdn.com/me.svg"
        },
        "capitalInfo": {
            "latlng": [
                42.43,
                19.27
            ]
        }
    },

    {
        "name": {
            "common": "Somalia",
            "official": "Federal Republic of Somalia",
            "img": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Somalia_sm_2011.gif"
        },
        "currencies": {
            "SOS": {
                "name": "Somali shilling",
                "symbol": "Sh"
            }
        },
        "capital": "Mogadishu",
        "latlng": [
            10,
            49
        ],
        "area": 637657,
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
            "common": "Réunion",
            "official": "Réunion Island",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Saint-Denis",
        "latlng": [
            -21.15,
            55.5
        ],
        "area": 2511,
        "population": 840974,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/re.png",
            "svg": "https://flagcdn.com/re.svg"
        },
        "capitalInfo": {
            "latlng": [
                -20.88,
                55.45
            ]
        }
    },

    {
        "name": {
            "common": "Sri Lanka",
            "official": "Democratic Socialist Republic of Sri Lanka",
        },
        "currencies": {
            "LKR": {
                "name": "Sri Lankan rupee",
                "symbol": "Rs  රු"
            }
        },
        "capital": "Sri Jayawardenepura Kotte",
        "latlng": [
            7,
            81
        ],
        "area": 65610,
        "population": 21919000,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/lk.png",
            "svg": "https://flagcdn.com/lk.svg"
        },
        "capitalInfo": {
            "latlng": [
                6.89,
                79.9
            ]
        }
    },

    {
        "name": {
            "common": "Germany",
            "official": "Federal Republic of Germany",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Berlin",
        "latlng": [
            51,
            9
        ],
        "area": 357114,
        "population": 83240525,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/de.png",
            "svg": "https://flagcdn.com/de.svg"
        },
        "capitalInfo": {
            "latlng": [
                52.52,
                13.4
            ]
        }
    },

    {
        "name": {
            "common": "Serbia",
            "official": "Republic of Serbia",
        },
        "currencies": {
            "RSD": {
                "name": "Serbian dinar",
                "symbol": "дин."
            }
        },
        "capital": "Belgrade",
        "latlng": [
            44,
            21
        ],
        "area": 88361,
        "population": 6908224,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/rs.png",
            "svg": "https://flagcdn.com/rs.svg"
        },
        "capitalInfo": {
            "latlng": [
                44.83,
                20.5
            ]
        }
    },

    {
        "name": {
            "common": "Guyana",
            "official": "Co-operative Republic of Guyana",
        },
        "currencies": {
            "GYD": {
                "name": "Guyanese dollar",
                "symbol": "$"
            }
        },
        "capital": "Georgetown",
        "latlng": [
            5,
            -59
        ],
        "area": 214969,
        "population": 786559,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/gy.png",
            "svg": "https://flagcdn.com/gy.svg"
        },
        "capitalInfo": {
            "latlng": [
                6.8,
                -58.15
            ]
        }
    },

    {
        "name": {
            "common": "Suriname",
            "official": "Republic of Suriname",
        },
        "currencies": {
            "SRD": {
                "name": "Surinamese dollar",
                "symbol": "$"
            }
        },
        "capital": "Paramaribo",
        "latlng": [
            4,
            -56
        ],
        "area": 163820,
        "population": 586634,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/sr.png",
            "svg": "https://flagcdn.com/sr.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                5.83,
                -55.17
            ]
        }
    },

    {
        "name": {
            "common": "Lesotho",
            "official": "Kingdom of Lesotho",
        },
        "currencies": {
            "LSL": {
                "name": "Lesotho loti",
                "symbol": "L"
            },
            "ZAR": {
                "name": "South African rand",
                "symbol": "R"
            }
        },
        "capital": "Maseru",
        "latlng": [
            -29.5,
            28.5
        ],
        "area": 30355,
        "population": 2142252,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ls.png",
            "svg": "https://flagcdn.com/ls.svg"
        },
        "capitalInfo": {
            "latlng": [
                -29.32,
                27.48
            ]
        }
    },

    {
        "name": {
            "common": "Faroe Islands",
            "official": "Faroe Islands",
        },
        "currencies": {
            "DKK": {
                "name": "Danish krone",
                "symbol": "kr"
            },
            "FOK": {
                "name": "Faroese króna",
                "symbol": "kr"
            }
        },
        "capital": "Tórshavn",
        "latlng": [
            62,
            -7
        ],
        "area": 1393,
        "population": 48865,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/fo.png",
            "svg": "https://flagcdn.com/fo.svg"
        },
        "capitalInfo": {
            "latlng": [
                62.01,
                -6.77
            ]
        }
    },

    {
        "name": {
            "common": "Honduras",
            "official": "Republic of Honduras",
        },
        "currencies": {
            "HNL": {
                "name": "Honduran lempira",
                "symbol": "L"
            }
        },
        "capital": "Tegucigalpa",
        "latlng": [
            15,
            -86.5
        ],
        "area": 112492,
        "population": 9904608,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/hn.png",
            "svg": "https://flagcdn.com/hn.svg"
        },
        "capitalInfo": {
            "latlng": [
                14.1,
                -87.22
            ]
        }
    },

    {
        "name": {
            "common": "Palestine",
            "official": "State of Palestine",
        },
        "currencies": {
            "EGP": {
                "name": "Egyptian pound",
                "symbol": "E£"
            },
            "ILS": {
                "name": "Israeli new shekel",
                "symbol": "₪"
            },
            "JOD": {
                "name": "Jordanian dinar",
                "symbol": "JD"
            }
        },
        "capital": "Ramallah",
        "latlng": [
            31.9,
            35.2
        ],
        "area": 6220,
        "population": 4803269,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/ps.png",
            "svg": "https://flagcdn.com/ps.svg"
        },
        "capitalInfo": {
            "latlng": [
                31.9,
                35.2
            ]
        }
    },

    {
        "name": {
            "common": "Papua New Guinea",
            "official": "Independent State of Papua New Guinea",
        },
        "currencies": {
            "PGK": {
                "name": "Papua New Guinean kina",
                "symbol": "K"
            }
        },
        "capital": "Port Moresby",
        "latlng": [
            -6,
            147
        ],
        "area": 462840,
        "population": 8947027,
        "continents": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/pg.png",
            "svg": "https://flagcdn.com/pg.svg"
        },
        "capitalInfo": {
            "latlng": [
                -9.45,
                147.18
            ]
        }
    },

    {
        "name": {
            "common": "Egypt",
            "official": "Arab Republic of Egypt",
        },
        "currencies": {
            "EGP": {
                "name": "Egyptian pound",
                "symbol": "£"
            }
        },
        "capital": "Cairo",
        "latlng": [
            27,
            30
        ],
        "area": 1002450,
        "population": 102334403,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/eg.png",
            "svg": "https://flagcdn.com/eg.svg"
        },
        "capitalInfo": {
            "latlng": [
                30.05,
                31.25
            ]
        }
    },

    {
        "name": {
            "common": "Spain",
            "official": "Kingdom of Spain",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Madrid",
        "latlng": [
            40,
            -4
        ],
        "area": 505992,
        "population": 47351567,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/es.png",
            "svg": "https://flagcdn.com/es.svg"
        },
        "capitalInfo": {
            "latlng": [
                40.4,
                -3.68
            ]
        }
    },

    {
        "name": {
            "common": "Eritrea",
            "official": "State of Eritrea",
        },
        "currencies": {
            "ERN": {
                "name": "Eritrean nakfa",
                "symbol": "Nfk"
            }
        },
        "capital": "Asmara",
        "latlng": [
            15,
            39
        ],
        "area": 117600,
        "population": 5352000,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/er.png",
            "svg": "https://flagcdn.com/er.svg"
        },
        "capitalInfo": {
            "latlng": [
                15.33,
                38.93
            ]
        }
    },

    {
        "name": {
            "common": "Mozambique",
            "official": "Republic of Mozambique",
        },
        "currencies": {
            "MZN": {
                "name": "Mozambican metical",
                "symbol": "MT"
            }
        },
        "capital": "Maputo",
        "latlng": [
            -18.25,
            35
        ],
        "area": 801590,
        "population": 31255435,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/mz.png",
            "svg": "https://flagcdn.com/mz.svg"
        },
        "capitalInfo": {
            "latlng": [
                -25.95,
                32.58
            ]
        }
    },

    {
        "name": {
            "common": "North Korea",
            "official": "Democratic People's Republic of Korea",
        },
        "currencies": {
            "KPW": {
                "name": "North Korean won",
                "symbol": "₩"
            }
        },
        "capital": "Pyongyang",
        "latlng": [
            40,
            127
        ],
        "area": 120538,
        "population": 25778815,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/kp.png",
            "svg": "https://flagcdn.com/kp.svg"
        },
        "capitalInfo": {
            "latlng": [
                39.02,
                125.75
            ]
        }
    },

    {
        "name": {
            "common": "Senegal",
            "official": "Republic of Senegal",
        },
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Dakar",
        "latlng": [
            14,
            -14
        ],
        "area": 196722,
        "population": 16743930,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/sn.png",
            "svg": "https://flagcdn.com/sn.svg"
        },
        "capitalInfo": {
            "latlng": [
                14.73,
                -17.63
            ]
        }
    },

    {
        "name": {
            "common": "Niue",
            "official": "Niue",
        },
        "currencies": {
            "NZD": {
                "name": "New Zealand dollar",
                "symbol": "$"
            }
        },
        "capital": "Alofi",
        "latlng": [
            -19.03333333,
            -169.86666666
        ],
        "area": 260,
        "population": 1470,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/nu.png",
            "svg": "https://flagcdn.com/nu.svg"
        },
        "capitalInfo": {
            "latlng": [
                -19.02,
                -169.92
            ]
        }
    },

    {
        "name": {
            "common": "Micronesia",
            "official": "Federated States of Micronesia",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Palikir",
        "latlng": [
            6.91666666,
            158.25
        ],
        "area": 702,
        "population": 115021,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/fm.png",
            "svg": "https://flagcdn.com/fm.svg"
        },
        "capitalInfo": {
            "latlng": [
                6.92,
                158.15
            ]
        }
    },

    {
        "name": {
            "common": "Cambodia",
            "official": "Kingdom of Cambodia",
        },
        "currencies": {
            "KHR": {
                "name": "Cambodian riel",
                "symbol": "៛"
            },
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Phnom Penh",
        "latlng": [
            13,
            105
        ],
        "area": 181035,
        "population": 16718971,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/kh.png",
            "svg": "https://flagcdn.com/kh.svg"
        },
        "capitalInfo": {
            "latlng": [
                11.55,
                104.92
            ]
        }
    },

    {
        "name": {
            "common": "Djibouti",
            "official": "Republic of Djibouti",
        },
        "currencies": {
            "DJF": {
                "name": "Djiboutian franc",
                "symbol": "Fr"
            }
        },
        "capital": "Djibouti",
        "latlng": [
            11.5,
            43
        ],
        "area": 23200,
        "population": 988002,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/dj.png",
            "svg": "https://flagcdn.com/dj.svg"
        },
        "capitalInfo": {
            "latlng": [
                11.58,
                43.15
            ]
        }
    },

    {
        "name": {
            "common": "Ghana",
            "official": "Republic of Ghana",
        },
        "currencies": {
            "GHS": {
                "name": "Ghanaian cedi",
                "symbol": "₵"
            }
        },
        "capital": "Accra",
        "latlng": [
            8,
            -2
        ],
        "area": 238533,
        "population": 31072945,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/gh.png",
            "svg": "https://flagcdn.com/gh.svg"
        },
        "capitalInfo": {
            "latlng": [
                5.55,
                -0.22
            ]
        }
    },

    {
        "name": {
            "common": "Belarus",
            "official": "Republic of Belarus",
        },
        "currencies": {
            "BYN": {
                "name": "Belarusian ruble",
                "symbol": "Br"
            }
        },
        "capital": "Minsk",
        "latlng": [
            53,
            28
        ],
        "area": 207600,
        "population": 9398861,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/by.png",
            "svg": "https://flagcdn.com/by.svg"
        },
        "capitalInfo": {
            "latlng": [
                53.9,
                27.57
            ]
        }
    },

    {
        "name": {
            "common": "Benin",
            "official": "Republic of Benin",
        },
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Porto-Novo",
        "latlng": [
            9.5,
            2.25
        ],
        "area": 112622,
        "population": 12123198,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/bj.png",
            "svg": "https://flagcdn.com/bj.svg"
        },
        "capitalInfo": {
            "latlng": [
                6.48,
                2.62
            ]
        }
    },

    {
        "name": {
            "common": "Cocos (Keeling) Islands",
            "official": "Territory of the Cocos (Keeling) Islands",
        },
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            }
        },
        "capital": "West Island",
        "latlng": [
            -12.5,
            96.83333333
        ],
        "area": 14,
        "population": 544,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/cc.png",
            "svg": "https://flagcdn.com/cc.svg"
        },
        "capitalInfo": {
            "latlng": [
                -12.17,
                96.83
            ]
        }
    },

    {
        "name": {
            "common": "United Kingdom",
            "official": "United Kingdom of Great Britain and Northern Ireland",
        },
        "currencies": {
            "GBP": {
                "name": "British pound",
                "symbol": "£"
            }
        },
        "capital": "London",
        "latlng": [
            54,
            -2
        ],
        "area": 242900,
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
            "common": "Åland Islands",
            "official": "Åland Islands",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Mariehamn",
        "latlng": [
            60.116667,
            19.9
        ],
        "area": 1580,
        "population": 29458,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ax.png",
            "svg": "https://flagcdn.com/ax.svg"
        },
        "capitalInfo": {
            "latlng": [
                60.12,
                19.9
            ]
        }
    },

    {
        "name": {
            "common": "Burkina Faso",
            "official": "Burkina Faso",
        },
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Ouagadougou",
        "latlng": [
            13,
            -2
        ],
        "area": 272967,
        "population": 20903278,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/bf.png",
            "svg": "https://flagcdn.com/bf.svg"
        },
        "capitalInfo": {
            "latlng": [
                12.37,
                -1.52
            ]
        }
    },

    {
        "name": {
            "common": "Solomon Islands",
            "official": "Solomon Islands",
        },
        "currencies": {
            "SBD": {
                "name": "Solomon Islands dollar",
                "symbol": "$"
            }
        },
        "capital": "Honiara",
        "latlng": [
            -8,
            159
        ],
        "area": 28896,
        "population": 686878,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/sb.png",
            "svg": "https://flagcdn.com/sb.svg"
        },
        "capitalInfo": {
            "latlng": [
                -9.43,
                159.95
            ]
        }
    },

    {
        "name": {
            "common": "Falkland Islands",
            "official": "Falkland Islands",
        },
        "currencies": {
            "FKP": {
                "name": "Falkland Islands pound",
                "symbol": "£"
            }
        },
        "capital": "Stanley",
        "latlng": [
            -51.75,
            -59
        ],
        "area": 12173,
        "population": 2563,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/fk.png",
            "svg": "https://flagcdn.com/fk.svg"
        },
        "capitalInfo": {
            "latlng": [
                -51.7,
                -57.85
            ]
        }
    },

    {
        "name": {
            "common": "Guernsey",
            "official": "Bailiwick of Guernsey",
        },
        "currencies": {
            "GBP": {
                "name": "British pound",
                "symbol": "£"
            },
            "GGP": {
                "name": "Guernsey pound",
                "symbol": "£"
            }
        },
        "capital": "St. Peter Port",
        "latlng": [
            49.46666666,
            -2.58333333
        ],
        "area": 78,
        "population": 62999,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/gg.png",
            "svg": "https://flagcdn.com/gg.svg"
        },
        "capitalInfo": {
            "latlng": [
                49.45,
                -2.54
            ]
        }
    },

    {
        "name": {
            "common": "Costa Rica",
            "official": "Republic of Costa Rica",
        },
        "currencies": {
            "CRC": {
                "name": "Costa Rican colón",
                "symbol": "₡"
            }
        },
        "capital": "San José",
        "latlng": [
            10,
            -84
        ],
        "area": 51100,
        "population": 5094114,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/cr.png",
            "svg": "https://flagcdn.com/cr.svg"
        },
        "capitalInfo": {
            "latlng": [
                9.93,
                -84.09
            ]
        }
    },

    {
        "name": {
            "common": "Albania",
            "official": "Republic of Albania",
        },
        "currencies": {
            "ALL": {
                "name": "Albanian lek",
                "symbol": "L"
            }
        },
        "capital": "Tirana",
        "latlng": [
            41,
            20
        ],
        "area": 28748,
        "population": 2837743,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/al.png",
            "svg": "https://flagcdn.com/al.svg"
        },
        "capitalInfo": {
            "latlng": [
                41.32,
                19.82
            ]
        }
    },

    {
        "name": {
            "common": "Christmas Island",
            "official": "Territory of Christmas Island",
        },
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            }
        },
        "capital": "Flying Fish Cove",
        "latlng": [
            -10.5,
            105.66666666
        ],
        "area": 135,
        "population": 2072,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/cx.png",
            "svg": "https://flagcdn.com/cx.svg"
        },
        "capitalInfo": {
            "latlng": [
                -10.42,
                105.68
            ]
        }
    },

    {
        "name": {
            "common": "Greece",
            "official": "Hellenic Republic",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Athens",
        "latlng": [
            39,
            22
        ],
        "area": 131990,
        "population": 10715549,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/gr.png",
            "svg": "https://flagcdn.com/gr.svg"
        },
        "capitalInfo": {
            "latlng": [
                37.98,
                23.73
            ]
        }
    },

    {
        "name": {
            "common": "Ukraine",
            "official": "Ukraine",
        },
        "currencies": {
            "UAH": {
                "name": "Ukrainian hryvnia",
                "symbol": "₴"
            }
        },
        "capital": "Kyiv",
        "latlng": [
            49,
            32
        ],
        "area": 603500,
        "population": 44134693,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ua.png",
            "svg": "https://flagcdn.com/ua.svg"
        },
        "capitalInfo": {
            "latlng": [
                50.43,
                30.52
            ]
        }
    },

    {
        "name": {
            "common": "Greenland",
            "official": "Greenland",
        },
        "currencies": {
            "DKK": {
                "name": "krone",
                "symbol": "kr."
            }
        },
        "capital": "Nuuk",
        "latlng": [
            72,
            -40
        ],
        "area": 2166086,
        "population": 56367,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/gl.png",
            "svg": "https://flagcdn.com/gl.svg"
        },
        "capitalInfo": {
            "latlng": [
                64.18,
                -51.75
            ]
        }
    },

    {
        "name": {
            "common": "North Macedonia",
            "official": "Republic of North Macedonia",
        },
        "currencies": {
            "MKD": {
                "name": "denar",
                "symbol": "den"
            }
        },
        "capital": "Skopje",
        "latlng": [
            41.83333333,
            22
        ],
        "area": 25713,
        "population": 2077132,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/mk.png",
            "svg": "https://flagcdn.com/mk.svg"
        },
        "capitalInfo": {
            "latlng": [
                42,
                21.43
            ]
        }
    },

    {
        "name": {
            "common": "Ivory Coast",
            "official": "Republic of Côte d'Ivoire",
        },
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Yamoussoukro",
        "latlng": [
            8,
            -5
        ],
        "area": 322463,
        "population": 26378275,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ci.png",
            "svg": "https://flagcdn.com/ci.svg"
        },
        "capitalInfo": {
            "latlng": [
                6.82,
                -5.27
            ]
        }
    },

    {
        "name": {
            "common": "Syria",
            "official": "Syrian Arab Republic",
        },
        "currencies": {
            "SYP": {
                "name": "Syrian pound",
                "symbol": "£"
            }
        },
        "capital": "Damascus",
        "latlng": [
            35,
            38
        ],
        "area": 185180,
        "population": 17500657,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/sy.png",
            "svg": "https://flagcdn.com/sy.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                33.5,
                36.3
            ]
        }
    },

    {
        "name": {
            "common": "Czechia",
            "official": "Czech Republic",
        },
        "currencies": {
            "CZK": {
                "name": "Czech koruna",
                "symbol": "Kč"
            }
        },
        "capital": "Prague",
        "latlng": [
            49.75,
            15.5
        ],
        "area": 78865,
        "population": 10698896,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/cz.png",
            "svg": "https://flagcdn.com/cz.svg"
        },
        "capitalInfo": {
            "latlng": [
                50.08,
                14.47
            ]
        }
    },

    {
        "name": {
            "common": "Botswana",
            "official": "Republic of Botswana",
        },
        "currencies": {
            "BWP": {
                "name": "Botswana pula",
                "symbol": "P"
            }
        },
        "capital": "Gaborone",
        "latlng": [
            -22,
            24
        ],
        "area": 582000,
        "population": 2351625,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/bw.png",
            "svg": "https://flagcdn.com/bw.svg"
        },
        "capitalInfo": {
            "latlng": [
                -24.63,
                25.9
            ]
        }
    },

    {
        "name": {
            "common": "American Samoa",
            "official": "American Samoa",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Pago Pago",
        "latlng": [
            -14.33333333,
            -170
        ],
        "area": 199,
        "population": 55197,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/as.png",
            "svg": "https://flagcdn.com/as.svg"
        },
        "capitalInfo": {
            "latlng": [
                -14.27,
                -170.7
            ]
        }
    },

    {
        "name": {
            "common": "Mexico",
            "official": "United Mexican States",
        },
        "currencies": {
            "MXN": {
                "name": "Mexican peso",
                "symbol": "$"
            }
        },
        "capital": "Mexico City",
        "latlng": [
            23,
            -102
        ],
        "area": 1964375,
        "population": 128932753,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/mx.png",
            "svg": "https://flagcdn.com/mx.svg"
        },
        "capitalInfo": {
            "latlng": [
                19.43,
                -99.13
            ]
        }
    },

    {
        "name": {
            "common": "Austria",
            "official": "Republic of Austria",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Vienna",
        "latlng": [
            47.33333333,
            13.33333333
        ],
        "area": 83871,
        "population": 8917205,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/at.png",
            "svg": "https://flagcdn.com/at.svg"
        },
        "capitalInfo": {
            "latlng": [
                48.2,
                16.37
            ]
        }
    },

    {
        "name": {
            "common": "Bermuda",
            "official": "Bermuda",
        },
        "currencies": {
            "BMD": {
                "name": "Bermudian dollar",
                "symbol": "$"
            }
        },
        "capital": "Hamilton",
        "latlng": [
            32.33333333,
            -64.75
        ],
        "area": 54,
        "population": 63903,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/bm.png",
            "svg": "https://flagcdn.com/bm.svg"
        },
        "capitalInfo": {
            "latlng": [
                32.28,
                -64.78
            ]
        }
    },

    {
        "name": {
            "common": "Bahrain",
            "official": "Kingdom of Bahrain",
        },
        "currencies": {
            "BHD": {
                "name": "Bahraini dinar",
                "symbol": ".د.ب"
            }
        },
        "capital": "Manama",
        "latlng": [
            26,
            50.55
        ],
        "area": 765,
        "population": 1701583,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/bh.png",
            "svg": "https://flagcdn.com/bh.svg"
        },
        "capitalInfo": {
            "latlng": [
                26.23,
                50.57
            ]
        }
    },

    {
        "name": {
            "common": "Nauru",
            "official": "Republic of Nauru",
        },
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            }
        },
        "capital": "Yaren",
        "latlng": [
            -0.53333333,
            166.91666666
        ],
        "area": 21,
        "population": 10834,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/nr.png",
            "svg": "https://flagcdn.com/nr.svg"
        },
        "capitalInfo": {
            "latlng": [
                -0.55,
                166.92
            ]
        }
    },

    {
        "name": {
            "common": "Niger",
            "official": "Republic of Niger",
        },
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Niamey",
        "latlng": [
            16,
            8
        ],
        "area": 1267000,
        "population": 24206636,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ne.png",
            "svg": "https://flagcdn.com/ne.svg"
        },
        "capitalInfo": {
            "latlng": [
                13.52,
                2.12
            ]
        }
    },

    {
        "name": {
            "common": "Angola",
            "official": "Republic of Angola",
        },
        "currencies": {
            "AOA": {
                "name": "Angolan kwanza",
                "symbol": "Kz"
            }
        },
        "capital": "Luanda",
        "latlng": [
            -12.5,
            18.5
        ],
        "area": 1246700,
        "population": 32866268,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ao.png",
            "svg": "https://flagcdn.com/ao.svg"
        },
        "capitalInfo": {
            "latlng": [
                -8.83,
                13.22
            ]
        }
    },

    {
        "name": {
            "common": "Antigua and Barbuda",
            "official": "Antigua and Barbuda",
        },
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "capital": "Saint John's",
        "latlng": [
            17.05,
            -61.8
        ],
        "area": 442,
        "population": 97928,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/ag.png",
            "svg": "https://flagcdn.com/ag.svg"
        },
        "capitalInfo": {
            "latlng": [
                17.12,
                -61.85
            ]
        }
    },

    {
        "name": {
            "common": "Montserrat",
            "official": "Montserrat",
        },
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "capital": "Plymouth",
        "latlng": [
            16.75,
            -62.2
        ],
        "area": 102,
        "population": 4922,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/ms.png",
            "svg": "https://flagcdn.com/ms.svg"
        },
        "capitalInfo": {
            "latlng": [
                16.7,
                -62.22
            ]
        }
    },

    {
        "name": {
            "common": "South Korea",
            "official": "Republic of Korea",
        },
        "currencies": {
            "KRW": {
                "name": "South Korean won",
                "symbol": "₩"
            }
        },
        "capital": "Seoul",
        "latlng": [
            37,
            127.5
        ],
        "area": 100210,
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
            "common": "Taiwan",
            "official": "Republic of China (Taiwan)",
        },
        "currencies": {
            "TWD": {
                "name": "New Taiwan dollar",
                "symbol": "$"
            }
        },
        "capital": "Taipei",
        "latlng": [
            23.5,
            121
        ],
        "area": 36193,
        "population": 23503349,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/tw.png",
            "svg": "https://flagcdn.com/tw.svg"
        },
        "capitalInfo": {
            "latlng": [
                25.03,
                121.52
            ]
        }
    },

    {
        "name": {
            "common": "Barbados",
            "official": "Barbados",
        },
        "currencies": {
            "BBD": {
                "name": "Barbadian dollar",
                "symbol": "$"
            }
        },
        "capital": "Bridgetown",
        "latlng": [
            13.16666666,
            -59.53333333
        ],
        "area": 430,
        "population": 287371,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/bb.png",
            "svg": "https://flagcdn.com/bb.svg"
        },
        "capitalInfo": {
            "latlng": [
                13.1,
                -59.62
            ]
        }
    },

    {
        "name": {
            "common": "Curaçao",
            "official": "Country of Curaçao",
        },
        "currencies": {
            "ANG": {
                "name": "Netherlands Antillean guilder",
                "symbol": "ƒ"
            }
        },
        "capital": "Willemstad",
        "latlng": [
            12.116667,
            -68.933333
        ],
        "area": 444,
        "population": 155014,
        "continents": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/cw.png",
            "svg": "https://flagcdn.com/cw.svg"
        },
        "capitalInfo": {
            "latlng": [
                12.1,
                -68.92
            ]
        }
    },

    {
        "name": {
            "common": "Maldives",
            "official": "Republic of the Maldives",
        },
        "currencies": {
            "MVR": {
                "name": "Maldivian rufiyaa",
                "symbol": ".ރ"
            }
        },
        "capital": "Malé",
        "latlng": [
            3.25,
            73
        ],
        "area": 300,
        "population": 540542,
        "continents": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/mv.png",
            "svg": "https://flagcdn.com/mv.svg"
        },
        "capitalInfo": {
            "latlng": [
                4.17,
                73.51
            ]
        }
    },

    {
        "name": {
            "common": "Dominica",
            "official": "Commonwealth of Dominica",
        },
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "capital": "Roseau",
        "latlng": [
            15.41666666,
            -61.33333333
        ],
        "area": 751,
        "population": 71991,
        "continents": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/dm.png",
            "svg": "https://flagcdn.com/dm.svg"
        },
        "capitalInfo": {
            "latlng": [
                15.3,
                -61.4
            ]
        }
    },

    {
        "name": {
            "common": "Mauritania",
            "official": "Islamic Republic of Mauritania",
        },
        "currencies": {
            "MRU": {
                "name": "Mauritanian ouguiya",
                "symbol": "UM"
            }
        },
        "capital": "Nouakchott",
        "latlng": [
            20,
            -12
        ],
        "area": 1030700,
        "population": 4649660,
        "continents": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/mr.png",
            "svg": "https://flagcdn.com/mr.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.07,
                -15.97
            ]
        }
    },

    {
        "name": {
            "common": "Georgia",
            "official": "Georgia",
        },
        "currencies": {
            "GEL": {
                "name": "lari",
                "symbol": "₾"
            }
        },
        "capital": "Tbilisi",
        "latlng": [
            42,
            43.5
        ],
        "area": 69700,
        "population": 3714000,
        "continents": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/ge.png",
            "svg": "https://flagcdn.com/ge.svg"
        },
        "capitalInfo": {
            "latlng": [
                41.68,
                44.83
            ]
        }
    },

    {
        "name": {
            "common": "Guinea",
            "official": "Republic of Guinea",
        },
        "currencies": {
            "GNF": {
                "name": "Guinean franc",
                "symbol": "Fr"
            }
        },
        "capital": "Conakry",
        "latlng": [
            11,
            -10
        ],
        "area": 245857,
        "population": 13132792,
        "continents": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/gn.png",
            "svg": "https://flagcdn.com/gn.svg"
        },
        "capitalInfo": {
            "latlng": [
                9.5,
                -13.7
            ]
        }
    },

    {
        "name": {
            "common": "Liberia",
            "official": "Republic of Liberia",
        },
        "currencies": {
            "LRD": {
                "name": "Liberian dollar",
                "symbol": "$"
            }
        },
        "capital": "Monrovia",
        "latlng": [
            6.5,
            -9.5
        ],
        "area": 111369,
        "population": 5057677,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/lr.png",
            "svg": "https://flagcdn.com/lr.svg"
        },
        "capitalInfo": {
            "latlng": [
                6.3,
                -10.8
            ]
        }
    },

    {
        "name": {
            "common": "Guinea-Bissau",
            "official": "Republic of Guinea-Bissau",
        },
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Bissau",
        "latlng": [
            12,
            -15
        ],
        "area": 36125,
        "population": 1967998,
        "continents": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/gw.png",
            "svg": "https://flagcdn.com/gw.svg"
        },
        "capitalInfo": {
            "latlng": [
                11.85,
                -15.58
            ]
        }
    },

    {
        "name": {
            "common": "Switzerland",
            "official": "Swiss Confederation",
        },
        "currencies": {
            "CHF": {
                "name": "Swiss franc",
                "symbol": "Fr."
            }
        },
        "capital": "Bern",
        "latlng": [
            47,
            8
        ],
        "area": 41284,
        "population": 8654622,
        "continents": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ch.png",
            "svg": "https://flagcdn.com/ch.svg"
        },
        "capitalInfo": {
            "latlng": [
                46.92,
                7.47
            ]
        }
    },

    {
        "name": {
            "common": "Cyprus",
            "official": "Republic of Cyprus",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Nicosia",
        "latlng": [
            35,
            33
        ],
        "area": 9251,
        "population": 1207361,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/cy.png",
            "svg": "https://flagcdn.com/cy.svg"
        },
        "capitalInfo": {
            "latlng": [
                35.17,
                33.37
            ]
        }
    },

    {
        "name": {
            "common": "British Indian Ocean Territory",
            "official": "British Indian Ocean Territory",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Diego Garcia",
        "latlng": [
            -6,
            71.5
        ],
        "area": 60,
        "population": 3000,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/io.png",
            "svg": "https://flagcdn.com/io.svg"
        },
        "capitalInfo": {
            "latlng": [
                -7.3,
                72.4
            ]
        }
    },

    {
        "name": {
            "common": "Finland",
            "official": "Republic of Finland",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Helsinki",
        "latlng": [
            64,
            26
        ],
        "landlocked": false,
        "area": 338424,
        "population": 5530719,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/fi.png",
            "svg": "https://flagcdn.com/fi.svg"
        },
        "capitalInfo": {
            "latlng": [
                60.17,
                24.93
            ]
        }
    },

    {
        "name": {
            "common": "Belgium",
            "official": "Kingdom of Belgium",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Brussels",
        "latlng": [
            50.83333333,
            4
        ],
        "area": 30528,
        "population": 11555997,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/be.png",
            "svg": "https://flagcdn.com/be.svg"
        },
        "capitalInfo": {
            "latlng": [
                50.83,
                4.33
            ]
        }
    },

    {
        "name": {
            "common": "United Arab Emirates",
            "official": "United Arab Emirates",
        },
        "currencies": {
            "AED": {
                "name": "United Arab Emirates dirham",
                "symbol": "د.إ"
            }
        },
        "capital": "Abu Dhabi",
        "latlng": [
            24,
            54
        ],
        "area": 83600,
        "population": 9890400,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/ae.png",
            "svg": "https://flagcdn.com/ae.svg"
        },
        "capitalInfo": {
            "latlng": [
                24.47,
                54.37
            ]
        }
    },

    {
        "name": {
            "common": "Mali",
            "official": "Republic of Mali",
        },
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Bamako",
        "latlng": [
            17,
            -4
        ],
        "area": 1240192,
        "population": 20250834,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ml.png",
            "svg": "https://flagcdn.com/ml.svg"
        },
        "capitalInfo": {
            "latlng": [
                12.65,
                -8
            ]
        }
    },

    {
        "name": {
            "common": "Chad",
            "official": "Republic of Chad",
        },
        "currencies": {
            "XAF": {
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "N'Djamena",
        "latlng": [
            15,
            19
        ],
        "area": 1284000,
        "population": 16425859,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/td.png",
            "svg": "https://flagcdn.com/td.svg"
        },
        "capitalInfo": {
            "latlng": [
                12.1,
                15.03
            ]
        }
    },

    {
        "name": {
            "common": "Equatorial Guinea",
            "official": "Republic of Equatorial Guinea",
        },
        "currencies": {
            "XAF": {
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Malabo",
        "latlng": [
            2,
            10
        ],
        "area": 28051,
        "population": 1402985,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/gq.png",
            "svg": "https://flagcdn.com/gq.svg"
        },
        "capitalInfo": {
            "latlng": [
                3.75,
                8.78
            ]
        }
    },

    {
        "name": {
            "common": "Vatican City",
            "official": "Vatican City State",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Vatican City",
        "latlng": [
            41.9,
            12.45
        ],
        "area": 0.44,
        "population": 451,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/va.png",
            "svg": "https://flagcdn.com/va.svg"
        },
        "capitalInfo": {
            "latlng": [
                41.9,
                12.45
            ]
        }
    },

    {
        "name": {
            "common": "Iraq",
            "official": "Republic of Iraq",
        },
        "currencies": {
            "IQD": {
                "name": "Iraqi dinar",
                "symbol": "ع.د"
            }
        },
        "capital": "Baghdad",
        "latlng": [
            33,
            44
        ],
        "area": 438317,
        "population": 40222503,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/iq.png",
            "svg": "https://flagcdn.com/iq.svg"
        },
        "capitalInfo": {
            "latlng": [
                33.33,
                44.4
            ]
        }
    },

    {
        "name": {
            "common": "Tokelau",
            "official": "Tokelau",
        },
        "currencies": {
            "NZD": {
                "name": "New Zealand dollar",
                "symbol": "$"
            }
        },
        "capital": "Fakaofo",
        "latlng": [
            -9,
            -172
        ],
        "area": 12,
        "population": 1411,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/tk.png",
            "svg": "https://flagcdn.com/tk.svg"
        },
        "capitalInfo": {
            "latlng": [
                -9.38,
                -171.22
            ]
        }
    },

    {
        "name": {
            "common": "Tonga",
            "official": "Kingdom of Tonga",
        },
        "currencies": {
            "TOP": {
                "name": "Tongan paʻanga",
                "symbol": "T$"
            }
        },
        "capital": "Nuku'alofa",
        "latlng": [
            -20,
            -175
        ],
        "area": 747,
        "population": 105697,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/to.png",
            "svg": "https://flagcdn.com/to.svg"
        },
        "capitalInfo": {
            "latlng": [
                -21.13,
                -175.2
            ]
        }
    },

    {
        "name": {
            "common": "Northern Mariana Islands",
            "official": "Commonwealth of the Northern Mariana Islands",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Saipan",
        "latlng": [
            15.2,
            145.75
        ],
        "area": 464,
        "population": 57557,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/mp.png",
            "svg": "https://flagcdn.com/mp.svg"
        },
        "capitalInfo": {
            "latlng": [
                15.2,
                145.75
            ]
        }
    },

    {
        "name": {
            "common": "Qatar",
            "official": "State of Qatar",
        },
        "currencies": {
            "QAR": {
                "name": "Qatari riyal",
                "symbol": "ر.ق"
            }
        },
        "capital": "Doha",
        "latlng": [
            25.5,
            51.25
        ],
        "area": 11586,
        "population": 2881060,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/qa.png",
            "svg": "https://flagcdn.com/qa.svg"
        },
        "capitalInfo": {
            "latlng": [
                25.28,
                51.53
            ]
        }
    },

    {
        "name": {
            "common": "Uruguay",
            "official": "Oriental Republic of Uruguay",
        },
        "currencies": {
            "UYU": {
                "name": "Uruguayan peso",
                "symbol": "$"
            }
        },
        "capital": "Montevideo",
        "latlng": [
            -33,
            -56
        ],
        "area": 181034,
        "population": 3473727,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/uy.png",
            "svg": "https://flagcdn.com/uy.svg"
        },
        "capitalInfo": {
            "latlng": [
                -34.85,
                -56.17
            ]
        }
    },

    {
        "name": {
            "common": "India",
            "official": "Republic of India",
        },
        "currencies": {
            "INR": {
                "name": "Indian rupee",
                "symbol": "₹"
            }
        },
        "capital": "New Delhi",
        "latlng": [
            20,
            77
        ],
        "area": 3287590,
        "population": 1380004385,
        "continents": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/in.png",
            "svg": "https://flagcdn.com/in.svg"
        },
        "capitalInfo": {
            "latlng": [
                28.6,
                77.2
            ]
        }
    },

    {
        "name": {
            "common": "Norfolk Island",
            "official": "Territory of Norfolk Island",
        },
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            }
        },
        "capital": "Kingston",
        "latlng": [
            -29.03333333,
            167.95
        ],
        "area": 36,
        "population": 2302,
        "continents": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/nf.png",
            "svg": "https://flagcdn.com/nf.svg"
        },
        "capitalInfo": {
            "latlng": [
                -29.05,
                167.97
            ]
        }
    },

    {
        "name": {
            "common": "Oman",
            "official": "Sultanate of Oman",
        },
        "currencies": {
            "OMR": {
                "name": "Omani rial",
                "symbol": "ر.ع."
            }
        },
        "capital": "Muscat",
        "latlng": [
            21,
            57
        ],
        "area": 309500,
        "population": 5106622,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/om.png",
            "svg": "https://flagcdn.com/om.svg"
        },
        "capitalInfo": {
            "latlng": [
                23.62,
                58.58
            ]
        }
    },

    {
        "name": {
            "common": "Colombia",
            "official": "Republic of Colombia",
        },
        "currencies": {
            "COP": {
                "name": "Colombian peso",
                "symbol": "$"
            }
        },
        "capital": "Bogotá",
        "latlng": [
            4,
            -72
        ],
        "area": 1141748,
        "population": 50882884,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/co.png",
            "svg": "https://flagcdn.com/co.svg"
        },
        "capitalInfo": {
            "latlng": [
                4.71,
                -74.07
            ]
        }
    },

    {
        "name": {
            "common": "Cameroon",
            "official": "Republic of Cameroon",
        },
        "currencies": {
            "XAF": {
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Yaoundé",
        "latlng": [
            6,
            12
        ],
        "area": 475442,
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
            "common": "Ethiopia",
            "official": "Federal Democratic Republic of Ethiopia",
        },
        "currencies": {
            "ETB": {
                "name": "Ethiopian birr",
                "symbol": "Br"
            }
        },
        "capital": "Addis Ababa",
        "latlng": [
            8,
            38
        ],
        "area": 1104300,
        "population": 114963583,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/et.png",
            "svg": "https://flagcdn.com/et.svg"
        },
        "capitalInfo": {
            "latlng": [
                9.03,
                38.7
            ]
        }
    },

    {
        "name": {
            "common": "Sudan",
            "official": "Republic of the Sudan",
        },
        "currencies": {
            "SDG": {
                "name": "Sudanese pound"
            }
        },
        "capital": "Khartoum",
        "latlng": [
            15,
            30
        ],
        "area": 1886068,
        "population": 43849269,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/sd.png",
            "svg": "https://flagcdn.com/sd.svg"
        },
        "capitalInfo": {
            "latlng": [
                15.6,
                32.53
            ]
        }
    },

    {
        "name": {
            "common": "Gabon",
            "official": "Gabonese Republic",
        },
        "currencies": {
            "XAF": {
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Libreville",
        "latlng": [
            -1,
            11.75
        ],
        "area": 267668,
        "population": 2225728,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ga.png",
            "svg": "https://flagcdn.com/ga.svg"
        },
        "capitalInfo": {
            "latlng": [
                0.38,
                9.45
            ]
        }
    },

    {
        "name": {
            "common": "Argentina",
            "official": "Argentine Republic",
        },
        "currencies": {
            "ARS": {
                "name": "Argentine peso",
                "symbol": "$"
            }
        },
        "capital": "Buenos Aires",
        "latlng": [
            -34,
            -64
        ],
        "area": 2780400,
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
            "common": "Japan",
            "official": "Japan",
        },
        "currencies": {
            "JPY": {
                "name": "Japanese yen",
                "symbol": "¥"
            }
        },
        "capital": "Tokyo",
        "latlng": [
            36,
            138
        ],
        "area": 377930,
        "population": 125836021,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/jp.png",
            "svg": "https://flagcdn.com/jp.svg"
        },
        "capitalInfo": {
            "latlng": [
                35.68,
                139.75
            ]
        }
    },

    {
        "name": {
            "common": "Hungary",
            "official": "Hungary",
        },
        "currencies": {
            "HUF": {
                "name": "Hungarian forint",
                "symbol": "Ft"
            }
        },
        "capital": "Budapest",
        "latlng": [
            47,
            20
        ],
        "area": 93028,
        "population": 9749763,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/hu.png",
            "svg": "https://flagcdn.com/hu.svg"
        },
        "capitalInfo": {
            "latlng": [
                47.5,
                19.08
            ]
        }
    },

    {
        "name": {
            "common": "Croatia",
            "official": "Republic of Croatia",
        },
        "currencies": {
            "HRK": {
                "name": "Croatian kuna",
                "symbol": "kn"
            }
        },
        "capital": "Zagreb",
        "latlng": [
            45.16666666,
            15.5
        ],
        "area": 56594,
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
            "common": "Kyrgyzstan",
            "official": "Kyrgyz Republic",
        },
        "currencies": {
            "KGS": {
                "name": "Kyrgyzstani som",
                "symbol": "с"
            }
        },
        "capital": "Bishkek",
        "latlng": [
            41,
            75
        ],
        "area": 199951,
        "population": 6591600,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/kg.png",
            "svg": "https://flagcdn.com/kg.svg"
        },
        "capitalInfo": {
            "latlng": [
                42.87,
                74.6
            ]
        }
    },

    {
        "name": {
            "common": "Portugal",
            "official": "Portuguese Republic",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Lisbon",
        "latlng": [
            39.5,
            -8
        ],
        "area": 92090,
        "population": 10305564,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/pt.png",
            "svg": "https://flagcdn.com/pt.svg"
        },
        "capitalInfo": {
            "latlng": [
                38.72,
                -9.13
            ]
        }
    },

    {
        "name": {
            "common": "Vietnam",
            "official": "Socialist Republic of Vietnam",
        },
        "currencies": {
            "VND": {
                "name": "Vietnamese đồng",
                "symbol": "₫"
            }
        },
        "capital": "Hanoi",
        "latlng": [
            16.16666666,
            107.83333333
        ],
        "area": 331212,
        "population": 97338583,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/vn.png",
            "svg": "https://flagcdn.com/vn.svg"
        },
        "capitalInfo": {
            "latlng": [
                21.03,
                105.85
            ]
        }
    },

    {
        "name": {
            "common": "Norway",
            "official": "Kingdom of Norway",
        },
        "currencies": {
            "NOK": {
                "name": "Norwegian krone",
                "symbol": "kr"
            }
        },
        "capital": "Oslo",
        "latlng": [
            62,
            10
        ],
        "area": 323802,
        "population": 5379475,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/no.png",
            "svg": "https://flagcdn.com/no.svg"
        },
        "capitalInfo": {
            "latlng": [
                59.92,
                10.75
            ]
        }
    },

    {
        "name": {
            "common": "Italy",
            "official": "Italian Republic",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Rome",
        "latlng": [
            42.83333333,
            12.83333333
        ],
        "area": 301336,
        "population": 59554023,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/it.png",
            "svg": "https://flagcdn.com/it.svg"
        },
        "capitalInfo": {
            "latlng": [
                41.9,
                12.48
            ]
        }
    },

    {
        "name": {
            "common": "Sint Maarten",
            "official": "Sint Maarten",
        },
        "currencies": {
            "ANG": {
                "name": "Netherlands Antillean guilder",
                "symbol": "ƒ"
            }
        },
        "capital": "Philipsburg",
        "latlng": [
            18.033333,
            -63.05
        ],
        "area": 34,
        "population": 40812,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/sx.png",
            "svg": "https://flagcdn.com/sx.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.02,
                -63.03
            ]
        }
    },

    {
        "name": {
            "common": "Saint Martin",
            "official": "Saint Martin",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Marigot",
        "latlng": [
            18.08333333,
            -63.95
        ],
        "area": 53,
        "population": 38659,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/mf.png",
            "svg": "https://flagcdn.com/mf.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.07,
                -63.08
            ]
        }
    },

    {
        "name": {
            "common": "Jordan",
            "official": "Hashemite Kingdom of Jordan",
        },
        "currencies": {
            "JOD": {
                "name": "Jordanian dinar",
                "symbol": "د.ا"
            }
        },
        "capital": "Amman",
        "latlng": [
            31,
            36
        ],
        "area": 89342,
        "population": 10203140,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/jo.png",
            "svg": "https://flagcdn.com/jo.svg"
        },
        "capitalInfo": {
            "latlng": [
                31.95,
                35.93
            ]
        }
    },

    {
        "name": {
            "common": "French Polynesia",
            "official": "French Polynesia",
        },
        "currencies": {
            "XPF": {
                "name": "CFP franc",
                "symbol": "₣"
            }
        },
        "capital": "Papeetē",
        "latlng": [
            -15,
            -140
        ],
        "area": 4167,
        "population": 280904,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/pf.png",
            "svg": "https://flagcdn.com/pf.svg"
        },
        "capitalInfo": {
            "latlng": [
                -17.53,
                -149.56
            ]
        }
    },

    {
        "name": {
            "common": "Rwanda",
            "official": "Republic of Rwanda",
        },
        "currencies": {
            "RWF": {
                "name": "Rwandan franc",
                "symbol": "Fr"
            }
        },
        "capital": "Kigali",
        "latlng": [
            -2,
            30
        ],
        "area": 26338,
        "population": 12952209,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/rw.png",
            "svg": "https://flagcdn.com/rw.svg"
        },
        "capitalInfo": {
            "latlng": [
                -1.95,
                30.05
            ]
        }
    },

    {
        "name": {
            "common": "Thailand",
            "official": "Kingdom of Thailand",
        },
        "currencies": {
            "THB": {
                "name": "Thai baht",
                "symbol": "฿"
            }
        },
        "capital": "Bangkok",
        "latlng": [
            15,
            100
        ],
        "area": 513120,
        "population": 69799978,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/th.png",
            "svg": "https://flagcdn.com/th.svg"
        },
        "capitalInfo": {
            "latlng": [
                13.75,
                100.52
            ]
        }
    },

    {
        "name": {
            "common": "Denmark",
            "official": "Kingdom of Denmark",
        },
        "currencies": {
            "DKK": {
                "name": "Danish krone",
                "symbol": "kr"
            }
        },
        "capital": "Copenhagen",
        "latlng": [
            56,
            10
        ],
        "area": 43094,
        "population": 5831404,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/dk.png",
            "svg": "https://flagcdn.com/dk.svg"
        },
        "capitalInfo": {
            "latlng": [
                55.67,
                12.58
            ]
        }
    },

    {
        "name": {
            "common": "Tuvalu",
            "official": "Tuvalu",
        },
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            },
            "TVD": {
                "name": "Tuvaluan dollar",
                "symbol": "$"
            }
        },
        "capital": "Funafuti",
        "latlng": [
            -8,
            178
        ],
        "area": 26,
        "population": 11792,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/tv.png",
            "svg": "https://flagcdn.com/tv.svg"
        },
        "capitalInfo": {
            "latlng": [
                -8.52,
                179.22
            ]
        }
    },

    {
        "name": {
            "common": "Pitcairn Islands",
            "official": "Pitcairn Group of Islands",
        },
        "currencies": {
            "NZD": {
                "name": "New Zealand dollar",
                "symbol": "$"
            }
        },
        "capital": "Adamstown",
        "latlng": [
            -25.06666666,
            -130.1
        ],
        "area": 47,
        "population": 56,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/pn.png",
            "svg": "https://flagcdn.com/pn.svg"
        },
        "capitalInfo": {
            "latlng": [
                -25.07,
                -130.08
            ]
        }
    },

    {
        "name": {
            "common": "Uganda",
            "official": "Republic of Uganda",
        },
        "currencies": {
            "UGX": {
                "name": "Ugandan shilling",
                "symbol": "Sh"
            }
        },
        "capital": "Kampala",
        "latlng": [
            1,
            32
        ],
        "area": 241550,
        "population": 45741000,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ug.png",
            "svg": "https://flagcdn.com/ug.svg"
        },
        "capitalInfo": {
            "latlng": [
                0.32,
                32.55
            ]
        }
    },

    {
        "name": {
            "common": "Togo",
            "official": "Togolese Republic",
        },
        "currencies": {
            "XOF": {
                "name": "West African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Lomé",
        "latlng": [
            8,
            1.16666666
        ],
        "area": 56785,
        "population": 8278737,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/tg.png",
            "svg": "https://flagcdn.com/tg.svg"
        },
        "capitalInfo": {
            "latlng": [
                6.14,
                1.21
            ]
        }
    },

    {
        "name": {
            "common": "Tajikistan",
            "official": "Republic of Tajikistan",
        },
        "currencies": {
            "TJS": {
                "name": "Tajikistani somoni",
                "symbol": "ЅМ"
            }
        },
        "capital": "Dushanbe",
        "latlng": [
            39,
            71
        ],
        "area": 143100,
        "population": 9537642,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/tj.png",
            "svg": "https://flagcdn.com/tj.svg"
        },
        "capitalInfo": {
            "latlng": [
                38.55,
                68.77
            ]
        }
    },

    {
        "name": {
            "common": "French Guiana",
            "official": "Guiana",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Cayenne",
        "latlng": [
            4,
            -53
        ],
        "area": 83534,
        "population": 254541,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/gf.png",
            "svg": "https://flagcdn.com/gf.svg"
        },
        "capitalInfo": {
            "latlng": [
                4.94,
                -52.33
            ]
        }
    },

    {
        "name": {
            "common": "Saint Lucia",
            "official": "Saint Lucia",
        },
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "capital": "Castries",
        "latlng": [
            13.88333333,
            -60.96666666
        ],
        "area": 616,
        "population": 183629,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/lc.png",
            "svg": "https://flagcdn.com/lc.svg"
        },
        "capitalInfo": {
            "latlng": [
                14,
                -61
            ]
        }
    },

    {
        "name": {
            "common": "South Africa",
            "official": "Republic of South Africa",
        },
        "currencies": {
            "ZAR": {
                "name": "South African rand",
                "symbol": "R"
            }
        },
        "capital": "Pretoria",
        "latlng": [
            -29,
            24
        ],
        "area": 1221037,
        "population": 59308690,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/za.png",
            "svg": "https://flagcdn.com/za.svg"
        },
        "capitalInfo": {
            "latlng": [
                -25.7,
                28.22
            ]
        }
    },

    {
        "name": {
            "common": "Armenia",
            "official": "Republic of Armenia",
        },
        "currencies": {
            "AMD": {
                "name": "Armenian dram",
                "symbol": "֏"
            }
        },
        "capital": "Yerevan",
        "latlng": [
            40,
            45
        ],
        "area": 29743,
        "population": 2963234,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/am.png",
            "svg": "https://flagcdn.com/am.svg"
        },
        "capitalInfo": {
            "latlng": [
                40.17,
                44.5
            ]
        }
    },

    {
        "name": {
            "common": "Nigeria",
            "official": "Federal Republic of Nigeria",
        },
        "currencies": {
            "NGN": {
                "name": "Nigerian naira",
                "symbol": "₦"
            }
        },
        "capital": "Abuja",
        "latlng": [
            10,
            8
        ],
        "area": 923768,
        "population": 206139587,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ng.png",
            "svg": "https://flagcdn.com/ng.svg"
        },
        "capitalInfo": {
            "latlng": [
                9.08,
                7.53
            ]
        }
    },

    {
        "name": {
            "common": "South Sudan",
            "official": "Republic of South Sudan",
        },
        "currencies": {
            "SSP": {
                "name": "South Sudanese pound",
                "symbol": "£"
            }
        },
        "capital": "Juba",
        "latlng": [
            7,
            30
        ],
        "area": 619745,
        "population": 11193729,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/ss.png",
            "svg": "https://flagcdn.com/ss.svg"
        },
        "capitalInfo": {
            "latlng": [
                4.85,
                31.62
            ]
        }
    },

    {
        "name": {
            "common": "Afghanistan",
            "official": "Islamic Republic of Afghanistan",
        },
        "currencies": {
            "AFN": {
                "name": "Afghan afghani",
                "symbol": "؋"
            }
        },
        "capital": "Kabul",
        "latlng": [
            33,
            65
        ],
        "area": 652230,
        "population": 40218234,
        "continent": "Asia",
        "flags": {
            "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png",
            "svg": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                34.52,
                69.18
            ]
        }
    },

    {
        "name": {
            "common": "Poland",
            "official": "Republic of Poland",
        },
        "currencies": {
            "PLN": {
                "name": "Polish złoty",
                "symbol": "zł"
            }
        },
        "capital": "Warsaw",
        "latlng": [
            52,
            20
        ],
        "area": 312679,
        "population": 37950802,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/pl.png",
            "svg": "https://flagcdn.com/pl.svg"
        },
        "capitalInfo": {
            "latlng": [
                52.25,
                21
            ]
        }
    },

    {
        "name": {
            "common": "Antarctica",
            "official": "Antarctica"
        },
        "capital": "None",
        "latlng": [
            -90,
            0
        ],
        "area": 14000000,
        "population": 1000,
        "continent": "Antarctica",
        "flags": {
            "png": "https://flagcdn.com/w320/aq.png",
            "svg": "https://flagcdn.com/aq.svg"
        }
    },

    {
        "name": {
            "common": "Lebanon",
            "official": "Lebanese Republic",
        },
        "currencies": {
            "LBP": {
                "name": "Lebanese pound",
                "symbol": "ل.ل"
            }
        },
        "capital": "Beirut",
        "latlng": [
            33.83333333,
            35.83333333
        ],
        "area": 10452,
        "population": 6825442,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/lb.png",
            "svg": "https://flagcdn.com/lb.svg"
        },
        "capitalInfo": {
            "latlng": [
                33.87,
                35.5
            ]
        }
    },

    {
        "name": {
            "common": "Palau",
            "official": "Republic of Palau",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Ngerulmud",
        "latlng": [
            7.5,
            134.5
        ],
        "area": 459,
        "population": 18092,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/pw.png",
            "svg": "https://flagcdn.com/pw.svg"
        },
        "capitalInfo": {
            "latlng": [
                7.5,
                134.62
            ]
        }
    },

    {
        "name": {
            "common": "New Caledonia",
            "official": "New Caledonia",
        },
        "currencies": {
            "XPF": {
                "name": "CFP franc",
                "symbol": "₣"
            }
        },
        "capital": "Nouméa",
        "latlng": [
            -21.5,
            165.5
        ],
        "area": 18575,
        "population": 271960,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/nc.png",
            "svg": "https://flagcdn.com/nc.svg"
        },
        "capitalInfo": {
            "latlng": [
                -22.27,
                166.45
            ]
        }
    },

    {
        "name": {
            "common": "Burundi",
            "official": "Republic of Burundi",
        },
        "currencies": {
            "BIF": {
                "name": "Burundian franc",
                "symbol": "Fr"
            }
        },
        "capital": "Gitega",
        "latlng": [
            -3.5,
            30
        ],
        "area": 27834,
        "population": 11890781,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/bi.png",
            "svg": "https://flagcdn.com/bi.svg"
        },
        "capitalInfo": {
            "latlng": [
                -3.43,
                29.93
            ]
        }
    },

    {
        "name": {
            "common": "Algeria",
            "official": "People's Democratic Republic of Algeria",
        },
        "currencies": {
            "DZD": {
                "name": "Algerian dinar",
                "symbol": "د.ج"
            }
        },
        "capital": "Algiers",
        "latlng": [
            28,
            3
        ],
        "area": 2381741,
        "population": 44700000,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/dz.png",
            "svg": "https://flagcdn.com/dz.svg"
        },
        "capitalInfo": {
            "latlng": [
                36.75,
                3.05
            ]
        }
    },

    {
        "name": {
            "common": "United States Minor Outlying Islands",
            "official": "United States Minor Outlying Islands",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Washington DC",
        "latlng": [
            19.3,
            166.633333
        ],
        "area": 34.2,
        "population": 300,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/um.png",
            "svg": "https://flagcdn.com/um.svg"
        },
        "capitalInfo": {}
    },

    {
        "name": {
            "common": "Peru",
            "official": "Republic of Peru",
        },
        "currencies": {
            "PEN": {
                "name": "Peruvian sol",
                "symbol": "S/ "
            }
        },
        "capital": "Lima",
        "latlng": [
            -10,
            -76
        ],
        "area": 1285216,
        "population": 32971846,
        "continent": "South America",
        "flags": {
            "png": "https://flagcdn.com/w320/pe.png",
            "svg": "https://flagcdn.com/pe.svg"
        },
        "capitalInfo": {
            "latlng": [
                -12.05,
                -77.05
            ]
        }
    },

    {
        "name": {
            "common": "Estonia",
            "official": "Republic of Estonia",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Tallinn",
        "latlng": [
            59,
            26
        ],
        "area": 45227,
        "population": 1331057,
        "continent": "Europe",
        "flags": {
            "png": "https://flagcdn.com/w320/ee.png",
            "svg": "https://flagcdn.com/ee.svg"
        },
        "capitalInfo": {
            "latlng": [
                59.43,
                24.72
            ]
        }
    },

    {
        "name": {
            "common": "South Georgia",
            "official": "South Georgia and the South Sandwich Islands",
        },
        "currencies": {
            "SHP": {
                "name": "Saint Helena pound",
                "symbol": "£"
            }
        },
        "capital": "King Edward Point",
        "latlng": [
            -54.5,
            -37
        ],
        "area": 3903,
        "population": 30,
        "continent": "Antarctica",
        "flags": {
            "png": "https://flagcdn.com/w320/gs.png",
            "svg": "https://flagcdn.com/gs.svg"
        },
        "capitalInfo": {
            "latlng": [
                -54.28,
                -36.5
            ]
        }
    },

    {
        "name": {
            "common": "Vanuatu",
            "official": "Republic of Vanuatu",
        },
        "currencies": {
            "VUV": {
                "name": "Vanuatu vatu",
                "symbol": "Vt"
            }
        },
        "capital": "Port Vila",
        "latlng": [
            -16,
            167
        ],
        "area": 12189,
        "population": 307150,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/vu.png",
            "svg": "https://flagcdn.com/vu.svg"
        },
        "capitalInfo": {
            "latlng": [
                -17.73,
                168.32
            ]
        }
    },

    {
        "name": {
            "common": "Iran",
            "official": "Islamic Republic of Iran",
        },
        "currencies": {
            "IRR": {
                "name": "Iranian rial",
                "symbol": "﷼"
            }
        },
        "capital": "Tehran",
        "latlng": [
            32,
            53
        ],
        "area": 1648195,
        "population": 83992953,
        "continents": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/ir.png",
            "svg": "https://flagcdn.com/ir.svg"
        },
        "capitalInfo": {
            "latlng": [
                35.7,
                51.42
            ]
        }
    },

    {
        "name": {
            "common": "China",
            "official": "People's Republic of China",
        },
        "currencies": {
            "CNY": {
                "name": "Chinese yuan",
                "symbol": "¥"
            }
        },
        "capital": "Beijing",
        "latlng": [
            35,
            105
        ],
        "area": 9706961,
        "population": 1402112000,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/cn.png",
            "svg": "https://flagcdn.com/cn.svg"
        },
        "capitalInfo": {
            "latlng": [
                39.92,
                116.38
            ]
        }
    },

    {
        "name": {
            "common": "Republic of the Congo",
            "official": "Republic of the Congo",
        },
        "currencies": {
            "XAF": {
                "name": "Central African CFA franc",
                "symbol": "Fr"
            }
        },
        "capital": "Brazzaville",
        "latlng": [
            -1,
            15
        ],
        "area": 342000,
        "population": 5657000,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/cg.png",
            "svg": "https://flagcdn.com/cg.svg"
        },
        "capitalInfo": {
            "latlng": [
                -4.25,
                15.28
            ]
        }
    },

    {
        "name": {
            "common": "Australia",
            "official": "Commonwealth of Australia",
        },
        "currencies": {
            "AUD": {
                "name": "Australian dollar",
                "symbol": "$"
            }
        },
        "capital": "Canberra",
        "latlng": [
            -27,
            133
        ],
        "area": 7692024,
        "population": 25687041,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/au.png",
            "svg": "https://flagcdn.com/au.svg"
        },
        "capitalInfo": {
            "latlng": [
                -35.27,
                149.13
            ]
        }
    },

    {
        "name": {
            "common": "Turks and Caicos Islands",
            "official": "Turks and Caicos Islands",
        },
        "currencies": {
            "USD": {
                "name": "United States dollar",
                "symbol": "$"
            }
        },
        "capital": "Cockburn Town",
        "latlng": [
            21.75,
            -71.58333333
        ],
        "area": 948,
        "population": 38718,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/tc.png",
            "svg": "https://flagcdn.com/tc.svg"
        },
        "capitalInfo": {
            "latlng": [
                21.46,
                -71.14
            ]
        }
    },

    {
        "name": {
            "common": "Trinidad and Tobago",
            "official": "Republic of Trinidad and Tobago",
        },
        "currencies": {
            "TTD": {
                "name": "Trinidad and Tobago dollar",
                "symbol": "$"
            }
        },
        "capital": "Port of Spain",
        "latlng": [
            11,
            -61
        ],
        "area": 5130,
        "population": 1399491,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/tt.png",
            "svg": "https://flagcdn.com/tt.svg"
        },
        "capitalInfo": {
            "latlng": [
                10.65,
                -61.52
            ]
        }
    },

    {
        "name": {
            "common": "Anguilla",
            "official": "Anguilla",
        },
        "currencies": {
            "XCD": {
                "name": "Eastern Caribbean dollar",
                "symbol": "$"
            }
        },
        "capital": "The Valley",
        "latlng": [
            18.25,
            -63.16666666
        ],
        "area": 91,
        "population": 13452,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/ai.png",
            "svg": "https://flagcdn.com/ai.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.22,
                -63.05
            ]
        }
    },

    {
        "name": {
            "common": "Haiti",
            "official": "Republic of Haiti",
        },
        "currencies": {
            "HTG": {
                "name": "Haitian gourde",
                "symbol": "G"
            }
        },
        "capital": "Port-au-Prince",
        "latlng": [
            19,
            -72.41666666
        ],
        "area": 27750,
        "population": 11402533,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/ht.png",
            "svg": "https://flagcdn.com/ht.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.53,
                -72.33
            ]
        }
    },

    {
        "name": {
            "common": "Uzbekistan",
            "official": "Republic of Uzbekistan",
        },
        "currencies": {
            "UZS": {
                "name": "Uzbekistani soʻm",
                "symbol": "so'm"
            }
        },
        "capital": "Tashkent",
        "latlng": [
            41,
            64
        ],
        "area": 447400,
        "population": 34232050,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/uz.png",
            "svg": "https://flagcdn.com/uz.svg"
        },
        "capitalInfo": {
            "latlng": [
                41.32,
                69.25
            ]
        }
    },

    {
        "name": {
            "common": "Dominican Republic",
            "official": "Dominican Republic",
        },
        "currencies": {
            "DOP": {
                "name": "Dominican peso",
                "symbol": "$"
            }
        },
        "capital": "Santo Domingo",
        "latlng": [
            19,
            -70.66666666
        ],
        "area": 48671,
        "population": 10847904,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/do.png",
            "svg": "https://flagcdn.com/do.svg"
        },
        "capitalInfo": {
            "latlng": [
                18.47,
                -69.9
            ]
        }
    },

    {
        "name": {
            "common": "Mayotte",
            "official": "Department of Mayotte",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Mamoudzou",
        "latlng": [
            -12.83333333,
            45.16666666
        ],
        "area": 374,
        "population": 226915,
        "continent": "Africa",
        "flags": {
            "png": "https://flagcdn.com/w320/yt.png",
            "svg": "https://flagcdn.com/yt.svg"
        },
        "capitalInfo": {
            "latlng": [
                -12.78,
                45.22
            ]
        }
    },

    {
        "name": {
            "common": "Mongolia",
            "official": "Mongolia",
        },
        "currencies": {
            "MNT": {
                "name": "Mongolian tögrög",
                "symbol": "₮"
            }
        },
        "capital": "Ulan Bator",
        "latlng": [
            46,
            105
        ],
        "area": 1564110,
        "population": 3278292,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/mn.png",
            "svg": "https://flagcdn.com/mn.svg"
        },
        "capitalInfo": {
            "latlng": [
                47.92,
                106.91
            ]
        }
    },

    {
        "name": {
            "common": "Saint Pierre and Miquelon",
            "official": "Saint Pierre and Miquelon",
        },
        "currencies": {
            "EUR": {
                "name": "Euro",
                "symbol": "€"
            }
        },
        "capital": "Saint-Pierre",
        "latlng": [
            46.83333333,
            -56.33333333
        ],
        "area": 242,
        "population": 6069,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/pm.png",
            "svg": "https://flagcdn.com/pm.svg"
        },
        "capitalInfo": {
            "latlng": [
                46.77,
                -56.18
            ]
        }
    },

    {
        "name": {
            "common": "Samoa",
            "official": "Independent State of Samoa",
        },
        "currencies": {
            "WST": {
                "name": "Samoan tālā",
                "symbol": "T"
            }
        },
        "capital": "Apia",
        "latlng": [
            -13.58333333,
            -172.33333333
        ],
        "area": 2842,
        "population": 198410,
        "continent": "Oceania",
        "flags": {
            "png": "https://flagcdn.com/w320/ws.png",
            "svg": "https://flagcdn.com/ws.svg"
        },
        "capitalInfo": {
            "latlng": [
                -13.82,
                -171.77
            ]
        }
    },

    {
        "name": {
            "common": "Nicaragua",
            "official": "Republic of Nicaragua",
        },
        "currencies": {
            "NIO": {
                "name": "Nicaraguan córdoba",
                "symbol": "C$"
            }
        },
        "capital": "Managua",
        "latlng": [
            13,
            -85
        ],
        "area": 130373,
        "population": 6624554,
        "continent": "North America",
        "flags": {
            "png": "https://flagcdn.com/w320/ni.png",
            "svg": "https://flagcdn.com/ni.svg"
        },
        "capitalInfo": {
            "latlng": [
                12.13,
                -86.25
            ]
        }
    },

    {
        "name": {
            "common": "Bhutan",
            "official": "Kingdom of Bhutan",
        },
        "currencies": {
            "BTN": {
                "name": "Bhutanese ngultrum",
                "symbol": "Nu."
            },
            "INR": {
                "name": "Indian rupee",
                "symbol": "₹"
            }
        },
        "capital": "Thimphu",
        "latlng": [
            27.5,
            90.5
        ],
        "area": 38394,
        "population": 771612,
        "continent": "Asia",
        "flags": {
            "png": "https://flagcdn.com/w320/bt.png",
            "svg": "https://flagcdn.com/bt.svg"
        },
        "startOfWeek": "monday",
        "capitalInfo": {
            "latlng": [
                27.47,
                89.63
            ]
        }
    }
])