import App from './app';

export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path:'/default',
                component:resolve=>require(['./homePage/index'],resolve),
            },
            {
                name:'examRegistration',
                path:'examRegistration',
                component:resolve=>require(['./examRegistration/index'],resolve)
            },
            {
                name:'mockExam',
                path:'/mockExam',
                component:resolve=>require(['./mockExam/index'],resolve),
                children:[
                    {
                        name:'id',
                        path:'/mockExam/:id',
                        component:resolve=>require([`./mockExam/${id}`],resolve)
                    }
                ]
            },
            {
                name:'feedback',
                path:'/feedback',
                component:resolve=>require(['./feedback/index'],resolve),
            },
            {
                name:'toBeCoach',
                path:'/toBeCoach',
                component:resolve=>require(['./toBeCoach/index'],resolve),
            },
            {
                name:'theoryStudy',
                path:'/theoryStudy',
                component:resolve=>require(['./theoryStudy/index'],resolve),
            },
            {
                name:'searchCoach',
                path:'/searchCoach',
                component:resolve=>require(['./searchCoach/index'],resolve),
            },
            {
                name:'searchSchool',
                path:'/searchSchool',
                component:resolve=>require(['./searchSchool/index'],resolve),
            },
            {
                path: '*',
                component: resolve => require(['./default'],resolve),
                redirect:'/default'
            }
        ]
        
    }
];