exports.handler = async (event, context, cb) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      msg: 'Hello World',
    }),
  };
};