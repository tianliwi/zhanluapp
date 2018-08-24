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
        id       : 'portfolio-report',
        title    : '组合报告',
        type     : 'group',
        children : [
            {
                id: 'realtime',
                title: '实时监控',
                type: 'item',
                icon: 'laptop',
                url: '/report/realtime'
            },
            {
                id: 'holding',
                title: '组合持仓',
                type: 'item',
                icon: 'assignment',
                url: '/report/holding'
            },
            {
                id: 'profitloss',
                title: '盈亏报表',
                type: 'item',
                icon: 'attach_money',
                url: '/report/profitloss'
            },
            {
                id: 'asset',
                title: '资产配置',
                type: 'item',
                icon: 'description',
                url: '/report/asset'
            },
            {
                id: 'market',
                title: '市场动向',
                type: 'item',
                icon: 'timeline',
                url: '/report/market'
            },
            {
                id: 'lookup',
                title: '个股（债）查询',
                type: 'item',
                icon: 'pageview',
                url: '/report/lookup'
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
