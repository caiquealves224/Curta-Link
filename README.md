# 🔗 Curta Link – O modificador de links que você precisava e não sabia


**Curta Link**  é um modificador de links simples, rápido e eficiente. Desenvolvido com foco em  **baixa latência**,  **independência de serviços de terceiros**  e  **uso mínimo de dependências externas**. Ideal para quem busca uma API leve e funcional para gerar URLs modificadas de forma rápida e sem complicações. Possuindo tudo para que você "curta" o seu link.

## 💬 Objetivo

Precisando fazer alterações estilísticas em um link que será compartilhado e não quer referenciar diretamente a URL original? Com essa API será plenamente possível:

-	Encurtar ou alongar links, passando de uma URL indesejada para uma mais coesa e fácil de compartilhar;
-	Modificar o preview de links quando colados em uma caixa de texto de aplicativos de mensagens; 

Para isso, ser uma API de modificações de links com:
- Persistência interna (sem uso de APIs externas), garantindo **baixa latência** e **controle total sobre os dados**;
- Utilização mínima de bibliotecas externas para manter o projeto **leve**, **seguro** e **fácil de manter**.

## 📃 Estrutura do Projeto
Este repositório é um monorepo gerenciado com pnpm workspaces. Isso permite gerenciar múltiplos pacotes (como o frontend e o backend) de forma organizada e eficiente, compartilhando dependências comuns e facilitando o desenvolvimento local.

```perl
curta-link/
├── apps/
│   ├── api/        # Backend (Node.js + TypeScript)
│   └── web/        # Frontend (React + Vite)
├── package.json    # Configuração dos workspaces
├── pnpm-workspace.yaml
```

## 🧠 Tecnologias Utilizadas

### 🔧 Backend
- **Node.js**
- **TypeScript**
- Armazenamento local com persistência em memória (ideal para projetos simples e testes rápidos)

### 💻 Frontend
- **React**
- **Vite**

## 🌐 Aplicação Online

Você pode testar a aplicação em:  
API: 👉 [https://curta-link.onrender.com](https://curta-link.onrender.com)

FRONT: 👉 [https://curta-link-web.onrender.com](https://curta-link-web.onrender.com)

## 📦 Como executar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/curta-link.git

# Acesse a pasta do curta-link
cd curta-link

# Instale as dependências
pnpm install

# Inicie o servidor
pnpm -r run dev
```

**Curta Link** utiliza a licença [MIT](https://github.com/caiquealves224/Curta-Link/tree/main?tab=MIT-1-ov-file).
