import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ProjectorInfo } from '../../models/projector-info';

const BASE_URL = 'https://profjector-back.onrender.com';

@Injectable({
  providedIn: 'root',
})
export class ProjectorsService {
  model = 'api/Projectors';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getProjector(id: number) {
    return this.http.get<ProjectorInfo>(this.getUrlWithID(id));
  }

  getAllProjectors(displayNotification: boolean) {
    if (displayNotification) {
      this.messageService.add({
        severity: 'info',
        summary: 'Projector Fetched!',
        detail: 'Getting all projectors',
      });
    }
    return this.http.get<ProjectorInfo[]>(this.getUrl());
  }

  createProjector(Projector: ProjectorInfo) {
    return this.http.post<any>(this.getUrl(), Projector);
  }

  updateProjector(Projector: ProjectorInfo) {
    return this.http.put<any>(this.getUrlWithID(Projector.id), Projector);
  }

  deleteProjector(id: number) {
    return this.http.delete<number>(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
