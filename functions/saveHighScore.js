const Airtable = require('airtable');
require('dotenv').config();

const { apiKey, BASE_ID, TABLE } = process.env;

Airtable.configure({
  apiKey: apiKey,
});
const base = Airtable.base(BASE_ID);
const table = base.table(TABLE);

exports.handler = async (event) => {
  console.log("e:", event);
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: 'That method is not allowed' }),
    };
  }
  const { score, name } = JSON.parse(event.body);
  if (!score || !name) {
    return {
      statusCode: 405,
      body: JSON.stringify({ err: 'Bad Request :(' }),
    };
  }
  try {
    const records = await table.select({
      sort: [{ field: 'score', direction: 'desc' }],
    }).firstPage();
    const formattedRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));

    const lowestRecord = formattedRecords[9];
    console.log(lowestRecord);
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