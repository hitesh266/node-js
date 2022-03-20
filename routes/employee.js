
var express = require('express');
var router = express.Router();
var UserModel = require('../models/employee');

  
// Get All Employees
/**
* @swagger
* /get-all-employee:
*   get:
*       description: API to manage your employee
*       response :
*                 '201':
*                       description: Sucecss 
*/
 
router.get('/get-all-employee', (req, res) => {
  UserModel.find((error, data) => {
      if (!error) {
        res.json(data)
        //console.log('Data updated successfully')
      } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
      }
    })
  });

// Get single employee
/**
* @swagger
*     /get-employee/{id}:
*                       get:
*                           description: API to manage your employee
*                           response:
*                                     '201': 
*                                           description: Sucecss
*/
router.get('get-employee/:id',(req, res) => {
   UserModel.findById(req.params.id, (error, data) => {
      if (!error) {
        res.json(data)
      } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
      }
    })
  });

// Add Employee
/**
*  @swagger
*          /add-employee:
*                        post:
*                              description: Save the employee deytails
*                              response :
*                                        '201':
*                                             description: Sucecss 
*/
router.post('/add-employee',(req, res, next) => {
    UserModel.create(req.body, (error, data) => {
      if (!error) {
        res.json(data)
        console.log('Data Inserted successfully')
      } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
      }
    })
  });

// Update employee
/**
*   @swagger
*         /update-employee/{id}:
*                               put:
*                                    description: API to manage your employee
*                                    response :
*                                               '201': 
*/
router.put('/update-employee/:id',(req, res, next) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body , (error, data) => {
      if (!error) {
        res.json(data)
        console.log('Data updated successfully')
      } else {
        
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
      }
    })
  });

  // Delete employee
    /**
 *   @swagger
 *   /delete-employee/{id} :
 *                 delete:
*                   description: API to manage your employee
*response :
*'201': 
 */
router.delete('/delect-employee/:id',(req, res, next) => {
    UserModel.findByIdAndRemove(req.params.id, (error, data) => {
      if (!error) {
        res.json(data)
        console.log('Data Deleted successfully')
      } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
        }
  })
});
  
module.exports = router;