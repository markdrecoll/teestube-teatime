const blackTeaData = [
    {
        key: "0",
        menuNumber: "1",
        name: "Assam BOP CTC",
        price_50g: 2.30,
        price_100g: 4.15,
        price_250g: 12.44,
        type: "Indien Assam",
        description: "Schwerer, dunkler Brocken-Tee, gut mit Sahne zu trinken"
    },
    {
        key: "1",
        menuNumber: "2",
        name: "Assam FOP",
        price_50g: 2.65,
        price_100g: 4.75,
        price_250g: 11.60,
        type: "Indien Assam",
        description: "Gehaltvoller Blatt-Tee für jede Tageszeit"
    },
    {
        key: "2",
        menuNumber: "3",
        name: "Assam FBOP(Bazaloni)",
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.10,
        type: "Indien Assam",
        description: "Dunkel-Ziehender Tee, aus bester Pflückungsperiode"
    },
    {
        key: "3",
        menuNumber: "4",
        name: "Assam Malty TGFOP",
        price_50g: 3.85,
        price_100g: 7.25,
        price_250g: 17.85,
        type: "Indien Assam",
        description: "Herren Tee, dunkle Tasse malziger Geschmack"
    },
    {
        key: "4",
        menuNumber: "4.1",
        name: "Assam Mokalbari TGFOP",
        price_50g: 4.25,
        price_100g: 7.95,
        price_250g: 19.60,
        type: "Indien Assam",
        description: "Kräftig/malziger golden tippy-Assam-Blatt-Tee aus der Second Flush periode vom Mokalbari Garten"
    },
    {
        key: "5",
        menuNumber: "4.2",
        name: "Tippy Assam(Ronnefeldt)",
        price_50g: "",
        price_100g: 6.70,
        price_250g: 16.75,
        type: "Indien Assam",
        description: "Malzig, würzig, aber durch die Blattspitzen auch durchaus weich"
    },
    {
        key: "6",
        menuNumber: "5",
        name: "Assam Goldspitzen FTGFOP",
        price_50g: 4.10,
        price_100g: 7.70,
        price_250g: 19.00,
        type: "Indien Assam",
        description: "Vorzüglicher Assam Tee, mit vielen Goldspitzen"
    },
    {
        key: "7",
        menuNumber: "6",
        name: "Darjeeling OP Langview",
        price_50g: 3.30,
        price_100g: 6.05,
        price_250g: 14.85,
        type: "Indien Darjeeling",
        description: "Milder, blumiger Darjeeling Tee"
    },
    {
        key: "8",
        menuNumber: "6.1",
        name: "Darjeeling First/Second flush OP",
        price_50g: 3.70,
        price_100g: 6.90,
        price_250g: 17.10,
        type: "Indien Darjeeling",
        description: "Eine Mischung feinster First Flush u. kraftvoller Second Flush Darjeeling, herzhaft/blumig"
    },
    {
        key: "9",
        menuNumber: "6.2",
        name: "Darjeeling TGFOP Badamtaminbetween",
        price_50g: 3.70,
        price_100g: 6.90,
        price_250g: 17.00,
        type: "Indien Darjeeling",
        description: "Würzig-spritziges Aroma, geerntet zwischen der 1. Und 2. Pflückung"
    },
    {
        key: "10",
        menuNumber: "6.3",
        name: "Spring Darjeeling FTGFOP(Ronnefeldt)",
        price_50g: "",
        price_100g: 14.85,
        price_250g: 37.10,
        type: "Indien Darjeeling",
        description: "Frühjahr, unvergleichlich zarter, blumiger Spitzentee, wird nur im Frühjahr an den Südhängen des Himalajas geerntet"
    },
    {
        key: "11",
        menuNumber: "7",
        name: "Darjeeling GFOP Autumnal",
        price_50g: 3.70,
        price_100g: 6.90,
        price_250g: 17.35,
        type: "Indien Darjeeling",
        description: "Typischer Herbst Darjeeling, leicht, angenehm"
    },
    {
        key: "12",
        menuNumber: "9",
        name: "Darjeeling TGFOP Margrets Hope",
        price_50g: 3.85,
        price_100g: 7.15,
        price_250g: 17.80,
        type: "Indien Darjeeling",
        description: "Blatt Tee aus 2. Pflückungsperiode, abgerundeter Geschmack"
    },
    {
        key: "13",
        menuNumber: "10",
        name: "Darjeeling GFOP first flush Ambootia",
        price_50g: 5.10,
        price_100g: 9.65,
        price_250g: 23.85,
        type: "Indien Darjeeling",
        description: "Zarter Frühjahrs-Tee von bester Qualität, blumig, angenehm duftend"
    },
    {
        key: "14",
        menuNumber: "11",
        name: "Darjeeling FTGFOP first Flush Orange-Valley",
        price_50g: 6.30,
        price_100g: 12.10,
        price_250g: 30.00,
        type: "Indien Darjeeling",
        description: ""
    },
    {
        key: "15",
        menuNumber: "11.1",
        name: "DarjeelingFTGFOP First Flush Namring",
        price_50g: 8.35,
        price_100g: 16.22,
        price_250g: 40.25,
        type: "Indien Darjeeling",
        description: "Vollblumiger, spritzig-herber Frühlings-Darjeeling der Spitzenklasse"
    },
    {
        key: "16",
        menuNumber: "FT",
        name: "Flugtee Darjeeling Saisonal Snowview",
        price_50g: 6.95,
        price_100g: 13.50,
        price_250g: 33.50,
        type: "Indien Darjeeling",
        description: "Tolle Frische, spritziger Frühlings-Darjeeling, ca. von März bis Juni"
    },
    {
        key: "17",
        menuNumber: "",
        name: "Darjeeling-Teeaktion, Schadstoffkontrolliert",
        price_50g: "",
        price_100g: "",
        price_250g: "",
        type: "Indien Darjeeling",
        description: "500 gr €22,00"
    },
    {
        key: "18",
        menuNumber: "12",
        name: "Dooars",
        price_50g: 2.45,
        price_100g: 4.40,
        price_250g: 10.35,
        type: "Indien Himalaya",
        description: "Südindischer Blatt-Tee, angenehmes Aroma"
    },
    {
        key: "19",
        menuNumber: "13",
        name: "Golden Nepal GFOP",
        price_50g: 3.30,
        price_100g: 6.05,
        price_250g: 15.00,
        type: "Indien Himalaya",
        description: "Ausgeprägter Hochland-Tee, kräftiger als der Nachbar Darjeeling"
    },
    {
        key: "20",
        menuNumber: "13.1",
        name: "Sikkim FTGFOP First Flush",
        price_50g: 4.25,
        price_100g: 7.95,
        price_250g: 17.85,
        type: "Indien Himalaya",
        description: ""
    },
    {
        key: "21",
        menuNumber: "13.2",
        name: "Golden Nepal TGFOP (Ronnefeldt)",
        price_50g: "",
        price_100g: 7.60,
        price_250g: 19.00,
        type: "Indien Himalaya",
        description: ""
    },
    {
        key: "22",
        menuNumber: "14",
        name: "Ceylon BOP medium",
        price_50g: 2.25,
        price_100g: 3.95,
        price_250g: 9.60,
        type: "Ceylon",
        description: "Aromatischer Brocken-Tee, gut zum Mischen"
    },
    {
        key: "23",
        menuNumber: "15",
        name: "Ceylon OP",
        price_50g: 3.60,
        price_100g: 6.70,
        price_250g: 16.50,
        type: "Ceylon",
        description: "Pettiagalla, großes, langes Blatt, leicht bekömmlicher, würziger, Hochland-Tee"
    },
    {
        key: "24",
        menuNumber: "16",
        name: "Ceylon OP Sommer/Herbst (Ronnefeldt)",
        price_50g: "",
        price_100g: 5.60,
        price_250g: 14.00,
        type: "Ceylon",
        description: "Ausgewogene Mischung aus den Gärten des Dimbula im Südwesten der Insel, ergiebig u. aromatisch"
    },
    {
        key: "25",
        menuNumber: "17",
        name: "Ceylon BOP Uva",
        price_50g: 2.70,
        price_100g: 4.85,
        price_250g: 11.85,
        type: "Ceylon",
        description: "Hervorragende Qualität, herb-Kräftiger Tee aus dem Distrikt Uva"
    },
    {
        key: "26",
        menuNumber: "18",
        name: "Ceylon OP Nuwara Eliya",
        price_50g: 3.85,
        price_100g: 7.15,
        price_250g: 17.60,
        type: "Ceylon",
        description: "Exzellenter Hochland-Tee, kräftig im Geschmack"
    },
    {
        key: "27",
        menuNumber: "19",
        name: "Ceylon FOP Kandy",
        price_50g: 3.30,
        price_100g: 6.05,
        price_250g: 14.85,
        type: "Ceylon",
        description: "Spitzenqualität, mild, großes Blatt, geeignet für hartes Wasser"
    },
    {
        key: "28",
        menuNumber: "28",
        name: "Infree",
        price_50g: 4.70,
        price_100g: 8.80,
        price_250g: 21.75,
        type: "Ceylon",
        description: "Ceylon Brocken-Tee, dem durch ein Spezialverfahren das Teein weitgehend entzogen wurde"
    },
    {
        key: "29",
        menuNumber: "20",
        name: "Mate Tee grün, Argentinien",
        price_50g: 1.90,
        price_100g: 3.30,
        price_250g: 8.00,
        type: "Verschiedene Länder",
        description: "Aus Blättern des Erva-Mate Baumes, stark anregend"
    },
    {
        key: "30",
        menuNumber: "20.1",
        name: "Mate Tee geröstet",
        price_50g: 1.90,
        price_100g: 3.30,
        price_250g: 8.00,
        type: "Verschiedene Länder",
        description: ""
    },
    {
        key: "31",
        menuNumber: "21",
        name: "Sumarta",
        price_50g: 2.50,
        price_100g: 4.50,
        price_250g: 11.00,
        type: "Verschiedene Länder",
        description: "Kräftig, indonesischer Schwarz-Tee"
    },
    {
        key: "32",
        menuNumber: "22",
        name: "Lapacho",
        price_50g: 2.35,
        price_100g: 4.15,
        price_250g: 10.00,
        type: "Verschiedene Länder",
        description: "Rinde des roten Lapachobaumes, Südamerika"
    },
    {
        key: "33",
        menuNumber: "24",
        name: "Türkische Mischung",
        price_50g: 2.70,
        price_100g: 4.85,
        price_250g: 11.85,
        type: "Verschiedene Länder",
        description: "Kräftiger Schwarz-Tee"
    },
    {
        key: "34",
        menuNumber: "25",
        name: "Java",
        price_50g: 2.50,
        price_100g: 4.50,
        price_250g: 11.00,
        type: "Verschiedene Länder",
        description: "Dunkelziehender Schwarz-Tee, geeignet zum Mischung"
    },
    {
        key: "35",
        menuNumber: "30",
        name: "Kenya Pekoe Highgrown",
        price_50g: 3.60,
        price_100g: 6.70,
        price_250g: 16.50,
        type: "Afrika",
        description: "Afriikanischer Schwarz-Tee, fein-herbes Aroma"
    },
    {
        key: "36",
        menuNumber: "31",
        name: "Tee Le Touarec",
        price_50g: 2.50,
        price_100g: 5.00,
        price_250g: 12.00,
        type: "Afrika",
        description: "Grüner China Gunpowder mit erfrischendem Minzgeschmack"
    },
    {
        key: "37",
        menuNumber: "32",
        name: "Grusinien BOP",
        price_50g: 2.70,
        price_100g: 4.85,
        price_250g: 11.75,
        type: "Russland",
        description: "Orginal Russischer Schwarz- Tee mit wenig Gerbsäure"
    },
    {
        key: "38",
        menuNumber: "34",
        name: "Russische Mischung",
        price_50g: 2.70,
        price_100g: 4.85,
        price_250g: 11.75,
        type: "Russland",
        description: "Kräftige und aromatische Blattmischung aus Assam, China und Darjeeling Tee"
    },
    {
        key: "39",
        menuNumber: "35",
        name: "English Blend Brocken Tea",
        price_50g: 2.50,
        price_100g: 5.00,
        price_250g: 12.00,
        type: "England (Hauptbestandteil: Ceylon)",
        description: ""
    },
    {
        key: "40",
        menuNumber: "35/1",
        name: "English Breakfast Tea",
        price_50g: 2.85,
        price_100g: 5.20,
        price_250g: 12.75,
        type: "England (Hauptbestandteil: Ceylon)",
        description: ""
    },
    {
        key: "41",
        menuNumber: "36",
        name: "Ostfriesen Brocken Mischung",
        price_50g: 2.60,
        price_100g: 4.65,
        price_250g: 11.35,
        type: "Ostfriesland (enthält zu 90% Assam-Tee)",
        description: "Ostfriesen Mischung, dunkel Tasse Und durch mild"
    },
    {
        key: "42",
        menuNumber: "37",
        name: "Ostfriesen Blatt Mischung",
        price_50g: 2.85,
        price_100g: 5.20,
        price_250g: 12.75,
        type: "Ostfriesland (enthält zu 90% Assam-Tee)",
        description: ""
    },
    {
        key: "43",
        menuNumber: "28",
        name: "Infree",
        price_50g: 4.70,
        price_100g: 8.80,
        price_250g: 21.75,
        type: "Infree Tee",
        description: "Ceylon Tee, dem durch ein Spezialverfahren das Teein weitgehend entzogen wurde"
    },
    {
        key: "44",
        menuNumber: "45/4",
        name: "Greenfield light teeinfrei",
        price_50g: 3.70,
        price_100g: 6.90,
        price_250g: 17.00,
        type: "Infree Tee",
        description: "Sympathischer China Sencha, angenehmer Geschmack"
    },
    {
        key: "45",
        menuNumber: "49",
        name: "Tarry Lapsangsouchong",
        price_50g: 3.00,
        price_100g: 5.50,
        price_250g: 13.35,
        type: "China Schwarz-Tee",
        description: "Über Holzfeuer geräucherter China Tee, sehr intensiv"
    },
    {
        key: "46",
        menuNumber: "50",
        name: "Szechwan Black",
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.35,
        type: "China Schwarz-Tee",
        description: "Schwarzer China-Tee, weich im Geschmack, wenig teein"
    },
    {
        key: "47",
        menuNumber: "51",
        name: "Keemun Black",
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.35,
        type: "China Schwarz-Tee",
        description: "Feiner China-Tee, teeinarm, gut für abends und für den Magen-Darm-Trakt"
    },
    {
        key: "48",
        menuNumber: "51/1",
        name: "Keemun (Ronnefeldt)",
        price_50g: "",
        price_100g: 5.50,
        price_250g: 13.25,
        type: "China Schwarz-Tee",
        description: "EleganterTee aus China für Teetrinker, die leichte, weiche Chinatees und ihre mild anregende"
    },
    {
        key: "49",
        menuNumber: "52",
        name: "Golden Yunnan",
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.35,
        type: "China Schwarz-Tee",
        description: "Schwarzer China Tee, weich in der Tasse"
    },
    {
        key: "50",
        menuNumber: "52/1",
        name: "Pu-Erh Tee, first grade Blatttgrad 3",
        price_50g: 2.75,
        price_100g: 5.60,
        price_250g: 13.75,
        type: "China Schwarz-Tee",
        description: "Beste Qualität, typisches Aroma, tippy"
    },    
]

export default blackTeaData;