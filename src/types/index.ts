export interface DraftParagraph {
  id: string;
  content: string;
  type: 'Introdução' | 'Desenvolvimento' | 'Conclusão';
}

export interface ParagraphProps {
  content: string;
  id: string;
  onDelete: (id: string) => void;
}