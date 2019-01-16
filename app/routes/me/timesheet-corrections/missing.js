import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class MeTimesheetCorrectionsMissingRoute extends Route {
  beforeModel() {
    const timesheetInfo = this.modelFor('me.timesheet-corrections').timesheetInfo;

    if (!timesheetInfo.correction_enabled) {
      // Corrections are not enabled at this time, to go the landing page.
      this.transitionTo('me.timesheet-corrections.index');
    }
  }

  setupController(controller) {
    super.setupController(...arguments);
    controller.setProperties(this.modelFor('me.timesheet-corrections'));
  }
}
