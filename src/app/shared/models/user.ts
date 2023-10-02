export interface User {
    user: {
        id: string;
        name: string;
        email: string;
        phoneNumber: string;
        avatar: any;
      };
      accessToken: string;
      refreshToken: string;
}
  