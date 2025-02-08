import _React from 'react';
import { X } from 'lucide-react';
import { ParagraphProps } from '../../types';
import './styles.css';

// Componente com botão de exclusão
export function Paragraph({ content, id, onDelete }: ParagraphProps) {
  return (
    <div className="paragrafo-container">
      <p className="paragrafo-texto">{content}</p>
      <button
        onClick={() => onDelete(id)}
        className="botao-excluir"
        aria-label="Deletar parágrafo"
      >
        <X size={16} />
      </button>
    </div>
  );
}