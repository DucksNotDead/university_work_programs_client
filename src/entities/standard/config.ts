import { IViewConfig } from '../../shared/types';
import { IStandard } from './types';
import { standardApi } from './api';
import { disciplineApi } from '../discipline/api';

export const standardConfig: IViewConfig<IStandard> = {
  header: { title: 'Стандарты' },
  serviceEntityName: 'стандарт',
  entityTitle: { key: 'id', prefix: 'Стандарт' },
  getFn: standardApi.get,
  table: {
    columns: [{ key: 'id' }, { key: 'discipline_id' }],
    actions: ['edit', 'delete'],
  },
  formFields: [{ name: 'discipline_id', getFn: disciplineApi.getDictionaries }],
};
