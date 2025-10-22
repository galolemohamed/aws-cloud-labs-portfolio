// index.js - Lambda function to return a random FAQ entry

var json = {
  "service": "lambda",
  "reference": "https://aws.amazon.com/lambda/faqs/",
  "questions": [
    {
      "q": "What is AWS Lambda?",
      "a": "AWS Lambda lets you run code without provisioning or managing servers. You pay only for the compute time you consume - there is no charge when your code is not running. With Lambda, you can run code for virtually any type of application or backend service - all with zero administration. Just upload your code and Lambda takes care of everything required to run and scale your code with high availability. You can set up your code to automatically trigger from other AWS services or call it directly from any web or mobile app."
    },
    {
      "q": "What events can trigger an AWS Lambda function?",
      "a": "You can use AWS Lambda to respond to table updates in Amazon DynamoDB, modifications to objects in Amazon S3 buckets, logs arriving in Amazon CloudWatch logs, incoming emails to Amazon Simple Email Service, notifications sent from Amazon SNS, messages arriving in an Amazon Kinesis stream, client data synchronization events in Amazon Cognito, and custom events from mobile applications, web applications, or other web services. You can also invoke a Lambda function on a defined schedule using the AWS Lambda console."
    },
    {
      "q": "When should I use AWS Lambda versus Amazon EC2?",
      "a": "Amazon Web Services offers a set of compute services to meet a range of needs. Amazon EC2 offers flexibility, with a wide range of instance types and the option to customize the operating system, network and security settings, and the entire software stack, allowing you to easily move existing applications to the cloud. With Amazon EC2 you are responsible for provisioning capacity, monitoring fleet health and performance, and designing for fault tolerance and scalability. AWS Lambda makes it easy to execute code in response to events without managing servers."
    }
    // Add more FAQ entries as needed
  ]
};

export const handler = function(event, context) {
    // Pick a random FAQ
    var rand = Math.floor(Math.random() * json.questions.length);
    console.log("Quote selected:", rand);

    // Build the response
    var response = {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json.questions[rand])
    };

    console.log("Response:", response);

    // Return the response
    context.succeed(response);
};
