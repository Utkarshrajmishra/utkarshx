import { Head } from "next/document";

export interface HeadItems{
    label: string;
    href: string;
}

export const HeaderConfig={
    logo:{
        src: '/assets/logo.png',
        alt: 'Logo',
        width: 100,  
        height:100,
    },
    navItems:[
        {
            label:"Work",
            href:'/'
        },
        {
            label:'Blogs',
            href:'/blogs',
        },
        {
            label:'Projects',
            href:'/'
        }
    ] as HeadItems[]
}