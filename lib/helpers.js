module.exports.argsValidation = function() {
  const args = this;
  const parentFunctionName = args.callee.name;
  const name = args[0];
  const value = args[1];

  if (typeof name !== 'string' || name.length < 1) {
    throw new Error(
      `First parameter passed to ${parentFunctionName} has to be the name of the attribute an has to be of type string.`
    );
  }

  if (name.includes(' ')) {
    throw new Error(`The first parameter passed to ${parentFunctionName} cannot contain any spaces.`);
  }

  if (value === undefined) {
    throw new Error(
      `${parentFunctionName} needs a second parameter which is the value for the attribute, it cannot be undefined.`
    );
  }

  if (value !== null && typeof value === 'object') {
    throw new Error(`You cannot pass an object as the second parameter for ${parentFunctionName}.`);
  }

  return [name, value];
};
