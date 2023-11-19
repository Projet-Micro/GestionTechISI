export interface UserInfo {
  id: number;
  FirstName: string;
  LastName: string;
  NIC: number;
  PSW?: string;
  email: string;
  status?: boolean | null;
  admin?: string;
  accessToken?: string;
}
