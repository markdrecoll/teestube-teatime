const fruitTeaData = [
    {
        key: '1',
        name: 'Adventstee (natürlicher Gewürztee)',
        price_50g: 2.15,
        price_100g: 3.80,
        price_250g: 9.25,
        type: 'Früchte-Tee',
        description: 'Mit Granatapfel-Note; Apfelstücke/-Würfel, Hibiskus-/Ringelblumenblüten, Ananasflocken, Rosenknospen, Aroma'
    },
    {
        key: '2',
        name: 'Erdbeer-Sahne',
        price_50g: 2.45,
        price_100g: 4.40,
        price_250g: 12.00,
        type: 'Früchte-Tee',
        description: 'Mit Erdbeerblütern und Vanille-Sahne Geschmack'
    },
    {
        key: '3',
        name: 'Feige-Maracuja',
        price_50g: 2.90,
        price_100g: 5.25,
        price_250g: 12.90,
        type: 'Früchte-Tee',
        description: 'Feigen, Apfel-/Bananen-/Karottenstücke, Hibiskus, Hagebutte, Maracjafruchtgranulat, Sultana Rosinen, Aroma'
    },
    {
        key: '4',
        name: 'Fruity Ginger',
        price_50g: 2.90,
        price_100g: 5.25,
        price_250g: 12.90,
        type: 'Früchte-Tee',
        description: 'Birnen-/Apfel-/Feigen-/Papayastücke, Melonenwürfel, Ingwer, roter Pfeffer, rote Rosenknospen, natürliche Zitronensäure, Rosenblütenblätter, Aroma'
    },
    {
        key: '5',
        name: 'Fruits Only (ohne zusatz von Aroma)',
        price_50g: 3.00,
        price_100g: 5.45,
        price_250g: 13.35,
        type: 'Früchte-Tee',
        description: 'Apfelstücke, Ananaswürfel, Papayawürfel, Mango Würfel, Hagebuttenschalen, Hibiskusblüten, Mandarinorangenfrucht, Himbeeren, Erdbeer- und Cranberryscheiben. Ananas-, Mango-, Papaya sind gezuckert'
    },
    {
        key: '6',
        name: 'Kirmes-Mandel ',
        price_50g: 2.75,
        price_100g: 5.00,
        price_250g: 12.00,
        type: 'Früchte-Tee',
        description: 'Ein Geschmackerlebnis; Apfelstücke mit karamellisierter gerösteter Mandel, Zimtstücke'
    },
    {
        key: '7',
        name: 'Zitronenbaum',
        price_50g: 2.50,
        price_100g: 4.50,
        price_250g: 11.00,
        type: 'Früchte-Tee',
        description: 'Apfel, Hagebuttenschalen, Korinthen, Holunderbeeren, Karottenstücke, Zitronenfruchtstücke, Lemongras und Hibiskus. Wunderbar leicht, mild und fruchtig, Belebend durch die zarte Frische des Lemongras'
    },
    {
        key: '8',
        name: 'Mainzer Früchtchen ',
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.10,
        type: 'Früchte-Tee',
        description: 'Fruchtig, sahnig, cremig weich im Geschmack'
    },
    {
        key: '9',
        name: 'Mango & Friends säurearm',
        price_50g: 3.75,
        price_100g: 7.00,
        price_250g: 17.25,
        type: 'Früchte-Tee',
        description: 'Ananas-/Mangowürfel, Orangenspalten, gefr.-getr. Mandarinenorangen- u. Erdbeerstücke, Ringelblumen, Fäberdisteln, Aroma'
    },
    {
        key: '10',
        name: 'Maracuja',
        price_50g: 2.50,
        price_100g: 4.50,
        price_250g: 11.00,
        type: 'Früchte-Tee',
        description: 'Orange mit Sonnenblumenblüten'
    },
    {
        key: '11',
        name: 'Natur-Früchtetee',
        price_50g: 2.50,
        price_100g: 4.50,
        price_250g: 11.00,
        type: 'Früchte-Tee',
        // description: ''
    },
    {
        key: '12',
        name: 'Orientalische Kostbarkeiten ',
        price_50g: 3.00,
        price_100g: 5.50,
        price_250g: 13.00,
        type: 'Früchte-Tee',
        description: 'Apfel, Feigenstücke, kandierte Papayastücke, kandierte Ananasstücke, Zitronenschalen, Dattelstücke, Granatapfelstücke, Malvenblüten, Lycheestücke, Aroma'
    },
    {
        key: '13',
        name: 'Pina Colada',
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.10,
        type: 'Früchte-Tee',
        description: 'Ananas-Kokos-Geschmack mit Ananasstücken und Kokosraspel'
    },
    {
        key: '14',
        name: 'Rumtopf mit Naturrum und Beeren',
        price_50g: 2.65,
        price_100g: 4.75,
        price_250g: 11.60,
        type: 'Früchte-Tee',
        // description: ''
    },
    {
        key: '15',
        name: 'Sommerpunsch Säurearm ',
        price_50g: 2.85,
        price_100g: 5.20,
        price_250g: 12.75,
        type: 'Früchte-Tee',
        description: 'Mango-Ananas-Geschmack, geeignet für Früchtekaltgetränk'
    },
    {
        key: '16',
        name: 'Türk. Apfeltee Joghurt-Limette',
        price_50g: 2.50,
        price_100g: 4.50,
        price_250g: 11.00,
        type: 'Früchte-Tee',
        // description: ''
    },
    {
        key: '17',
        name: 'Vanille-Sahne',
        price_50g: 2.50,
        price_100g: 4.50,
        price_250g: 11.00,
        type: 'Früchte-Tee',
        description: 'mit Vanille Sahne-Geschmack'
    },
    {
        key: '18',
        name: 'Weihnachtstee',
        price_50g: 2.85,
        price_100g: 5.20,
        price_250g: 12.75,
        type: 'Früchte-Tee',
        description: 'Mit Zimt, Vanille, Ingwer, Lemon, Nelken, Naturrum, Mandarine, Orange, Orangenschale u. -blüten'
    },
    {
        key: '19',
        name: 'Wildkirsch mit Kirschen',
        price_50g: 2.65,
        price_100g: 4.75,
        price_250g: 11.60,
        type: 'Früchte-Tee',
        // description: ''
    },
    {
        key: '20',
        name: 'Winterabend',
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.10,
        type: 'Früchte-Tee',
        description: 'Apfel-/Mandelstücke, Hibiskus, Hagebuttenschalen, Zimtstücke, Rooibos, Mandelblätter, echte Bourbon Vanillestücke, natürliches Aroma'
    },
    {
        key: '21',
        name: 'Zabervogel',
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.10,
        type: 'Früchte-Tee',
        description: 'Hagebutten, Hibiskus, Korinthen, Papaya, Orangenschalen, Rosenund Kornbl'
    }
]

export default fruitTeaData;