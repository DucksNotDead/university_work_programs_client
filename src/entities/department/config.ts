import { IViewConfig } from '../../shared/types';
import { IDepartment } from './types';
import { departmentApi } from './api';
import { facultyApi } from '../faculty/api';
import { userApi } from '../user/api';

export const departmentConfig: IViewConfig<IDepartment> = {
  header: { title: 'Кафедры' },
  serviceEntityName: 'кафедру',
  entityTitle: { key: 'name', prefix: 'Кафедры' },
  getFn: departmentApi.get,
  table: {
    columns: [
      { key: 'id' },
      { key: 'name' },
      { key: 'faculty_id' },
      { key: 'head_id' },
    ],
    actions: ['edit', 'delete'],
  },
  formFields: [
    { name: 'faculty_id', getFn: facultyApi.getDictionaries },
    { name: 'head_id', getFn: userApi.getDictionaries },
    { name: 'name' },
  ],
};
