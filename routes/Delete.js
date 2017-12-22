var connection = require('../routes/connection.js').localConnect();

module.exports = function DeleteRecord(req , res , next){

    var id = req.params.id;
    connection.query("DELETE FROM actor  WHERE id = ? ",[id], function(err, rows)
    {

        if(err)
            console.log("Error deleting : %s ",err );

        res.redirect('/customer');
        console.log(id);

    });

}