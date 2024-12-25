import { IViewConfig } from '../../shared/types';
import { IAcademicLoad } from './types';
import { academicLoadApi } from './api';
import { specialtyApi } from '../speciality/api';
import { disciplineApi } from '../discipline/api';
import { appMessages } from '../../shared/messages';

export const academicLoadConfig: IViewConfig<IAcademicLoad> = {
  header: { title: 'Нагрузки' },
  serviceEntityName: 'нагрузку',
  entityTitle: { key: 'id', prefix: 'Нагрузки' },
  getFn: academicLoadApi.get,
  table: {
    columns: [
      { key: 'id' },
      { key: 'speciality_id'},
      { key: 'discipline_id'},
      { key: 'volume' },
    ],
    actions: ['edit', 'delete'],
  },
  formFields: [
    { name: 'speciality_id', getFn: specialtyApi.getDictionaries },
    { name: 'discipline_id', getFn: disciplineApi.getDictionaries },
    {
      name: 'volume',
      rules: [
        { type: 'number', message: appMessages.validation.isNumber },
      ],
    },
  ],
};
