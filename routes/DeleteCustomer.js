var connection = require('../routes/connection.js').localConnect();

module.exports = function DeleteRecord(req , res , next){

    var id = req.params.id;
    console.log(id);
    connection.query("DELETE FROM actor  WHERE actor_id = ? ",[id], function(err, rows)
    {

        if(err)
            console.log("Error deleting : %s ",err );

        res.redirect('/customer');

    });

}