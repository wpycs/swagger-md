function createTable(contents) {
  const first_item = contents[0];
  const header = Object.keys(first_item).join('|');
  const rows = contents.map(row_content => {
    return Object.keys(row_content).map(row_content_key => {
      return row_content[row_content_key];
    }).join('|');
  });
  return [
    header.concat(rows),
  ].join('\n');
}

function createSchemaTable(definition) {
  return createTable(table_contents);
}

const api = {

  generateDefinition(key, definition) {
    const title = `### ${key}`;
    const schema_table = createSchemaTable();
    const schema = [
      '**Schema**',
      schema_table,
    ].join('\n');
    return [
      title,
      schema,
    ].join('\n\n');
  },

};

export default api;
