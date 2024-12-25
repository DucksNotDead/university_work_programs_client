import { IViewConfig } from '../../shared/types';
import { IProgram } from './types';
import { programApi } from './api';
import { standardApi } from '../standard/api';

export const programConfig: IViewConfig<IProgram> = {
  header: {
    title: 'Рабочие программы',
  },
  entityTitle: { key: 'id', prefix: 'Рабочая программа' },
  serviceEntityName: 'рабочую программу',
  table: {
    columns: [{ key: 'id' }, { key: 'standard_id' }],
    actions: ['delete', 'print', 'edit'],
    expandable: {
      cond: () => true,
      props: ['questions', 'skills', 'literature'],
    },
  },
  getFn: programApi.get,
  formFields: [
    {
      name: 'standard_id',
      getFn: standardApi.getDictionaries,
    },
    { name: 'questions', isTextarea: true },
    { name: 'skills', isTextarea: true },
    { name: 'literature', isTextarea: true },
  ],
};
