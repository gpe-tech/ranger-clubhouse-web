import {computed} from '@ember/object';
import RESTAdapter from '@ember-data/adapter/rest';
import Inflector from 'ember-inflector';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from 'clubhouse/config/environment';

/*
 * List of model names that should NOT be pluralized across the wire.
 * (e.g., person -> people)
 */

const SINGULAR_MODELS = [
  'access-document-delivery',
  'access-document',
  'alert',
  'asset-attachment',
  'asset-person',
  'asset',
  'bmid',
  'help',
  'motd',
  'person',
  'person-photo',
  'position-credit',
  'position',
  'role',
  'setting',
  'slot',
  'timesheet-missing',
  'timesheet',
];

export default class ApplicationAdapter extends RESTAdapter.extend(DataAdapterMixin) {
  host = ENV['api-server'];

  @computed('session.data.authenticated.token')
  get headers() {
    let headers = {};
    if (this.session.isAuthenticated) {
      headers['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return headers;
  }

  pathForType(modelName) {
    return SINGULAR_MODELS.includes(modelName) ? modelName : Inflector.inflector.pluralize(modelName);
  }
}
