import { AsyncValidator, ValidationErrors, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class TravelTitleRemoteValidator implements AsyncValidator {
    validate(control: FormControl) : Observable<ValidationErrors> | Promise<ValidationErrors> {
        return new Promise<ValidationErrors>((resolve, reject) => {
            setTimeout(() => {
                if (control.value && control.value === 'mars') {
                    resolve({'invalidTitle': 'title validate failed on server'});
                }
                resolve(null);
            }, 1000);
        });
    }
}