module.exports = {
    signup: require('./users/signup'),
    login: require('./users/login'),
    signout: require('./users/signout'),
    logout: require('./users/logout'),
    myWiseSayings: require('./myWiseSayings/myWiseSayingsList'),
    addMyWiseSayings: require('./myWiseSayings/addMyWiseSayings'),
    deleteMyWiseSayings: require('./myWiseSayings/deleteMyWiseSayings'),
    patchMyWiseSayings: require('./myWiseSayings/patchMyWiseSayings'),
    main: require('./makeRandomWiseSayings/main'),
    mypage: require('./makeRandomWiseSayings/mypage')
}