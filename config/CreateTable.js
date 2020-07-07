const AWS = require("aws-sdk")
const config = require("./config")

AWS.config.update(config.aws_local_config)

const  dynamodb = new AWS.DynamoDB()

exports.create_table = () => {
    const params = {
        TableName: "datos",
        KeySchema: [
            {AttributteName: "id", KeyType: "hash"}
        ],
        AttributeDefinitions: [
            {AttributteName: "id", AttributteType: "S"}
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 50,
            WriteCapacityUnits: 50
        }
    }
    
    dynamodb.createTable(params, (err, data) => {
        if(err){
            console.error(JSON.stringify(err))
        }else{
            console.log(JSON.stringify(data))
        }
    })
}

