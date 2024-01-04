import { NgModule } from '@angular/core';
import { WebApisService } from './services/webApis.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorCheckDirective } from './errorCheck.directive';
import { FocusDirective } from './focus.directive';
import { MinDirective } from './min.directive';
import { MaxDirective } from './max.directive';
import { ErrorMessagesComponent } from './errorMessages/errorMessages.component';
import { ErrorMessageComponent } from './errorMessages/errorMessage.component';
import { ValueMustBeInSetDirective } from './valueMustBeInSet/valueMustBeInSet.directive';
import { NotEqualToDirective} from './notEqualTo/notEqualTo.directive';
import { MatchesComponent } from './matchesComponent/matches.component';

@NgModule({
    declarations: [
        ErrorCheckDirective, FocusDirective, MinDirective, MaxDirective,
        ErrorMessagesComponent, ErrorMessageComponent, ValueMustBeInSetDirective,
        NotEqualToDirective, MatchesComponent
    ],
    exports: [ErrorCheckDirective, FocusDirective, MinDirective, MaxDirective,
        ErrorMessagesComponent, ErrorMessageComponent, ValueMustBeInSetDirective,
        NotEqualToDirective, MatchesComponent
    ],
    imports: [FormsModule, CommonModule],
    providers: [
        { provide: WebApisService, useClass: WebApisService }
    ]
})
export class ValidationModule { }
