import { TestBed } from '@angular/core/testing';
import { } from 'jasmine';
import { IEmailUsPayload } from '../../models/email-us.models';
import { EmailUsApiService } from '../api/emailUs-api.service';
import { EmailUsFacadeService } from './emailUs-facade.service';

describe('EmailUs Facade Service', () => {

    let emailUsFacadeService: EmailUsFacadeService;
    let emailUsApiServiceSpy: jasmine.SpyObj<EmailUsApiService>;

    beforeEach(() => {
        emailUsApiServiceSpy = jasmine.createSpyObj('emailUsApiServiceSpy', ['sendHelpAndSupportEmail']);

        TestBed.configureTestingModule({
            providers: [
                EmailUsFacadeService,
                { provide: EmailUsApiService, useFactory: () => emailUsApiServiceSpy },
            ]
        });

        emailUsFacadeService = TestBed.inject(EmailUsFacadeService);
    });

    it('tests sendHelpAndSupportEmail method', async () => {
        emailUsApiServiceSpy.sendHelpAndSupportEmail.and.resolveTo({});
        const request = {} as IEmailUsPayload;
        await emailUsFacadeService.sendHelpAndSupportEmail(request);
        expect(emailUsApiServiceSpy.sendHelpAndSupportEmail).toHaveBeenCalled();
    });
});

