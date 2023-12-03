export interface HistoryLogInfo {
  id: number;
  proj_id: number;
  user_id: number;
  start_date: Date;
  end_date?: Date;
  comment?: string;
  status: boolean;
}
