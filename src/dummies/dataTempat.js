
const dataTempat = [{
    id: 1,
    title: 'Polres Bandung',
    address: 'Jl. Bhayangkara No.1, Soreang, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40239',
    category: {
        id:5,
        name: 'Service'
    },
    jadwal: [{
        id:1,
        date: '19/02/2022',
        name: '16.00 - 17.00'
    },{
        id:2,
        date: '19/02/2022',
        name: '17.00 - 17.30'
    },{
        id:3,
        date: '19/02/2022',
        name: '18.00 - 19.00'
    },{
        id:4,
        date: '20/02/2022',
        name: '20.00 - 21.00'
    },{
        id:5,
        date: '20/02/2022',
        name: '16.00 - 17.00'
    },{
        id:6,
        date: '20/02/2022',
        name: '17.00 - 17.30'
    },{
        id:7,
        date: '20/02/2022',
        name: '18.00 - 19.00'
    },{
        id:8,
        date: '20/02/2022',
        name: '20.00 - 21.00'
    }],
    layanan: [{
        id:1,
        name: 'Sim'
    }, {
        id:2,
        name: 'Pelaporan'
    }],
    status:'Buka',
    source: require('../assets/images/tempat/polres_bandung.png'),
    description: 'Perpanjang SIM anti ribet-ribet.'
},{
    id: 2,
    address: 'Kec. Maja, Kabupaten Lebak, Banten',
    category: {
        id:3,
        name: 'Ticket'
    },
    jadwal: [{
        id:1,
        name: '16.00 - 17.00'
    },{
        id:2,
        name: '17.00 - 17.30'
    },{
        id:3,
        name: '18.00 - 19.00'
    },{
        id:4,
        name: '20.00 - 21.00'
    }],
    layanan: [{
        id:1,
        name: 'Wisata'
    }, {
        id:2,
        name: 'Food Court'
    }],
    status:'Tutup',
    title: 'Curug Badak Banten',
    source: require('../assets/images/tempat/curug_badak.jpg'),
    description: 'Bingung mau liburan kemana? curugin aja.'
}];

export default dataTempat;