import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["checkbox"]

  connect() {
    console.log("The 'check_all_checkboxes' controller is now loaded!");
  }

  checkAll(event) {
    // Your code here
    console.log(event);
    if (event.path[0].checked === true) {
      this.checkboxTargets.forEach((category) => {
        category.setAttribute('checked', '');
      });
    } else if (event.path[0].checked === false) {
      this.checkboxTargets.forEach((category) => {
        category.removeAttribute('checked', '');
      });
    }
  }
}
