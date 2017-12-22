var connection = require('../routes/connection.js').localConnect();

module.exports = function SaveRecord(req , res , next){

    var id = req.params.id;

    var input = JSON.parse(JSON.stringify(req.body));

    var RecordDetailParsedFromForm = {

        actor_id    : input.actor_id,
        first_name : input.first_name,
        last_name   : input.last_name,
        last_update   : input.last_update

    };
    connection.query("UPDATE actor set ? WHERE actor_id=?",[RecordDetailParsedFromForm,id], function(err, rows)
    {

        if (err)
            console.log("Error inserting : %s ",err );

        res.redirect('/customer');
        console.log(id);
        console.log(input);
        console.log("Updated" + input);

    });


}