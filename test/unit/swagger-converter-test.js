import fixtures from '../../test-util/fixtures';
import converter from '../../src/swagger-converter';

describe('test/unit/swagger-converter-test.js', () => {

  describe('convertToMarkdown', () => {

    describe('with a valid, parsed Swagger spec', () => {
      let swagger_api_spec;

      beforeEach(() => {
        swagger_api_spec = fixtures.loadSwaggerSpec();
      });

      it('should fulfill promise after conversion', () => {
        return converter.convertToMarkdown(swagger_api_spec).should.be.fulfilled();
      });

      it('should return contents of a valid .md file', () => {
        return converter.convertToMarkdown(swagger_api_spec).should.be.fulfilled();
      });

    });

  });

});
