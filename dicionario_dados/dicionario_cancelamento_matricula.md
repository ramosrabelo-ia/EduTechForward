# Dicionário de Dados — Cancelamento de Matrícula

| Nome Técnico | Tipo | Descrição de Negócio | Valores Permitidos | Dono |
|---|---|---|---|---|
| id_aluno | NUMBER | Código único que identifica o aluno. | inteiro único obrigatório | Área Acadêmica |
| nome_aluno | VARCHAR(150) | Nome completo do aluno. | texto obrigatório | Área Acadêmica |
| email_aluno | VARCHAR(150) | E-mail usado para comunicação. | e-mail válido | Suporte |
| id_matricula | NUMBER | Código único da matrícula. | inteiro único obrigatório | Operações Acadêmicas |
| status_matricula | VARCHAR(30) | Situação atual da matrícula. | ativa, em_cancelamento, cancelada, suspensa | Operações Acadêmicas |
| data_solicitacao_cancelamento | DATE | Data da solicitação de cancelamento. | data válida não futura | Suporte |
| motivo_cancelamento | VARCHAR(100) | Motivo informado pelo aluno. | financeiro, insatisfacao, falta_tempo, troca_curso, outros | Suporte |
| status_financeiro | VARCHAR(30) | Situação financeira antes do cancelamento. | pendente, sem_pendencia, em_analise | Financeiro |
| data_cancelamento_efetivo | DATE | Data em que o cancelamento foi confirmado. | data válida | Operações Acadêmicas |
| status_acesso_plataforma | VARCHAR(30) | Situação do acesso ao curso. | ativo, bloqueado, expirado | Produto / Plataforma |
