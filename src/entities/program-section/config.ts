import { IViewConfig } from '../../shared/types';
import { IProgramSection } from './types';
import { programSectionsApi } from './api';
import { standardApi } from '../standard/api';

export const programSectionConfig: IViewConfig<IProgramSection> = {
  header: {
    title: 'Разделы рабочих программ',
  },
  entityTitle: { key: 'id', prefix: 'Раздел рабочей программы' },
  serviceEntityName: 'раздел рабочей программы',
  table: {
    columns: [{ key: 'id' }, { key: 'standard_id' }, { key: 'title' }],
    actions: ['delete', 'edit'],
  },
  getFn: programSectionsApi.get,
  formFields: [
    {
      name: 'standard_id',
      getFn: standardApi.getDictionaries,
    },
    {
      name: 'title',
    },
  ],
};
