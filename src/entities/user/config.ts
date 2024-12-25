import { IConfigFormItem, IOption, IViewConfig } from '../../shared/types';
import { IUser, TUserCredits } from './types';
import { userApi } from './api';
import { createRoles, ERole, ruRole } from '../../shared/roles';
import { stringRules } from '../../shared/common';
import { appMessages } from '../../shared/messages';

export const userConfig: IViewConfig<IUser> = {
  header: { title: 'Пользователи' },
  serviceEntityName: 'пользователя',
  entityTitle: { key: 'id', prefix: 'Пользователь' },
  getFn: userApi.get,
  table: {
    columns: [
      { key: 'id' },
      { key: 'fio' },
      { key: 'role', render: (value) => ruRole[value as ERole] },
    ],
    actions: ['edit', 'delete'],
  },
  formFields: [
    { name: 'fio', rules: stringRules },
    {
      name: 'role',
      getFn: [
        'get roles',
        async () =>
          createRoles.map(
            (roleKey) =>
              ({
                label: ruRole[roleKey],
                value: roleKey,
              }) as IOption,
          ),
      ],
    },
    ...([
      { name: 'login', rules: [{ min: 5, message: appMessages.validation.min(5) }] },
      { name: 'password', rules: [{ min: 5, message: appMessages.validation.min(5) }] }
    ] as IConfigFormItem<TUserCredits>[] as any[]),
  ],
};
