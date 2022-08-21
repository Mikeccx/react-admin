import { AppstoreOutlined, HomeOutlined, SettingOutlined, BuildOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('首页', 'home', <HomeOutlined />),

  getItem('ui', 'ui', <BuildOutlined />, [
    getItem('按钮', 'button'),
    getItem('级联菜单', 'cascader')
  ]),

  getItem('动画', 'animation', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('表格', 'table', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

export const SizeMenu = () => {
  const na = useNavigate()
  const [current, setCurrent] = useState('/');
  const onClick: MenuProps['onClick'] = e => {
    const { key } = e
    na(`/${key}`)
    setCurrent(e.key);
  };

  return (
    <Menu
      theme='light'
      onClick={onClick}
      style={{ width: 256 }}
      defaultOpenKeys={['home']}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  );
};
