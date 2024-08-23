
 export interface MenuItem {
    name: string;
    link: string;
}

 const MenuHeader: MenuItem[] = [
    {
        name:'introduction',
        link:'',
    },
    {
        name:'solution',
        link:'',
    },
    {
        name:'rate plan',
        link:'',
    },

]


 const AuthHeader: MenuItem[]  = [
    {
        name:'login',
        link:'/login',
    },
    {
        name:'apply for free use',
        link:'',
    },
]

 const ListMenusMobile: MenuItem[]  = [
    ...MenuHeader,
    ...AuthHeader,
]

export {
    MenuHeader,
    AuthHeader,
    ListMenusMobile,    
}