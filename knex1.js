var knex = require('./knex');


module.exports = {
    getData: function (table, cb) {
        knex(table).select('*').limit(20).then((res) => {
            cb(res);
            return res;
        });
    }
}