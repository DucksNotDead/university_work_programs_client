import { IOption, IViewConfig } from '../../shared/types';
import { IProgramSubSection } from './types';
import { programSubSectionsApi } from './api';
import { ruStudyTypes } from '../../shared/studyTypes';
import { programSectionsApi } from '../program-section/api';
import { appMessages } from '../../shared/messages';

export const programSubsectionConfig: IViewConfig<IProgramSubSection> = {
  header: {
    title: 'Подразделы рабочих программ',
  },
  entityTitle: { key: 'id', prefix: 'Подраздел рабочей программы' },
  serviceEntityName: 'подраздел рабочей программы',
  table: {
    columns: [
      { key: 'id' },
      { key: 'section_id' },
      {
        key: 'type',
        render: (value) => ruStudyTypes[value as keyof typeof ruStudyTypes],
      },
      { key: 'label' },
    ],
    actions: ['delete', 'edit'],
  },
  getFn: programSubSectionsApi.get,
  formFields: [
    {
      name: 'section_id',
      getFn: programSectionsApi.getDictionaries,
    },
    {
      name: 'type',
      getFn: [
        'get study types local',
        async () =>
          Object.keys(ruStudyTypes).map(
            (key) =>
              ({
                label: ruStudyTypes[key as keyof typeof ruStudyTypes],
                value: key,
              }) as IOption,
          ),
      ],
    },
    {
      name: 'volume',
      rules: [{ type: 'number', message: appMessages.validation.isNumber }],
    },
    {
      name: 'label',
    },
  ],
};
