import {FormControl, ValidationErrors} from '@angular/forms';

export class SpaceValidator {
  static noOnlyWithSpace(control: FormControl): ValidationErrors {
    if(control != null && control.value.trim().length == 0){
      return {'noOnlyWithSpace' : true}
    } else {
      return null;
    }
  }
}
