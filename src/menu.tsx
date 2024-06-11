import React, {Dispatch, SetStateAction, useState} from 'react';
import './css/index.css';
import { AppstoreOutlined, BarChartOutlined,GlobalOutlined } from '@ant-design/icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
const adminMenuItems: MenuItem[] = [
    {
        key: 'sub1',
        label: '地图',
        icon: <GlobalOutlined />,
        children: [
            { key: '0', label: '查看地图' },
        ],
    },
    {
       key: 'sub2',
       label: '管理员功能',
       icon:  <AppstoreOutlined/>,
       children: [
           { key: '3', label: '用户管理' },
       ]
    }
]

const userMenuItems: MenuItem[] = [
    {
        key: 'sub1',
        label: '地图',
        icon: <GlobalOutlined />,
        children: [
            { key: '0', label: '查看地图' },
        ],
    },
    {
        key: 'sub1',
        label: '数据功能',
        icon: <BarChartOutlined />,
        children: [
            { key: '1', label: '添加数据' },
            { key: '2', label: '数据仪表盘' },
        ],
    },
    {
        key: 'sub2',
        label: '管理',
        icon: <AppstoreOutlined />,
        children: [
            { key: '5', label: 'Option 3' },
            { key: '6', label: 'Option 4' },
        ],
    },
];
type Props = {
    func: Dispatch<SetStateAction<boolean>>,
    func2: Dispatch<SetStateAction<boolean>>,
    func3: Dispatch<SetStateAction<number>>,
    type: string
}
const MMenu: React.FC<Props> = (prop) => {
    const [theme] = useState<MenuTheme>('light');
    const [current, setCurrent] = useState('1');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        if(e.key === "0") prop.func3(1)
        if(e.key === "1") prop.func(true)
        if(e.key === "2") prop.func3(2)

        setCurrent(e.key);
    };

    return (
        <>
            <Menu
                theme={theme}
                onClick={onClick}
                style={{ width: 256 }}
                defaultOpenKeys={['sub1']}
                selectedKeys={[current]}
                mode="inline"
                items={prop.type ==="user"? userMenuItems: adminMenuItems}
            />
        </>
    );
};

export default MMenu;