import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {HistoryLogInfo} from "../../models/history-log-info";

const BASE_URL = 'https://profjector-back.onrender.com/';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  model = 'api/Hystoriques';

  constructor(    private http: HttpClient,
                  private messageService: MessageService
  ) { }

  getHistoryLog(id:number){
    return this.http.get<HistoryLogInfo>(this.getUrlWithID(id));
  }

  getAllHistoryLogs(displayNotification: boolean) {
    if (displayNotification) {
      this.messageService.add({severity:'info', summary:'History Logs Fetched!', detail:"Getting all History logs"})

    }
    return this.http.get<HistoryLogInfo[]>(this.getUrl());
  }

  rentProjector(History: HistoryLogInfo) {
    return this.http.post<any>(this.getUrl(), History);
  }

  updateHistory(History: HistoryLogInfo) {
    return this.http.put<any>(this.getUrlWithID(History.id), History);
  }

  deleteHistoryLog(id: number) {
    return this.http.delete<any>(this.getUrlWithID(id));
  }

  deleteAllLogs(){
    return this.http.delete<any>(this.getUrl());
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
