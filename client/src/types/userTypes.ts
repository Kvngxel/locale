export interface User {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    profile_pic: string;
    address: string;
    created_at: string;
    updated_at: string;
  }

export interface NavBarProps {
    isLoggedIn: boolean;
    name: string;
    img: string;
  }