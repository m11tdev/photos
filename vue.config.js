module.exports = {
    // https://cli.vuejs.org/config/#publicpath
    publicPath: process.env.NODE_ENV === 'production' ? '/photos/' : '/',

    // https://cli.vuejs.org/config/#runtimecompiler
    runtimeCompiler: true,

    // https://cli.vuejs.org/config/#productionsourcemap
    productionSourceMap: false
};
