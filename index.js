var elasticsearch = require('elasticsearch');
var { getData } = require('./knex1');
var client = new elasticsearch.Client({
    host: '',
    log: 'trace',
    apiVersion: '7.4', // use the same version of your Elasticsearch instance
});

client.ping({
    // ping usually has a 3000ms timeout
    requestTimeout: 1000
}, function (error) {
    if (error) {
        console.trace('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});


getData('tableName', (res) => {
    let lower ='';
    for (let i = 0; res.length > i; i++) {
        lower = res[i].state;
        const data = lower.toLowerCase();
        try{
            console.log(data);
            client.index({
                index: data,
                body: {
                    data:{
                    'googleplacesid': res[i].googleplacesid,
                    'name': res[i].name,
                    'address': res[i].address,
                    'city': res[i].city,
                    'state': res[i].state,
                    'zip': res[i].zip,
                    'county': res[i].county,
                    'website': res[i].website,
                    'phone': res[i].phone
                    }
                }
            });
        }catch(e){
            console.log("error");
        }
    }
});