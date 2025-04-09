// shared/src/user.ts
export interface UserInfoItf {
    id: number;
    user_hp?: string;
    user_email?: string;
    user_name?: string;
    login_type?: string;
    user_birthday?: string;
    refresh_token?: string;
    current_center?: string;
    center_id?: number;
    isBusiness?: boolean;
    is_teacher?: 'Y' | 'N';
    user_text?: string;
  }
  