const { personalityInsights } = require('../app')
const AWS = require('aws-sdk')
const config = require('../config/config')

AWS.config.update(config.aws_local_config)

const docClient = new AWS.DynamoDB.DocumentClient()

exports.getData = (req, res) => {
    function data (){
        personalityInsights.profile({ content: req.body })
            .then(response => {
                const obj = response
                // res.json(obj)
                const params = {
                    TableName: config.table_products,
                    Item: obj
                }
                docClient.put(params, (err, data) => {
                    if(err){
                        res.json(err.message)
                    }else{
                        res.json(data)
                    }
                }) 
            })
            .catch(err => console.log(err.message))
    }
    data()
}