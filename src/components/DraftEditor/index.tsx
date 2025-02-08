import { useState } from 'react';
import { Save, Plus, FileText } from 'lucide-react';
import { Logo } from '../Logo';
import { Paragraph } from '../Paragraph';
import { DraftParagraph } from '../../types';
import './styles.css';

export function DraftEditor() {
  // Hooks para gerenciar os parágrafos e feedback
  const [paragrafos, setParagrafos] = useState<DraftParagraph[]>([]);
  const [novoParagrafo, setNovoParagrafo] = useState('');
  const [mensagemSalvo, setMensagemSalvo] = useState('');

  // Handlers principais
  const adicionarParagrafo = () => {
    if (novoParagrafo.trim()) {
      setParagrafos([
        ...paragrafos,
        {
          id: crypto.randomUUID(),
          content: novoParagrafo.trim(),
        },
      ]);
      setNovoParagrafo('');
    }
  };

  const excluirParagrafo = (id: string) => {
    setParagrafos(paragrafos.filter((p) => p.id !== id));
  };

  // Simulação de salvamento
  const salvarRascunho = () => {
    setMensagemSalvo('Rascunho salvo com sucesso!');
    setTimeout(() => setMensagemSalvo(''), 3000);
  };

  return (
    <div className="editor-container">
      <div className="editor-conteudo">
        <header className="editor-cabecalho">
          <div className="mb-4 flex flex-col items-center justify-center">
            <Logo />
            <h1 className="editor-titulo">Editor de Redação</h1>
          </div>
          <p className="editor-subtitulo">
            Organize seus pensamentos e crie textos estruturados
          </p>
          <div className="recursos-badges">
            <span className="badge-recurso badge-azul">
              <span className="mr-1">✨</span> Intuitivo
            </span>
            <span className="badge-recurso badge-roxo">
              <span className="mr-1">📝</span> Profissional
            </span>
            <span className="badge-recurso badge-rosa">
              <span className="mr-1">🚀</span> Eficiente
            </span>
          </div>
        </header>

        <div className="editor-secao">
          <div className="mb-4">
            <label htmlFor="novoParagrafo" className="textarea-rotulo">
              Novo Parágrafo
            </label>
            <textarea
              id="novoParagrafo"
              value={novoParagrafo}
              onChange={(e) => setNovoParagrafo(e.target.value)}
              className="textarea-entrada"
              rows={4}
              placeholder="Digite seu texto aqui..."
            />
          </div>

          <div className="container-botoes">
            <button onClick={adicionarParagrafo} className="botao-adicionar">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Parágrafo
            </button>
          </div>
        </div>

        <div className="editor-secao">
          <div className="preview-cabecalho">
            <div className="preview-titulo">
              <FileText className="preview-icone" />
              <h2 className="preview-texto">Visualização do Texto</h2>
            </div>
            <button onClick={salvarRascunho} className="botao-salvar">
              <Save className="mr-2 h-4 w-4" />
              Salvar Rascunho
            </button>
          </div>

          {mensagemSalvo && (
            <div className="mensagem-salvo">{mensagemSalvo}</div>
          )}

          <div className="space-y-4">
            {paragrafos.length === 0 ? (
              <p className="mensagem-vazio">
                Nenhum parágrafo adicionado ainda. Comece digitando acima!
              </p>
            ) : (
              paragrafos.map((paragrafo) => (
                <Paragraph
                  key={paragrafo.id}
                  id={paragrafo.id}
                  content={paragrafo.content}
                  onDelete={excluirParagrafo}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}