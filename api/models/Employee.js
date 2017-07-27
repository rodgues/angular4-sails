/**
 * Employee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

 //You can see the model for Angular into /src/app/model/Employee.js
 module.exports = {

     autoCreatedAt: false,

     autoUpdatedAt: false,

     //see /config/connections.js
     //connection: 'someMysqlServer',
     connection: 'localDiskDb',

     tableName : 'employee',

     attributes: {

         id: {

             type: 'INTEGER',

             columnName: 'emp_id',

             primaryKey: true,

             autoIncrement: true

         },

         fullname: 'STRING',

         emailid: 'STRING',

         phonenumber: 'STRING',

     }

 };
