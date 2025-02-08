export interface DraftParagraph {
  id: string;
  content: string;
}

export interface ParagraphProps {
  content: string;
  id: string;
  onDelete: (id: string) => void;
}