# 🔗 Curta Link – Encurtador de URLs

**Curta Link** é um encurtador de links simples, rápido e eficiente, desenvolvido com foco em **baixa latência**, **independência de serviços de terceiros** e **uso mínimo de dependências externas**. Ideal para quem busca uma API leve e funcional para gerar URLs curtas de forma rápida e sem complicações.

## 🚀 Objetivo

Criar uma API de encurtamento de links com:
- Persistência interna (sem uso de APIs externas), garantindo **baixa latência** e **controle total sobre os dados**;
- Utilização mínima de bibliotecas externas para manter o projeto **leve**, **seguro** e **fácil de manter**.

## 🧱 Estrutura do Projeto
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

