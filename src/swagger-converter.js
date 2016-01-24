import * as promise_flow from 'promise-flow';
import intro_generator from './generators/intro-generator';
import path_generator from './generators/path-generator';
import definition_generator from './generators/definition-generator';

function convertPaths(paths) {
  return Object.keys(paths).map(path_key => {
    return path_generator.generatePath(paths[path_key]);
  });
}

function convertDefinitions(definitions) {
  return Object.keys(definitions).map(definition_key => {
    return definition_generator.generateDefinition(definitions[definition_key]);
  });
}

const api = {
  convertToMarkdown(swagger_spec) {
    // TODO: Is it really useful to use promises here? Nothing async?
    return promise_flow.allObject({
          intro: intro_generator.generateApiIntro(swagger_spec),
          paths: convertPaths(swagger_spec.paths),
          definitions: convertDefinitions(swagger_spec.definitions),
        })
        .then(result => {
          let components = [result.intro];
          components = components.concat(result.paths);
          components = components.concat(result.definitions);
          return components.join('\n\n');
        });
  },
};

export default api;
