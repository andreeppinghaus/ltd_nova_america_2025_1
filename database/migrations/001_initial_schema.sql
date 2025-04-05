-- Unidades (escolas/departamentos)
CREATE TABLE unidades (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL UNIQUE
);

-- Usuários com papéis e atribuição de unidade
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    papel VARCHAR(20) NOT NULL CHECK (papel IN ('admin', 'professor', 'monitor', 'aluno')),
    azure_account_id TEXT NULL, -- Opcional (alunos não possuem vínculo com Azure; Valores nulos são permitidos)
    unidade_id INT NOT NULL REFERENCES unidades(id)
);

-- Turmas vinculadas às unidades
CREATE TABLE turmas (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    unidade_id INT NOT NULL REFERENCES unidades(id),
    professor_id INT NOT NULL REFERENCES usuarios(id),
    monitor_id INT REFERENCES usuarios(id)
);

-- Matrículas (alunos nas turmas, com consistência de unidade)
CREATE TABLE matriculas (
    turma_id INT REFERENCES turmas(id) ON DELETE CASCADE,
    aluno_id INT REFERENCES usuarios(id),
    PRIMARY KEY (turma_id, aluno_id)
);

CREATE TABLE padroes_recorrencia (
    id SERIAL PRIMARY KEY,
    turma_id INT NOT NULL REFERENCES turmas(id) ON DELETE CASCADE,
    dias_da_semana CHAR(7) NOT NULL, -- Ex: "1001000" (segunda e quarta)
    data_inicio DATE NOT NULL, -- Ex: '2024-05-01'
    data_fim DATE NOT NULL, -- Ex: '2024-07-31'
    hora_inicio TIME NOT NULL, -- '19:00:00'
    hora_fim TIME NOT NULL -- '21:00:00'
);

CREATE TABLE aulas (
    id SERIAL PRIMARY KEY,
    padrao_recorrencia_id INT REFERENCES padroes_recorrencia(id) ON DELETE CASCADE,
    agendada_para TIMESTAMP NOT NULL, -- Ex: '2024-05-06 19:00:00'
    conteudo TEXT, -- Conteúdo pré-cadastrado
    status VARCHAR(20) DEFAULT 'agendada' CHECK (status IN ('agendada', 'concluída', 'cancelada'))
);

-- Tabela de anexos (arquivos, links, documentos)
CREATE TABLE anexos_aulas (
    id SERIAL PRIMARY KEY,
    aula_id INT NOT NULL REFERENCES aulas(id) ON DELETE CASCADE,
    nome_arquivo TEXT NOT NULL, -- Nome do arquivo (ex.: "exercicios.pdf")
    url_arquivo TEXT NOT NULL, -- Caminho no armazenamento (S3/Google Drive) ou link
    tipo_arquivo VARCHAR(20) -- "pdf", "video", "link", etc.
);

-- Controle de presença
CREATE TABLE presencas (
    aula_id INT REFERENCES aulas(id) ON DELETE CASCADE,
    aluno_id INT REFERENCES usuarios(id),
    status VARCHAR(10) NOT NULL CHECK (status IN ('presente', 'ausente', 'justificado')),
    PRIMARY KEY (aula_id, aluno_id)
);