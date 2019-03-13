import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { action } from '@ember-decorators/object';
import { Role } from 'clubhouse/constants/roles';
import DS from 'ember-data';

export default class PersonRoute extends Route.extend(AuthenticatedRouteMixin) {
  beforeModel() {
    super.beforeModel(...arguments);
    this.house.roleCheck([Role.ADMIN, Role.MANAGE, Role.VC, Role.MENTOR, Role.TRAINER]);
  }

  model(params) {
    return this.store.find('person', params.person_id).then((person) => {
        return person.loadUserInfo().then(() => { return person });
      });
  }

  setupController(controller, model) {
    super.setupController(...arguments);

    controller.set('person', model);
  }

  @action
  error(response) {
    if (response instanceof DS.NotFoundError) {
      this.toast.error('The person record was not found.');
      this.transitionTo('me');
      return false;
    } else {
      this.house.handleErrorResponse(response);
      return true;
    }
  }
}
