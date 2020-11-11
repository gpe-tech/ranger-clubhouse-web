import Controller from '@ember/controller';
import { action, computed } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MeTimesheetCorrectionsController extends Controller {
  @tracked showReviewSteps = false;

  @computed('timesheets.@each.isUnverified')
  get unverifiedCount() {
    return this.timesheets.reduce((total, ts) => total + (ts.isUnverified ? 1 : 0), 0);
  }

  @computed('timesheets.@each.isPending')
  get correctionPendingReviewCount() {
    return this.timesheets.reduce((total, ts) => total + (ts.isPending ? 1 : 0), 0);
  }

  @computed('timesheetsMissing.@each.isPending')
  get missingPendingReviewCount() {
    return this.timesheetsMissing.reduce((total, ts) => total + (ts.isPending ? 1 : 0), 0);
  }

  @action
  showReviewAction() {
    this.showReviewSteps = true;
  }
}
