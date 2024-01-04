import { HttpClient, HttpEvent } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SERVER_CONSTANTS } from 'common/upgrades';
import { Observable } from 'rxjs';
import { UIRouterGlobals } from '@uirouter/angular';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private httpClient: HttpClient,
    private uiRouterGlobals: UIRouterGlobals,
    @Inject(SERVER_CONSTANTS) private serverConstants: any,
  ) { }

  upload<T>(endpoint: string, file: File): Observable<HttpEvent<T>> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    const url = `${endpoint}?angularState=${this.uiRouterGlobals.current.name}&clientVersion=${this.serverConstants.currentlyDownloadedWebUiVersion}`;

    return this.httpClient.post<T>(url, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

}
