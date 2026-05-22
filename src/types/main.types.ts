export type VocabularyItem = {
  word: string;
  meaning: string;
  category?: string;
  color?: string;
};

export type VocabularyType = {
  [key: string]: VocabularyItem[];
};
