import { IViewConfig } from '../../shared/types';
import { IDiscipline } from './types';
import { disciplineApi } from './api';
import { departmentApi } from '../department/api';

export const disciplineConfig: IViewConfig<IDiscipline> = {
  header: { title: 'Дисциплины' },
  serviceEntityName: 'дисциплину',
  entityTitle: { key: 'name', prefix: 'Дисциплины' },
  getFn: disciplineApi.get,
  table: {
    columns: [{ key: 'id' }, { key: 'department_id' }, { key: 'name' }],
    actions: ['edit', 'delete'],
  },
  formFields: [
    { name: 'department_id', getFn: departmentApi.getDictionaries },
    { name: 'name' },
  ],
};
