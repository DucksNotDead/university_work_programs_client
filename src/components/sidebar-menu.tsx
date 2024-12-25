import { Menu, Space } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { useLocation, useNavigate } from 'react-router';
import { useAuth } from '../entities/auth/lib';
import { ERole, ruRole } from '../shared/roles';

const items: ItemType<MenuItemType>[] = [
  { key: '/departments', label: 'Кафедры' },
  { key: '/disciplines', label: 'Дисциплины' },
  { key: '/faculties', label: 'Факультеты' },
  { key: '/specialties', label: 'Специальности' },
  { key: '/academic-loads', label: 'Нагрузки' },
  { key: '/standards', label: 'Стандарты' },
  { key: '/study-plans', label: 'Учебные планы' },
  { key: '/disciplines-in-study-plans', label: 'Дисциплины в учебном плане' },
  { key: '/programs', label: 'Рабочие программы' },
  { key: '/program-sections', label: 'Разделы рабочих программ' },
  { key: '/program-subsections', label: 'Подразделы рабочих программ' },
  { key: '/users', label: 'Пользователи' },
];

export function SidebarMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useAuth();

  return (
    <Menu
      style={{ display: user? 'flex' : 'none' }}
      mode={'horizontal'}
      items={items}
      onClick={({ key }) => navigate(key)}
      selectedKeys={items
        .filter((item) => pathname === item?.key)
        .map((i) => (i?.key as string) ?? '')}
    />
  );
}
