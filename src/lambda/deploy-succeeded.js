exports.handler = function(event, context, callback) {
  console.log(JSON.parse(event.body).payload)
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({})
  });
};
