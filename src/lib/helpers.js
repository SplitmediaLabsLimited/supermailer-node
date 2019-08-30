module.exports.argsValidation = function() {
  const args = this;
  const functionName = args.callee.name;
  const name = args[0];
  const value = args[1];

  if (typeof name !== 'string' || name.length < 1) {
    throw new Error(
      `First parameter passed to ${functionName} has to be the name of the attribute an has to be of type string.`
    );
  }

  if (name.includes(' ')) {
    throw new Error(`The first parameter passed to ${functionName} cannot contain any spaces.`);
  }

  // Only addEvent can have an undefined value (it automatically sets to an ISO string date)
  if (value === undefined && functionName !== 'addEvent') {
    throw new Error(
      `${functionName} needs a second parameter which is the value for the attribute, it cannot be undefined.`
    );
  }

  // Only able to pass an object to addDate
  if (value !== null && typeof value === 'object' && functionName !== 'addDate') {
    throw new Error(`You cannot pass an object as the second parameter for ${functionName}.`);
  }

  return [name, value];
};
