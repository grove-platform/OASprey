# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.1] - 2025-12-12

### Security
- Updated `js-yaml` from 4.1.0 to 4.1.1 to address security vulnerability
- Updated `husky` from 4.3.0 to 9.1.7 to resolve security vulnerabilities

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

