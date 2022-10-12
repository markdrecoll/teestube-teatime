const blackTeaData = [
    {
        key: '1',
        name: 'Assam BOP CTC',
        price_50g: 2.30,
        price_100g: 4.15,
        price_250g: 12.44,
        type: 'Indien Assam',
        description: 'Schwerer, dunkler Brocken-Tee, gut mit Sahne zu trinken'
    },
    {
        key: '2',
        name: 'Assam FOP',
        price_50g: 2.65,
        price_100g: 4.75,
        price_250g: 11.60,
        type: 'Indien Assam',
        description: 'Gehaltvoller Blatt-Tee für jede Tageszeit'
    },
    {
        key: '3',
        name: 'Assam FBOP(Bazaloni)',
        price_50g: 2.75,
        price_100g: 4.95,
        price_250g: 12.10,
        type: 'Indien Assam',
        description: 'Dunkel-Ziehender Tee, aus bester Pflückungsperiode'
    },
    {
        key: '4',
        name: 'Assam Malty TGFOP',
        price_50g: 3.85,
        price_100g: 7.25,
        price_250g: 17.85,
        type: 'Indien Assam',
        description: 'Herren Tee, dunkle Tasse malziger Geschmack'
    },
    {
        key: '5',
        name: 'Assam Mokalbari TGFOP',
        price_50g: 4.25,
        price_100g: 7.95,
        price_250g: 19.60,
        type: 'Indien Assam',
        description: 'Kräftig/malziger golden tippy-Assam-Blatt-Tee aus der Second Flush periode vom Mokalbari Garten'
    },
    {
        key: '6',
        name: 'Tippy Assam(Ronnefeldt)',
        // price_50g: ,
        price_100g: 6.70,
        price_250g: 16.75,
        type: 'Indien Assam',
        description: 'Malzig, würzig, aber durch die Blattspitzen auch durchaus weich'
    },
    {
        key: '7',
        name: 'Assam Goldspitzen FTGFOP',
        price_50g: 4.10,
        price_100g: 7.70,
        price_250g: 19.00,
        type: 'Indien Assam',
        description: 'Vorzüglicher Assam Tee, mit vielen Goldspitzen'
    },
    // {
    //     key: '8',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '9',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '10',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '11',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '12',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '13',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '14',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '15',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '16',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '17',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '18',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '19',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '20',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '21',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '22',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '23',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '24',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '25',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '26',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '27',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '28',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '29',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '30',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '31',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '32',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '33',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '34',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '35',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '36',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '37',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '38',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '39',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '40',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '41',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '42',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '43',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '44',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '45',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '46',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '47',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '48',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '49',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },
    // {
    //     key: '50',
    //     name: 'aaa',
    //     price_50g: 123,
    //     price_100g: 123,
    //     price_250g: 123,
    //     type: 'ccc',
    //     description: 'ddd'
    // },    
]

export default blackTeaData;