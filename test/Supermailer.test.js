const Supermailer = require('../src/Supermailer');

test('Should throw when not passing the correct config', () => {
  expect(() => {
    new Supermailer({});
  }).toThrow();
});

test('Should instanciate without throwing', () => {
  expect(() => {
    new Supermailer({
      apiKey: 'apikey',
      apiUrl: 'apiUrl',
      namespace: 'namespace',
    });
  }).not.toThrow();
});

test('Should throw when passing invalid config parameters', () => {
  expect(() => {
    new Supermailer({
      apiKey: 1, // supposed to be a string
      apiUrl: 'apiUrl',
      namespace: 'namespace',
    });
  }).toThrow();

  expect(() => {
    new Supermailer({
      apiKey: 'apikey',
      apiUrl: 1, // supposed to be a string
      namespace: 'namespace',
    });
  }).toThrow();

  expect(() => {
    new Supermailer({
      apiKey: 'apikey',
      apiUrl: 'apiUrl',
      namespace: 1, // supposed to be a string
    });
  }).toThrow();
});
