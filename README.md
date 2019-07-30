
# Supermailer Node
This library gives you the methods you need to interact with Supermailer's API. You can manage recipients, send emails and retrieve logs.

# Installation
Node 8+ required

```
npm install @splitmedialabs/supermailer-node --save
# or with yarn
yarn add @splitmedialabs/supermailer-node
```

# Configuration
This is the structure of the configuration object you need pass to Supermailer's constructor:

```js
const config = {
  apiKey: 'put-your-api-key-here',
  apiUrl: 'supermailer.splitmedialabs.com',
  namespace: 'xsplit'
}
```

Properties:
- apiKey: `String` (*required*) An API key you get from supermailer.splitmedialabs.com/settings to authenticate your requests.
- apiUrl: `String` (*required*) The base url of the Supermailer API.
- namespace: `String` (*required*) The namespace your service is operating on.

# Usage

## Initialization
Before using the library, you need to initialize it with a config object:

```js
const config = require('path/to/your/config/file');
const Supermailer = require('@splitmedialabs/supermailer-node');
const SM = new Supermailer(config);
```

## Quick examples
These examples are only for quick reference. Check out the API Reference below for more details on how the library works.

*NOTE: The following examples assume that your Supermailer class is already initialized with a valid configuration object.*

### Creating a recipient
```js
// Add the data to the Supermailer data object
SM.data.addString('email', 'example-email@example.com');
SM.data.addString('username', 'example-value');

// Create the recipient
await SM.recipients.create();
```

### Updating a recipient
```js
// Add the data to the Supermailer data object
SM.data.addString('email', 'example-email@example.com'); // This email is gonna update 
SM.data.addDate('date_of_birth', '1988-21-12');

// Update the recipient
await SM.recipients.update('current-recipient-email@example.com');
```

### Deleting a recipient
```js
// Delete the recipient
await SM.recipients.delete('current-recipient-email@example.com');
```

# API Reference
Lots of modifications. To be rewritten...