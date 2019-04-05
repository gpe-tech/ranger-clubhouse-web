import {validatePresence } from 'ember-changeset-validations/validators';

export default {
  emergency_contact: [
    validatePresence({ presence: true,  message: 'Enter the emergency contact information.'}),
  ],
};
