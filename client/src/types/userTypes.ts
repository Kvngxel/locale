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

export interface LocaleApi {
  address: string;
  created_at: string;
  description: string;
  dir_name: string;
  directory_email: string;
  id: number;
  profile_image: string;
  quote: string;
  telephone: string;
  updated_at: string;
  user_id: number;
}

export interface UploadRouteGuardProps {
  element: React.ReactNode;
}
