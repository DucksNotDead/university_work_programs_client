import { IViewConfig } from '../../shared/types';
import { IFaculty } from './types';
import { facultyApi } from './api';

export const facultyConfig: IViewConfig<IFaculty> = {
  header: { title: 'Факультеты' },
  serviceEntityName: 'факультет',
  entityTitle: { key: 'name', prefix: 'Факультеты' },
  getFn: facultyApi.get,
  table: {
    columns: [
      { key: 'id' },
      { key: 'name' },
    ],
    actions: ['edit', 'delete'],
  },
  formFields: [{ name: 'name' }],
};
