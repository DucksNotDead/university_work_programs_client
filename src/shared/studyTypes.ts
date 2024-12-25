export enum EStudyType {
  Lecture = 'Lecture',
  Lab = 'Lab',
  Practice = 'Practice',
}

export const ruStudyTypes: Record<EStudyType, string> = {
  [EStudyType.Lecture]: 'Лекции',
  [EStudyType.Lab]: 'Лабараторные',
  [EStudyType.Practice]: 'Практика',
};
