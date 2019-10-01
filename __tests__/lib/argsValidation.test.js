const { argsValidation } = require('../../src/lib/helpers');

function mockDataFunction(name, value) {
  argsValidation.call(arguments);
}

test('Should throw when passing nothing as first argument', () => {
  try {
    mockDataFunction();
  } catch (e) {
    expect(e.message).toEqual(
      'First parameter passed to mockDataFunction has to be the name of the attribute an has to be of type string.'
    );
  }
});

test('Should throw when passing nothing as second argument', () => {
  try {
    mockDataFunction('test');
  } catch (e) {
    expect(e.message).toEqual(
      'mockDataFunction needs a second parameter which is the value for the attribute, it cannot be undefined.'
    );
  }
});

test('Should throw when passing null as first argument', () => {
  try {
    mockDataFunction(null, 1);
  } catch (e) {
    expect(e.message).toEqual(
      'First parameter passed to mockDataFunction has to be the name of the attribute an has to be of type string.'
    );
  }
});

test('Should throw when passing undefined as first argument', () => {
  try {
    mockDataFunction(undefined, 1);
  } catch (e) {
    expect(e.message).toEqual(
      'First parameter passed to mockDataFunction has to be the name of the attribute an has to be of type string.'
    );
  }
});

test('Should throw when passing an object as first argument', () => {
  try {
    mockDataFunction({}, 'true');
  } catch (e) {
    expect(e.message).toEqual(
      'First parameter passed to mockDataFunction has to be the name of the attribute an has to be of type string.'
    );
  }
});

test('Should throw when passing an object as second argument', () => {
  try {
    mockDataFunction('test', {});
  } catch (e) {
    expect(e.message).toEqual('You cannot pass an object as the second parameter for mockDataFunction.');
  }
});

test('Should throw when there is a space in the name', () => {
  try {
    mockDataFunction('test_123 123');
  } catch (e) {
    expect(e.message).toEqual('The first parameter passed to mockDataFunction cannot contain any spaces.');
  }
});
