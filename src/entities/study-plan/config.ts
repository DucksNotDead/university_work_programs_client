import { IViewConfig } from '../../shared/types';
import { IStudyPlan } from './types';
import { studyPlanApi } from './api';
import { specialtyApi } from '../speciality/api';
import { appMessages } from '../../shared/messages';

export const studyPlanConfig: IViewConfig<IStudyPlan> = {
  header: { title: 'Учебные планы' },
  serviceEntityName: 'учебный план',
  entityTitle: { key: 'id', prefix: 'Учебные планы' },
  getFn: studyPlanApi.get,
  table: {
    columns: [{ key: 'id' }, { key: 'year' }, { key: 'speciality_id' }],
    actions: ['delete', 'edit'],
    expandable: {
      cond: () => true,
      props: ['description'],
    },
  },
  formFields: [
    { name: 'speciality_id', getFn: specialtyApi.getDictionaries },
    {
      name: 'year',
      rules: [{ type: 'number', message: appMessages.validation.isNumber }],
    },
    { name: 'description', isTextarea: true },
  ],
};
