const Airtable = require('airtable');
require('dotenv').config();

const { apiKey, BASE_ID, TABLE } = process.env;

Airtable.configure({
  apiKey: apiKey,
});
const base = Airtable.base(BASE_ID);
const table = base.table(TABLE);

const getHighScores = async (filterEmptyRecords) => {
  const queryOptions = {
    sort: [{ field: 'score', direction: 'desc' }],
  };
  if (filterEmptyRecords) {
    queryOptions.filterByFormula = `AND(name != "", score > 0)`;
  }
  const records = await table.select(queryOptions).firstPage();
  const formattedRecords = records.map((record) => ({
    id: record.id,
    fields: record.fields,
  }));
  return formattedRecords;
}

module.exports = {
  table, getHighScores,
};
