import ClubhouseRoute from 'clubhouse/routes/clubhouse-route';
import RSVP from 'rsvp';

export default class MeTicketsRoute extends ClubhouseRoute {
  beforeModel() {
    const user = this.session.user;
    if (user.isAuditor || user.isPastProspective || user.isProspectiveWaitlist) {
      this.toast.error('Auditors, past prospectives, and prospective waitlisted do not have access to this page.');
      this.router.transitionTo('me.homepage');
    } else {
      super.beforeModel(...arguments);
    }
  }

  model() {
    return RSVP.hash({
      ticketingInfo: this.ajax.request('ticketing/info')
                .then((results) => results.ticketing_info ),
      ticketingPackage: this.ajax.request(`ticketing/${this.session.userId}/package`)
                .then((results) => results.package)
    });
  }

  setupController(controller, model) {
    controller.set('person', this.modelFor('me'));
    controller.set('ticketingInfo', model.ticketingInfo);
    controller.set('ticketingPackage', model.ticketingPackage);
  }
}
