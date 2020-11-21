const mongoose = require('mongoose')
/* mongoose.connect('mongodb://localhost/knowledge_stats', { useNewUrlParser: true }) */
 mongoose.connect('mongodb://localhost/knowledge_stats', mongoose.set('useNewUrlParser', true), mongoose.set('useUnifiedTopology', true))
    .catch(e => {
        const msg = 'ERRO! Não foi possível conectar com o MongoDB!'
        console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
    })