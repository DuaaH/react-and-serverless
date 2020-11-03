const Airtable = require('airtable');
require('dotenv').config();

const { apiKey, BASE_ID , TABLE} = process.env;

Airtable.configure({
  apiKey: apiKey,
});
const base = Airtable.base(BASE_ID);
const table = base.table(TABLE);

exports.handler = async (event) => {
  try {
    const records = await table.select({ sort: [{ field: 'score', direction: 'desc' }],
      filterByFormula: `AND(name != "", score > 0)`}).firstPage();
    const formattedRecords = records.map((record) => ({
      id: record.id,
      fields: record.fields,
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(
        formattedRecords
      ),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ err: 'Failed to get records from Airtable', }),
    };
  }

};