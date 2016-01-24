# swagger-md
Converts Swagger API spec to Markdown file

## Usage

Install NPM module:
```
npm install swagger-md
```

Convert Swagger API spec to Markdown format:
```
import swagger_md from 'swagger-md';
import swagger_spec from './swagger-api-spec.json';
 
swagger_md.convertToMarkdown(swagger_spec).then(markdown_str => {
  // Use markdown_str, e.g. write to "api.md"
});
```
