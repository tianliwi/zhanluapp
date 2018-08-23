import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'portfolio',
        title    : '组合设置',
        type     : 'group',
        children : [
            {
                id: 'addportfolio',
                title: '新增组合',
                type: 'item',
                icon: 'playlist_add',
                url: '/portfolio/addportfolio'
            },
            {
                id: 'importtrade',
                title: '交易导入',
                type: 'item',
                icon: 'import_contacts',
                url: '/portfolio/importtrade'
            }
        ]
    },
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'sample',
                title    : 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }
];
