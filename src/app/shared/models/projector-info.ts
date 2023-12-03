export interface ProjectorInfo {
  id: number;
  brand: string;
  serial_number: bigint;
  number_cables: number;
  comment: string;
  status?: number;
  user_id?: number;
  proj_id?: number;
  start_date?: Date;
  end_date?: Date;
}
