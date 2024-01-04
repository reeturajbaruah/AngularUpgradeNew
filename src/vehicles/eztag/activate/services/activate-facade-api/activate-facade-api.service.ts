import { Injectable } from '@angular/core';
import { ActivateApiService } from '../activate-api/activate-api.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateFacadeApiService {

  constructor(
    private activateApiService: ActivateApiService
  ) { }

  findTagsToActivate(data) {
    return this.activateApiService.findTagsToActivate(data);
  }

  finalizeTagActivation(data: any): Promise<any> {
    return this.activateApiService.finalizeTagActivation(data);
  }

}
