
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

## Supermailer.data
Supermailer library uses an implicit data object for the recipient's attributes. This means that you don't need to pass an object in the create and update methods as long as you have populated Supermailer's data object prior to calling create or update.

*NOTE: You need to call Supermailer.recipients.create() or Supermailer.recipients.update() after adding the data, otherwise you are not sending any request to the API.*

### Supermailer.data.addBoolean()
Validates a `Boolean` value and adds it to the data object.

```js
SM.data.addBoolean(name, value);
```

Parameters:
- name: `String` (*required*) Name of the attribute (ex: user_is_premium).
- value: `Boolean` (*required*) Wether or not the user has this attribute (`true` or `false`).

### Supermailer.data.addDate()
Validates a date `String` value and adds it to the data object.

```js
SM.data.addDate(name, value);
```

Parameters:
- name: `String` (*required*) Name of the attribute (ex: 'date_of_birth').
- value: `String` (*required*) A date string that is parseable by javascript Date.parse() (ex: '1988-12-21' or '1988-12-21T09:54:14.189Z').

### Supermailer.data.addEvent()
Generates a UTC ISO date `String` and adds it to the data object .

```js
SM.data.addEvent(name);
```

Parameters:
- name: `String` (*required*) Name of the attribute (ex: 'signup_date').

### Supermailer.data.addNumber()
Validates a `Number` value and adds it to the data object.

```js
SM.data.addNumber(name, value);
```

Parameters:
- name: `String` (*required*) Name of the attribute (ex: 'bulk_licenses_count').
- value: `Integer|Float` (*required*) Number value for the attribute (ex: 1 or 2.5).

### Supermailer.data.addString()
Validates a `String` value and adds it the data object.

```js
SM.data.addString(name, value);
```

Parameters:
- name: `String` (*required*) Name of the attribute (ex: 'license_name').
- value: `String` (*required*) String value for the attribute (ex: 'free').

## Supermailer.recipients
Methods for interacting with Supermailer API recipients.

### Supermailer.recipients.create()
Creates a recipient after having populated the data object with the data methods.

```js
// Add some data to the recipient
SM.data.addString('email', 'recipient_email@example.com');
SM.data.addEvent('user_signup');

// Create the recipient
SM.recipients.create();
```

Parameters: No parameters need to be passed to this method but you **need to add** at least one `email` attribute when creating new recipient. 

### Supermailer.recipients.update()
Updates a recipient based on his email after having populated the data object with data methods.

```js
// Add some data to the recipient
SM.data.addString('email', 'new_recipient_email@example.com');
SM.data.addDate('date_of_birth', '1988-12-21');

// Update the recipient
SM.recipients.update('current_recipient_email@example.com');
```

Parameters:
- email: `String` (*required*) Email of the recipient at the time of update.


### Supermailer.recipients.delete()
Deletes a recipient based on his email address.

```js
// Delete the recipient
SM.recipients.delete('current_recipient_email@example.com');
```

Parameters:
- email: `String` (*required*) Email of the recipient at the time of delete.

### Supermailer.recipients.log()
Get the recipient's logs.

```js
// Get logs for a recipient
SM.recipients.logs('current_recipient_email@example.com', 10, 100);
```

Parameters:
- email: `String` (*required*) Email of the recipient at the time of request.
- offset: `Integer` (*optional, default: 0*) Offset to start from when getting the logs.
- limit: `Integer` (*optional, default: 100*) Maximum number of log records to return.

## Supermailer.emails
Methods for sending emails with Supermailer API recipients.

### Supermailer.emails.sendTransactional()
Send a transactional email to a recipient.

```js
// Get logs for a recipient
SM.emails.sendTransactional({
  templateGroup: 'name_of_the_template_group',
  recipientEmail: 'email_to_send_to@example.com'
});
```

Parameters:
- payload: `Object` (*required*) Information on the transactional email to send containing at least `templateGroup` and `recipientEmail` properties