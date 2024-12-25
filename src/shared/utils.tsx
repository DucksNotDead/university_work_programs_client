import { useEffect, useMemo, useState } from 'react';
import { Button, Space, theme, Typography } from 'antd';
import { appRoutes } from './routes';
import { TSetParamsFn, TTableActions } from './types';
import { Pencil, Printer, Trash, UserRoundCheck } from 'lucide-react';
import { ERole } from './roles';
import { useAuth } from '../entities/auth/lib';

export function useLog(...args: any[]) {
  useEffect(() => {
    console.log(...args);
  }, [args]);
}

type TRoleLike = ERole | keyof typeof ERole;

export function useRights(needRole: TRoleLike | undefined | null) {
  const [result, setResult] = useState(false);
  const { user } = useAuth();

  const userRole = useMemo(() => {
    return user?.role;
  }, [user]);

  useEffect(() => {
    if (!userRole) {
      setResult(() => false);
      return;
    }

    const roleItem = (roleLike: TRoleLike | null | undefined) =>
      typeof roleLike === 'string' ? ERole[roleLike as keyof typeof ERole] : roleLike;

    const userRoleItem = roleItem(userRole);
    if (userRoleItem === ERole.Admin) {
      setResult(() => true);
      return;
    }

    setResult(() => userRoleItem === roleItem(needRole));
  }, [userRole, needRole]);

  return result;
}

export function renderActions({
  id,
  canChange,
  canApprove,
  actions,
  onDelete,
  onEdit,
  onApprove,
}: {
  id: number,
  canChange: boolean;
  canApprove: boolean;
  actions: TTableActions;
  onEdit: () => void;
  onDelete: () => void;
  onApprove: () => void;
}) {
  return (
    <Space>
      {actions.includes('approve') && canApprove && (
        <Button type={'text'} onClick={onApprove}>
          <UserRoundCheck color={theme.defaultConfig.token.colorPrimary} />
        </Button>
      )}
      {actions.includes('delete') && canChange && (
        <Button type={'text'} onClick={onDelete}>
          <Trash color={'red'} />
        </Button>
      )}
      {actions.includes('edit') && canChange && (
        <Button type={'text'} onClick={onEdit}>
          <Pencil />
        </Button>
      )}
      {actions.includes('print') && (
        <a href={`${process.env.REACT_APP_API_BASE_URL}/programs/reports/${id}`} download={'report.xlsx'}>
          <Printer />
        </a>
      )}
    </Space>
  );
}
