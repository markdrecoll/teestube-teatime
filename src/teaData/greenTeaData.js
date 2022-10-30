const greenTeaData = [
    {
        key: "1",
        menuNumber: "39",
        name: "Japan Sencha BIO",
        price_50g: 5.20,
        price_100g: 9.90,
        price_250g: 24.50,
        type: "Japan Grüntee",
        description: "Grüner, großblättriger Japan-Tee, Spitzenqualität"
    },
    {
        key: "2",
        menuNumber: "40/1",
        name: "Japan Genmaicha",
        price_50g: 3.05,
        price_100g: 5.45,
        price_250g: 13.60,
        type: "Japan Grüntee",
        // description: ""
    },
    {
        key: "3",
        menuNumber: "40/2",
        name: "Japan Kukicha BIO",
        price_50g: 5.70,
        price_100g: 10.90,
        price_250g: 27.15,
        type: "Japan Grüntee",
        description: "Eine typische Japanische Tee-Spezialität, langes, flaches, hell- und dunkelgrüne Blatt, wenig teein"
    },
    {
        key: "4",
        menuNumber: "40/3",
        name: "Bancha (Japan type)",
        price_50g: 3.10,
        price_100g: 5.60,
        price_250g: 13.75,
        type: "Japan Grüntee",
        // description: ""
    },
    {
        key: "5",
        menuNumber: "40/5",
        name: "Matcha BIO",
        // price_50g: ,
        // price_100g: ,
        // price_250g: ,
        type: "Japan Grüntee",
        description: "Japan Original Premium: 30 gr in Dose 39,00"
        // original text was 30 gr in Dose 39,00
    },
    {
        key: "6",
        menuNumber: "41",
        name: "Chun Mee",
        price_50g: 2.25,
        price_100g: 4.00,
        price_250g: 9.75,
        type: "China Grüntee",
        description: "Fein-herber Geschmack, gelblicher Aufgu0, besonders anregend"
    },
    {
        key: "7",
        menuNumber: "42",
        name: "Gunpowder",
        price_50g: 2.70,
        price_100g: 4.85,
        price_250g: 11.85,
        type: "China Grüntee",
        description: "Kugelförmig eingerolltes Blatt, heller Aufguß, sehr anregend, mehrmals aufgießen"
    },
    {
        key: "8",
        menuNumber: "43",
        name: "Tempel of Heaven, Bio",
        price_50g: 3.00,
        price_100g: 5.45,
        price_250g: 13.35,
        type: "China Grüntee",
        description: "Berühmt als der Beste aller grünen Tees, sehr anregend, mehrmals Aufgießen"
    },
    {
        key: "9",
        menuNumber: "45/2",
        name: "Pu Erh Tee grün (gepreßter Pu Erh Tee)",
        // price_50g: ,
        // price_100g: ,
        // price_250g: ,
        type: "China Grüntee",
        description: "Stück 1,30"
    },
    {
        key: "10",
        menuNumber: "45/4",
        name: "Greenfield light teein frei",
        price_50g: 3.70,
        price_100g: 6.90,
        price_250g: 17.00,
        type: "China Grüntee",
        description: "Sympathischer China Sencha, reine Tasse, angenehmer Geschmack"
    },
    {
        key: "11",
        menuNumber: "45/5",
        name: "China Grün Yunnan",
        price_50g: 3.25,
        price_100g: 6.00,
        price_250g: 14.75,
        type: "China Grüntee",
        // description: ""
    },
    {
        key: "12",
        menuNumber: "40/4",
        name: "Gyokuro Hikari(Japan type)",
        price_50g: 13.50,
        price_100g: 26.30,
        price_250g: 65.75,
        type: "China Grüntee",
        description: "Der erlesenste Sencha, im Schattenhaus gezogen, tiefgrünes Blatt"
    },
    {
        key: "13",
        menuNumber: "53",
        name: "Jasmin Tee",
        price_50g: 2.60,
        price_100g: 4.60,
        price_250g: 11.25,
        type: "China Grüntee",
        description: "Halbfermentierter Tee mit duftenden Jasmin Blüten"
    },
    {
        key: "14",
        menuNumber: "53/1",
        name: "Jasmin the Best",
        price_50g: 3.55,
        price_100g: 6.60,
        price_250g: 16.25,
        type: "China Grüntee",
        // description: ""
    },
    {
        key: "15",
        menuNumber: "53/2",
        name: "Jasmin Xian Yu (Ronnefeldt)",
        // price_50g: ,
        price_100g: 10.90,
        price_250g: 27.25,
        type: "China Grüntee",
        // description: ""
    },
    {
        key: "16",
        menuNumber: "45",
        name: "Pai Mu Tan BIO",
        price_50g: 5.70,
        price_100g: 10.90,
        price_250g: 27.10,
        type: "China weißtee",
        description: "Feinste Blattspitzen, so gut wie Teerose"
    },
    {
        key: "17",
        menuNumber: "45/3",
        name: "China Silverneedle BIO",
        price_50g: 12.35,
        price_100g: 24.20,
        price_250g: 60.25,
        type: "China weißtee",
        description: "Erste Grade, ein Blattsprossen-Tee der besten Qualität, von Hand Gepflückt, helle Tasse, zartes Aroma"
    },
    {
        key: "18",
        menuNumber: "45/8",
        name: "Weißer Mangotraum (Ronnefeldt)",
        // price_50g: ,
        price_100g: 7.60,
        price_250g: 19.00,
        type: "China weißtee",
        description: "Pai Mu Tan mit Mango-Bergamotte-Geschmack, ein leichter und duftiger Tee, der wenig Teein enthält"
    },
    {
        key: "19",
        menuNumber: "45/6",
        name: "Formosa Pouchong",
        price_50g: 9.90,
        price_100g: 19.25,
        price_250g: 48.10,
        type: "Formosa (Taiwan) Grüntee",
        description: "Ein sehr milder grüner Tee mit einer phantastischen süße, grüner Oolong"
    },
    {
        key: "20",
        menuNumber: "45/7",
        name: "Formosa Pi La Chun",
        price_50g: 5.25,
        price_100g: 10.00,
        price_250g: 26.75,
        type: "Formosa (Taiwan) Grüntee",
        description: "Eine der großen Grüntee-Spezialitäten – aufwändig hergestelltes, feindrahtiges Blatt von blumiger Eleganz"
    },
    {
        key: "21",
        menuNumber: "47",
        name: "Formosa Fine Oolong",
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.35,
        type: "Formosa (Taiwan) Grüntee",
        description: "Zarter Oolong-Tee, hell in der Tasse, schwarzer Oolong"
    },
    {
        key: "22",
        menuNumber: "46",
        name: "TitKoon Yum",
        price_50g: 2.85,
        price_100g: 5.20,
        price_250g: 12.75,
        type: "China Oolong-Tee (schwarzer Drachen, Halb fermentiert)",
        description: "Belebender Oolng-Tee, sehr würzig"
    },
    {
        key: "23",
        menuNumber: "48",
        name: "Kwai Flower",
        price_50g: 3.20,
        price_100g: 5.85,
        price_250g: 14.35,
        type: "China Oolong-Tee (schwarzer Drachen, Halb fermentiert)",
        description: "Großblätriger China-Tee, dezenter Geschmack, erinnert an Pfirsich"
    },
    {
        key: "24",
        menuNumber: "60",
        name: "Orangenblüten Oolong",
        price_50g: 3.00,
        price_100g: 5.45,
        price_250g: 13.35,
        type: "China Oolong-Tee (schwarzer Drachen, Halb fermentiert)",
        // description: ""
    },
    {
        key: "25",
        menuNumber: "GTR1",
        name: "Ceylon Watawalla Spezial FOP, BIO",
        // price_50g: ,
        price_100g: 9.35,
        price_250g: 22.55,
        type: "Verschiedene Länder Grüntee (Ronnefeldt)",
        // description: ""
    },
    {
        key: "26",
        menuNumber: "GTR2",
        name: "Assam Khongea TGFOP",
        // price_50g: ,
        price_100g: 6.85,
        price_250g: 17.10,
        type: "Verschiedene Länder Grüntee (Ronnefeldt)",
        // description: ""
    },
    {
        key: "27",
        menuNumber: "GTR3",
        name: "Darjeeling North Tukvar TGFOP, BIO",
        // price_50g: ,
        price_100g: 7.60,
        price_250g: 19.00,
        type: "Verschiedene Länder Grüntee (Ronnefeldt)",
        // description: ""
    },
    {
        key: "28",
        menuNumber: "GTR4",
        name: "China Keemun Con",
        // price_50g: ,
        price_100g: 5.40,
        price_250g: 13.50,
        type: "Verschiedene Länder Grüntee (Ronnefeldt)",
        // description: ""
    }
]

export default greenTeaData;