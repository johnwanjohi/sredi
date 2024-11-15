import { Subscription } from 'rxjs';
export class SubscriptionsContainer {
  private subs = [];
  set add(s: Subscription) {
    // @ts-ignore
    this.subs.push(s);
    // console.log(`adding subcontainer ${this.subs.length}`);
  }
  dispose() {
    // @ts-ignore
    this.subs.forEach((s) => s.unsubscribe());
  }
}
