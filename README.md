# Currículo Fácil

O Currículo Fácil é uma aplicação web desenvolvida como trabalho acadêmico para a disciplina de desenvolvimento frontend. O projeto permite cadastrar, organizar, pesquisar e consultar currículos profissionais de maneira simples e acessível.

## Objetivo do projeto

O objetivo é aplicar, na prática, os conhecimentos estudados sobre desenvolvimento web com Next.js. Durante o desenvolvimento, foram trabalhados conceitos como organização de componentes, criação de formulários, validação de dados, navegação entre páginas, armazenamento local e adaptação da interface para diferentes tamanhos de tela.

## Principais funcionalidades

- página inicial com a apresentação do sistema;
- cadastro completo de currículos;
- inclusão de diferentes experiências profissionais e formações acadêmicas;
- validação dos campos obrigatórios;
- formatação automática de CPF, telefone e data de nascimento;
- seleção e pré-visualização da foto de perfil;
- listagem dos currículos cadastrados;
- pesquisa por nome ou cargo;
- página com as informações completas de cada currículo;
- opção para remover um currículo após confirmação;
- mensagens de sucesso e de erro durante as ações;
- armazenamento dos dados no próprio navegador;
- interface adaptada para computadores, tablets e celulares.

## Tecnologias utilizadas

- Next.js e React;
- TypeScript;
- Tailwind CSS;
- componentes no padrão shadcn/ui;
- React Hook Form e Yup;
- Sonner e SweetAlert2;
- Lucide React.

## Como executar

É necessário ter o Node.js instalado. Depois de abrir a pasta do projeto, execute:

```bash
npm install
npm run dev
```

Em seguida, acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Páginas do sistema

| Endereço | Conteúdo |
| --- | --- |
| `/` | apresentação do projeto |
| `/curriculos/visualizar` | listagem e pesquisa de currículos |
| `/curriculos/visualizar/[id]` | informações completas de um currículo |
| `/curriculos/cadastrar` | formulário de cadastro |

## Armazenamento dos dados

O sistema começa com três currículos de exemplo. Os novos cadastros e as exclusões ficam armazenados somente no navegador utilizado, por meio do `localStorage`. Por se tratar da primeira etapa do trabalho, o projeto ainda não utiliza banco de dados ou servidor próprio para guardar essas informações.

## Autor

Projeto acadêmico desenvolvido por **Pierre Mandel**.
