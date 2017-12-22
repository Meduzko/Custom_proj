var connection = require('../routes/connection.js').localConnect();

module.exports = function SaveRecord(req , res , next){

    var input = JSON.parse(JSON.stringify(req.body));

    var RecordDetailParsedFromForm = {

        actor_id    : input.actor_id,
        first_name : input.first_name,
        last_name   : input.last_name,
        last_update   : input.last_update

    };
    connection.query("INSERT INTO actor set ? ",RecordDetailParsedFromForm, function(err, rows)
    {

        if (err) 
            console.log("Error inserting : %s ",err );

        res.redirect('/customer');
        console.log(RecordDetailParsedFromForm);

    });


}