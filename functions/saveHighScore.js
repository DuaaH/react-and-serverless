const { getAccessTokenFromHeaders, validateAccessToken } = require('./utils/auth')
const { table, getHighScores } = require('./utils/airtable')

exports.handler = async (event) => {
  console.log("e:", event.headers);
  const token = getAccessTokenFromHeaders(event.headers)
  const user = await validateAccessToken(token)


  console.log("tt: ", token);
  if (!user) {// user is not authorized
    return {
      statusCode: 403,
      body: JSON.stringify({ err: 'unauthorized' }),
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: 'That method is not allowed' }),
    };
  }
  const { score } = JSON.parse(event.body);
  const name = user['https://servelessreact/username']
  if (typeof score === 'undefined' || !name) {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: 'Bad Request :(' }),
    };
  }
  try {
    const records = await getHighScores(false)

    const lowestRecord = records[9];
    if (typeof lowestRecord.fields.score === 'undefined' || score > lowestRecord.fields.score) {
      const updatedRecord = {
        id: lowestRecord.id,
        fields: { name, score },
      };
      await table.update([updatedRecord]);
      return {
        statusCode: 200,
        body: JSON.stringify(
          updatedRecord
        ),
      };
    }
    else {
      return {
        statusCode: 200,
        body: JSON.stringify({}),
      };
    }

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: 'Failed to Save score in Airtable', }),
    };
  }

};