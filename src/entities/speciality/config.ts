import { IViewConfig } from '../../shared/types';
import { ISpecialty } from './types';
import { specialtyApi } from './api';
import { stringRules } from '../../shared/common';
import { facultyApi } from '../faculty/api';

export const specialityConfig: IViewConfig<ISpecialty> = {
  header: { title: 'Специальности' },
  serviceEntityName: 'специальность',
  entityTitle: { key: 'name', prefix: 'Специальности' },
  getFn: specialtyApi.get,
  table: {
    columns: [
      { key: 'id' },
      { key: 'name' },
      { key: 'faculty_id' },
      { key: 'direction' },
    ],
    actions: ['delete', 'edit'],
  },
  formFields: [
    { name: 'name', rules: stringRules },
    { name: 'faculty_id', getFn: facultyApi.getDictionaries },
    { name: 'direction', isTextarea: true },
  ],
};
