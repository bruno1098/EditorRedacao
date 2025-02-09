import { useState } from 'react';
import { Save, Plus, FileText } from 'lucide-react';
import { Logo } from '../Logo';
import { Paragraph } from '../Paragraph';
import { DraftParagraph } from '../../types';
import './styles.css';

export function DraftEditor() {
  // Hooks para gerenciar 
  const [paragrafos, setParagrafos] = useState<DraftParagraph[]>([]);
  const [novoParagrafo, setNovoParagrafo] = useState('');
  const [tipoParagrafo, setTipoParagrafo] = useState<'Introdução' | 'Desenvolvimento' | 'Conclusão'>('Introdução');
  const [titulo, setTitulo] = useState('');
  const [mensagemSalvo, setMensagemSalvo] = useState('');
  const [redacaoCompleta, setRedacaoCompleta] = useState('');

  // Handlers principais
  const adicionarParagrafo = () => {
    if (novoParagrafo.trim()) {
      setParagrafos([
        ...paragrafos,
        {
          id: crypto.randomUUID(),
          content: novoParagrafo.trim(),
          type: tipoParagrafo,
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
    const textoCompleto = `${paragrafos.map(p => p.content).join('\n\n')}`.trim();

    setRedacaoCompleta(textoCompleto);
    setMensagemSalvo('Rascunho salvo com sucesso!');
    setTimeout(() => setMensagemSalvo(''), 3000);
  };

  const getNumeroSequencial = (tipo: string, index: number) => {
    if (tipo === 'Desenvolvimento') {
      const desenvolvimentos = paragrafos
        .filter(p => p.type === 'Desenvolvimento')
        .indexOf(paragrafos[index]);
      return ` ${desenvolvimentos + 1}`;
    }
    return '';
  };

  return (
    <div className="editor-container">
      <div className="editor-conteudo">
        <header className="editor-cabecalho">
          <div className="mb-4 flex flex-col items-center justify-center">
            <Logo />
            <h1 className="editor-titulo">Editor de Redação</h1>
          </div>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Título da Redação"
            className="titulo-entrada"
          />
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
            <label htmlFor="tipoParagrafo" className="textarea-rotulo">
              Tipo de Parágrafo
            </label>
            <select
              id="tipoParagrafo"
              value={tipoParagrafo}
              onChange={(e) => setTipoParagrafo(e.target.value as 'Introdução' | 'Desenvolvimento' | 'Conclusão')}
              className="select-tipo"
            >
              <option value="Introdução">Introdução</option>
              <option value="Desenvolvimento">Desenvolvimento</option>
              <option value="Conclusão">Conclusão</option>
            </select>
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
              <h2 className="preview-texto">Redação Completa</h2>
            </div>
            <button onClick={salvarRascunho} className="botao-salvar">
              <Save className="mr-2 h-4 w-4" />
              Salvar Rascunho
            </button>
          </div>

          {mensagemSalvo && (
            <div className="mensagem-salvo">{mensagemSalvo}</div>
          )}

          {redacaoCompleta && (
            <div className="redacao-salva">
              <h3 className="redacao-salva-titulo">Texto Completo:</h3>
              <div className="redacao-salva-conteudo">
                {titulo && <h1 className="redacao-salva-titulo-destaque">{titulo}</h1>}
                {redacaoCompleta.split('\n').map((linha, index) => (
                  <p key={index} className="redacao-salva-paragrafo">
                    {linha}
                  </p>
                ))}
              </div>
            </div>
          )}

          <div className="redacao-completa">
            {titulo && <h1 className="redacao-titulo">{titulo}</h1>}
            
            <div className="redacao-paragrafos">
              {paragrafos.length === 0 ? (
                <p className="mensagem-vazio">
                  Nenhum parágrafo adicionado ainda. Comece digitando acima!
                </p>
              ) : (
                paragrafos.map((paragrafo, index) => (
                  <Paragraph
                    key={paragrafo.id}
                    id={paragrafo.id}
                    content={`${paragrafo.type}${getNumeroSequencial(paragrafo.type, index)}: ${paragrafo.content}`}
                    onDelete={excluirParagrafo}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}