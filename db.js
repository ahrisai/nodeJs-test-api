const Pool = require('pg').Pool

const pool=new Pool({
    user:'postgres',
    password:'BBQs@uce',
    host:'localhost',
    port:5432,
    database:'node_psql'

})

module.exports=pool

