# Currículo Fácil

Aplicação web para cadastrar, organizar e consultar currículos profissionais. Este projeto foi desenvolvido para a primeira etapa do trabalho de Sistema de Gestão de Currículos, com foco no frontend, na experiência do usuário e na organização dos componentes.

## O que foi desenvolvido

- landing page responsiva com apresentação do sistema;
- menu com indicação visual da página ativa;
- listagem de currículos em cards;
- busca em tempo real por nome ou cargo;
- página dinâmica com os detalhes de cada currículo;
- formulário completo com React Hook Form e Yup;
- campos dinâmicos de experiência e formação usando `useFieldArray`;
- máscaras de CPF, telefone e data;
- upload demonstrativo de foto com pré-visualização;
- persistência local pelo `localStorage`;
- mensagens de sucesso e erro com Sonner;
- confirmação de exclusão com SweetAlert2;
- skeleton de carregamento e estado de lista vazia;
- imagens otimizadas com o componente `Image` do Next.js;
- carregamento sob demanda do formulário.

## Tecnologias

- Next.js 16 com App Router
- React 19 e TypeScript
- Tailwind CSS 4
- componentes no padrão shadcn/ui
- React Hook Form e Yup
- React Input Mask Next
- Sonner e SweetAlert2
- Lucide React

## Como executar

É necessário ter o Node.js instalado. Na pasta do projeto, execute:

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000` no navegador.

Para verificar a versão de produção:

```bash
npm run lint
npm run build
npm start
```

## Rotas principais

| Rota | Função |
| --- | --- |
| `/` | página inicial |
| `/curriculos/visualizar` | lista e busca de currículos |
| `/curriculos/visualizar/[id]` | detalhes de um currículo |
| `/curriculos/cadastrar` | cadastro de um novo currículo |

## Sobre os dados

O sistema inicia com três currículos de demonstração. Cadastros e exclusões são armazenados no `localStorage`, portanto ficam somente no navegador utilizado. O envio da foto também é demonstrativo e não usa servidor ou banco de dados.

## Autor

Projeto acadêmico desenvolvido por Pierre (Pirras).
