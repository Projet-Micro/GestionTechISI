export default interface ProjectorInfo {
  id: number;
  brand: string;
  serialNumber: bigint;
  nbrCables: number;
  comment: string;
  status?: number;
}
