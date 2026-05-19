# EduTech Forward — Data Governance Command Center

Este repositório apresenta uma proposta prática de governança de dados para a **EduTech Forward**, uma edtech em crescimento que enfrenta desafios de descentralização de dados, perda de memória técnica, ausência de dicionário de dados e baixa rastreabilidade no processo de cancelamento de matrícula.

A solução foi estruturada como uma entrega inicial da consultoria **DataVault Soluções**, com foco em criar uma base simples, auditável e escalável para apoiar a governança de dados da empresa.

## Objetivo do projeto

Organizar a primeira camada de governança de dados da EduTech Forward, contemplando:

- Mapa de atores e responsabilidades
- Dicionário de dados do processo
- Estrutura de repositório e Content Management
- Padrão de nomenclatura e metadados
- Análise de riscos LGPD e transparência
- Página executiva de apresentação do projeto

## Problema identificado

A EduTech Forward opera com dados espalhados entre Suporte, Financeiro, Vendas, Produto e BI. Cada área utiliza planilhas, sistemas e nomes diferentes para informações parecidas. Como consequência, surgem inconsistências, retrabalho, dificuldade de auditoria e perda de confiança nos dados.

Um dos pontos críticos está no processo de cancelamento de matrícula: o aluno solicita o cancelamento ao suporte, mas a comunicação entre áreas ocorre por planilhas e e-mails, sem rastreabilidade clara. Em alguns casos, o acesso à plataforma permanece ativo mesmo após a solicitação de cancelamento.

## Solução proposta

A proposta cria um **Data Governance Command Center**, usando o GitHub como ambiente central para documentação, versionamento, histórico de decisões e organização dos artefatos de governança.

O repositório funciona como uma **Single Source of Truth**, ou seja, uma fonte única e oficial para documentos, regras, dados de referência e evidências do projeto.

## Estrutura do repositório

| Pasta | Finalidade |
|---|---|
| `/documentacao` | Plano de ação, decisões, relatórios e regras gerais de governança |
| `/dados` | Dados mockados, amostras e evidências de qualidade |
| `/dicionario_dados` | Dicionário de dados, glossário e padrão de nomenclatura |
| `/processos` | Atores, responsabilidades, objetos de dados e fluxo de cancelamento |
| `/seguranca_lgpd` | Riscos LGPD, matriz de acesso e regras de transparência |
| `/docs` | Site publicado via GitHub Pages |

## Página publicada

Acesse a versão visual do projeto:

https://ramosrabelo-ia.github.io/EduTechForward/

## Tecnologias utilizadas

- GitHub
- GitHub Pages
- HTML
- CSS
- JavaScript
- Markdown

## Disciplina

**Data Ethics, Governance & Security in the AI Age**  
FIAP — Checkpoint 3
