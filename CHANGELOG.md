# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.2] - 2025-01-23

### Security

- Updated transitive dependency `qs` from 6.14.0 to 1.13.2 to address security vulnerability

### Changed

- Updated `axios` from 1.12.2 to 1.13.2
- Updated `@typescript-eslint/eslint-plugin` from 8.40.0 to 8.53.1
- Updated `@typescript-eslint/parser` from 8.40.0 to 8.53.1
- Updated `@types/express` from 5.0.3 to 5.0.6
- Updated `eslint` from 9.33.0 to 9.39.2
- Updated `eslint-plugin-jest` from 29.0.1 to 29.12.1
- Updated `express` from 5.1.0 to 5.2.1
- Updated `prettier` from 3.6.2 to 3.8.1
- Updated `ts-jest` from 29.4.1 to 29.4.6
- Updated `typescript` from 5.9.2 to 5.9.3
- Updated `fs-extra` from 11.3.1 to 11.3.3
- Updated `jest-matcher-utils` from 30.0.5 to 30.2.0
- Updated `path-to-regexp` from 8.2.0 to 8.3.0

## [1.0.1] - 2025-12-12

### Security

- Updated `js-yaml` from 4.1.0 to 4.1.1 to address security vulnerability
- Updated `husky` from 4.3.0 to 9.1.7 to resolve security vulnerabilities
- Updated `jest` to 30.2.0
- Updated `rimraf` to 6.1.2
- Updated `glob`:
  - Use selective override to keep `glob@7.2.3` for `test-exclude`
  - Force `glob@>=11.1.0` for all other dependencies

## [1.0.0] - 2025-10-29

### Added

- Initial release of OASprey
- Jest matchers for validating API responses against OpenAPI specifications
- `toSatisfyApiSpec()` matcher for validating HTTP responses
- `toSatisfySchemaInApiSpec()` matcher for validating objects against schemas
- Support for OpenAPI 3.0 specifications
- Support for loading specs from files, objects, or web endpoints
- TypeScript support

[Unreleased]: https://github.com/grove-platform/OASprey/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/grove-platform/OASprey/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/grove-platform/OASprey/releases/tag/v1.0.0
