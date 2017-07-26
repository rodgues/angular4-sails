/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing Employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {



 add: function(req, res){

var pippo = req.query.foo;
sails.log.debug('Success', pippo);

         var employee = {fullname: 'abc',emailid : 'xyz@abc.com',phonenumber : '0000010000'};

         Employee.create(employee).exec(function(err, result){

             if (err) {

                 sails.log.debug('Some error occured ' + err);

                 return res.json(500, { error: 'Some error occured' });

             }

             sails.log.debug('Success', JSON.stringify(result));

             return res.json(200, { success: 'Success' });

         });

     }

 };
