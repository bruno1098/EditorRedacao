
# 📖 Repertório Editor de Redação

<p align="center">
  <img src="https://raw.githubusercontent.com/bruno1098/EditorRedacao/main/public/images/repertorioenem_logo.jpeg" alt="Logo do Repertório Editor de Redação" width="200">
</p>

## 📝 Descrição

O **Repertório Editor de Redação** é uma aplicação web desenvolvida em React que simula uma ferramenta de auxílio à redação de textos, com foco em melhorar a experiência dos alunos com conteúdos do Enem. O editor permite que os usuários adicionem parágrafos, visualizem o texto completo e simulem o salvamento de rascunhos.

## 🚀 Tecnologias Utilizadas

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,typescript,vite,tailwindcss" alt="Tecnologias utilizadas">
</p>

- **⚛️ React** → Biblioteca JavaScript para construção de interfaces de usuário.
- **📌 TypeScript** → Superset do JavaScript que adiciona tipagem estática.
- **⚡ Vite** → Ferramenta de build rápida para projetos front-end.
- **🎨 Tailwind CSS** → Framework CSS para estilização rápida e responsiva.

---



## 🎥 Demonstração

[![Vídeo de Demonstração](https://img.youtube.com/vi/Ar_i3pDGZZU/0.jpg)](https://www.youtube.com/watch?v=Ar_i3pDGZZU)

> *Clique na imagem acima para assistir ao vídeo de demonstração no YouTube.*


---

## 🎯 Funcionalidades

✅ **Adicionar Parágrafos** → Permite que os usuários insiram novos parágrafos ao rascunho.  
✅ **Visualizar Texto Completo** → Exibe todos os parágrafos adicionados em uma área de visualização.  
✅ **Simulação de Salvamento** → Simula o salvamento do rascunho atual (sem persistência em banco de dados).  
✅ **Responsividade** → Interface adaptável a diferentes tamanhos de tela, garantindo uma experiência otimizada em dispositivos móveis e desktops.

---

## 📂 Estrutura do Projeto

```
📦 EditorRedacao
├── 📂 public/
│   └── 📂 images/
│       └── 🖼️ repertorioenem_logo.jpeg
├── 📂 src/
│   ├── 📂 components/
│   │   ├── 📂 DraftEditor/
│   │   │   ├── 📜 index.tsx
│   │   │   └── 🎨 styles.css
│   │   ├── 📂 Logo/
│   │   │   ├── 📜 index.tsx
│   │   │   └── 🎨 styles.css
│   │   ├── 📂 Paragraph/
│   │   │   ├── 📜 index.tsx
│   │   │   └── 🎨 styles.css
│   ├── 📂 types/
│   │   └── 📜 index.ts
│   ├── 📂 styles/
│   │   └── 🎨 global.css
│   ├── 📜 App.tsx
│   ├── 📜 main.tsx
├── ⚙️ eslint.config.js
├── 📝 index.html
├── 📜 package.json
├── ⚙️ postcss.config.js
├── ⚙️ tailwind.config.js
├── ⚙️ tsconfig.json
└── ⚙️ vite.config.ts
```

---

## 🛠️ Como Executar o Projeto

### 1️⃣ Clone o repositório:
```bash
git clone https://github.com/bruno1098/EditorRedacao.git
cd EditorRedacao
```

### 2️⃣ Instale as dependências:
```bash
npm install
```

### 3️⃣ Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### 4️⃣ Acesse a aplicação no navegador:  
Após iniciar o servidor, o terminal exibirá um endereço local semelhante a este:

```bash
VITE v5.4.8  ready in 550 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

🔗 **Clique no endereço local que aparecer no terminal para abrir a aplicação no navegador.**  
⚠️ *O endereço pode variar dependendo da configuração do seu ambiente.*

---



