 export interface MenuItem{
    title: string;
    path: string
 }

 export const MenuItems: MenuItem[]=[
    {
        title:'Home',
        path: '/main'
    },
    {
        title:'Menu',
        path: '/menu'
    },
    {
        title:'Orders',
        path: '/orders'
    }
    ,
    {
        title:'Histroy',
        path: '/histroy'
    }
    ,
    {
        title:'Support',
        path: '/support'
    }
 ];