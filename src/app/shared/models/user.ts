// export interface User {
//     user: {
//         id: string;
//         name: string;
//         email: string;
//         phoneNumber: string;
//         avatar: any;
//       };
//       accessToken: string;
//       refreshToken: string;
// }
  
export interface Root {
    user: User
    accessToken: string
    refreshToken: string
  }
  
  export interface User {
    id: string
    name: string
    email: string
    phoneNumber: string
    avatar: any
  }
  