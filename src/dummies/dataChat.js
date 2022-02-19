const dataChat = [{
    id: 1,
    from : 'Polres Bandung',
    status:'READ',
    message: 'Apakah besok buka?',
    img: require('../assets/images/tempat/polres_bandung.png')
}];

const detailChat = [{
    id:1,
    from: 'user',
    status:'read',
    message: 'Assalamuallaikum'
}, {
    id:2,
    from: 'target',
    status:'read',
    message:'Waalaikumsallam'
}, {
    id:3,
    from: 'user',
    status:'unread',
    message:'Mau tanya min'
},{
    id:4,
    from: 'user',
    status:'unread',
    message:'Apakah besok buka?'
}];

export {
    dataChat,
    detailChat
}