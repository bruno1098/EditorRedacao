import { Sparkles } from 'lucide-react';
import './styles.css';

// Componente de logo com efeitos
export function Logo() {
  return (
    <div className="logo-wrapper">
      <div className="logo-container">
        <div className="logo-brilho-topo">
          <Sparkles className="logo-brilho" />
        </div>
        <div>
          <img src="/images/repertorioenem_logo.jpeg" alt="Logo do Repertorio" className="logo-icone" />
        </div>
        <div className="logo-brilho-base">
          <Sparkles className="logo-brilho" />
        </div>
      </div>
    </div>
  );
}