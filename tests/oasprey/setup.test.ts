import path from 'path';
import fs from 'fs-extra';

import { loadSpec } from 'oasprey';

const invalidArgErrorMessage =
  'The provided argument must be either an absolute filepath or an object representing an OpenAPI specification.\nError details: ';

describe('loadSpec(filepathOrObject)', () => {
  describe('number', () => {
    it('throws an error', () => {
      const func = () => loadSpec(123 as never);
      expect(func).toThrow(`${invalidArgErrorMessage}Received type 'number'`);
    });
  });

  describe('array', () => {
    it('throws an error', () => {
      const func = () => loadSpec([] as never);
      expect(func).toThrow(`${invalidArgErrorMessage}Received type 'array'`);
    });
  });

  describe('object that is not an OpenAPI spec', () => {
    it('throws an error', () => {
      const func = () => loadSpec({} as never);
      expect(func).toThrow('Invalid OpenAPI spec: [');
    });
  });

  describe('object that is an incomplete OpenAPI spec', () => {
    it('throws an error', () => {
      const func = () => loadSpec({ openapi: '3.0.0' } as never);
      expect(func).toThrow('Invalid OpenAPI spec: [');
    });
  });

  describe('object representing a valid OpenAPI spec', () => {
    it("successfully extends jest's `expect`", () => {
      const pathToApiSpec = path.resolve(
        path.resolve(
          process.cwd(),
          'commonTestResources/exampleOpenApiFiles/valid/openapi3.json',
        ),
      );
      const apiSpec = fs.readJSONSync(pathToApiSpec);
      expect(() => loadSpec(apiSpec)).not.toThrow();
    });
  });

  describe('non-absolute path', () => {
    it('throws an error', () => {
      const func = () => loadSpec('./');
      expect(func).toThrow(
        `${invalidArgErrorMessage}'./' is not an absolute filepath`,
      );
    });
  });

  describe('absolute path to a non-existent file', () => {
    it('throws an error', () => {
      const func = () => loadSpec('/non-existent-file.yml');
      expect(func).toThrow(
        `${invalidArgErrorMessage}ENOENT: no such file or directory, open '/non-existent-file.yml'`,
      );
    });
  });

  describe('absolute path to a file that is neither YAML nor JSON', () => {
    it('throws an error', () => {
      const pathToApiSpec = path.resolve(
        path.resolve(
          process.cwd(),
          'commonTestResources/exampleOpenApiFiles/invalid/fileFormat/neitherYamlNorJson.js',
        ),
      );
      const func = () => loadSpec(pathToApiSpec);
      // In Node.js v22+, the error message format changed from "Invalid YAML or JSON" to the actual filesystem error
      expect(func).toThrow(invalidArgErrorMessage);
    });
  });

  describe('absolute path to an invalid OpenAPI file', () => {
    describe('yAML file that is empty', () => {
      it('throws an error', () => {
        const pathToApiSpec = path.resolve(
          path.resolve(
            process.cwd(),
            'commonTestResources/exampleOpenApiFiles/invalid/fileFormat/emptyYaml.yml',
          ),
        );
        const func = () => loadSpec(pathToApiSpec);
        expect(func).toThrow(
          "Invalid OpenAPI spec: Cannot read properties of undefined (reading 'swagger')",
        );
      });
    });
    describe('yAML file that is invalid YAML', () => {
      it('throws an error', () => {
        const pathToApiSpec = path.resolve(
          path.resolve(
            process.cwd(),
            'commonTestResources/exampleOpenApiFiles/invalid/fileFormat/invalidYamlFormat.yml',
          ),
        );
        const func = () => loadSpec(pathToApiSpec);
        expect(func).toThrow(
          `${invalidArgErrorMessage}Invalid YAML or JSON:\nduplicated mapping key`,
        );
      });
    });
    describe('jSON file that is invalid JSON', () => {
      it('throws an error', () => {
        const pathToApiSpec = path.resolve(
          path.resolve(
            process.cwd(),
            'commonTestResources/exampleOpenApiFiles/invalid/fileFormat/invalidJsonFormat.json',
          ),
        );
        const func = () => loadSpec(pathToApiSpec);
        expect(func).toThrow(
          `${invalidArgErrorMessage}Invalid YAML or JSON:\nduplicated mapping key`,
        );
      });
    });
    describe('yAML file that is invalid OpenAPI 3', () => {
      it('throws an error', () => {
        const pathToApiSpec = path.resolve(
          path.resolve(
            process.cwd(),
            'commonTestResources/exampleOpenApiFiles/invalid/openApi/openApi3.yml',
          ),
        );
        const func = () => loadSpec(pathToApiSpec);
        expect(func).toThrow('Invalid OpenAPI spec:');
      });
    });
    describe('jSON file that is invalid OpenAPI 2', () => {
      it('throws an error', () => {
        const pathToApiSpec = path.resolve(
          path.resolve(
            process.cwd(),
            'commonTestResources/exampleOpenApiFiles/invalid/openApi/openApi2.json',
          ),
        );
        const func = () => loadSpec(pathToApiSpec);
        expect(func).toThrow('Invalid OpenAPI spec:');
      });
    });
  });

  describe('absolute path to a valid OpenAPI YAML file', () => {
    it("successfully extends jest's `expect`", () => {
      const pathToApiSpec = path.resolve(
        path.resolve(
          process.cwd(),
          'commonTestResources/exampleOpenApiFiles/valid/openapi3.yml',
        ),
      );
      expect(() => loadSpec(pathToApiSpec)).not.toThrow();
    });
  });

  describe('absolute path to a valid OpenAPI JSON file', () => {
    it("successfully extends jest's `expect`", () => {
      const pathToApiSpec = path.resolve(
        path.resolve(
          process.cwd(),
          'commonTestResources/exampleOpenApiFiles/valid/openapi3.json',
        ),
      );
      expect(() => loadSpec(pathToApiSpec)).not.toThrow();
    });
  });
});
