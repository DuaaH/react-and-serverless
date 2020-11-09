const { getAccessTokenFromHeaders } = require('./utils/auth')
const { table, getHighScores } = require('./utils/airtable')

exports.handler = async (event) => {
  console.log("e:", event.headers);
  const token = getAccessTokenFromHeaders(event.headers)
  console.log("tt: ", token);
  if (!token) {// user is not authorized
    return {
      statusCode: 401,
      body: JSON.stringify({ err: 'user is not logged in!' }),
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: 'That method is not allowed' }),
    };
  }
  const { score, name } = JSON.parse(event.body);
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