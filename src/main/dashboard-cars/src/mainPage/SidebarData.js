import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as Io5Icons from 'react-icons/io5';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as FIIcons from 'react-icons/fi';

export const SidebarData=[{
        title:'داشبورد مدیریت',
        path:'/dashboard'  ,
        icon:<FIIcons.FiMonitor/>,
    iconClose:<MdIcons.MdKeyboardArrowDown/>,
    iconOpen:<MdIcons.MdKeyboardArrowUp/>,
    },
    {
        title:'ماموریت',
        path:'/tracing'  ,
        icon:<Io5Icons.IoLocationSharp/>,
        iconClose:<MdIcons.MdKeyboardArrowDown/>,
        iconOpen:<MdIcons.MdKeyboardArrowUp/>,
        subNave:[
            {title:'مسیرهای دریافتی ',
                path:'/pointsShow'  ,

            },  {title:' پیش تعریف ماموریت ',
                path:'/missionDefinition'  ,

            },
            {title:' ورود اطلاعات',
                path:'/enterInformation/enterInformation2'  ,
            },


        ]


    },

    {
        title: 'اطلاعات پایه',
        path: '/info',
        icon: <Io5Icons.IoInformationCircle/>,
        iconClose:<MdIcons.MdKeyboardArrowDown/>,
        iconOpen:<MdIcons.MdKeyboardArrowUp/>,
        subNave:[
            {title:' دستگاه ها ',
                path:'/info/device'  ,

            },
            {title:' خودروها ',
                path:'/info/vehicle'  ,

            },
            {title:' راننده ها',
                path:'/info/driver'  ,

            },
            {title:' ایستگاه ها',
                path:'/info/station'  ,
            },


            {title:' محدوده های مجاز ',
                path:'/info/area'  ,
            },
        ]
    },
    {
        title: 'امنیت ',
        path: '/security',
        icon: <MdIcons.MdSecurity/>,
        iconClose:<MdIcons.MdKeyboardArrowDown/>,
        iconOpen:<MdIcons.MdKeyboardArrowUp/>,
        subNave:[
            {title:'حق دسترسی',
                path:'/security/security1'  ,

            },
            {title:'تعریف کاربران',
                path:'/security/security2'  ,

            },
            {title:'تعریف نقش ها',
                path:'/security/security3'  ,

            },
            {title:'مشاهده لاگ ها',
                path:'/security/security4'  ,
            },
            {title:'تنظیمات امنیت',
                path:'/security/security5'  ,
            },
        ]
    },
    {
        title: 'تنظیمات سامانه',
        path: '/setting',
        icon: <Io5Icons.IoSettings/>,
        iconClose:<MdIcons.MdKeyboardArrowDown/>,
        iconOpen:<MdIcons.MdKeyboardArrowUp/>,
        subNave:[
            {title:'تنظیمات پیش فرض',
                path:'/enterInformation/enterInformation1'  ,
            },

        ]
    },


]


