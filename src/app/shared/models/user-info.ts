export interface UserInfo {
  id: number;
  firstName: string;
  lastName: string;
  NIC: number;
  email: string;
  PSW: string;
  status?: boolean;
  accessToken?: string;
}
