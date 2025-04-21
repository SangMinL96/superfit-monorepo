export interface StaffCreateItf {
  staffName: string;
  staffTag?: string;
  staffDesc?: string;
}

export interface getStaffItf {
  staffId: number;
  staffName: string;
  staffTag?: string;
  staffDesc?: string;
  createDate: string;
  modifyDate: string;
}
