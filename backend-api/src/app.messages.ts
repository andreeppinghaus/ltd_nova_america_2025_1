export const API_MESSAGES = {
  ERRORS: {
    INVALID_INPUT: 'Entrada inválida. Insira CPF ou data da aula.',
    NOT_FOUND: 'Registro não encontrado',
    UNAUTHORIZED: 'Não autorizado',
  },
  SUCCESS: {
    CREATED: 'Registro criado com sucesso',
    UPDATED: 'Registro atualizado com sucesso',
    DELETED: 'Registro excluído com sucesso',
  },
  SWAGGER: {
    TITLE: 'SisAlfa',
    DESCRIPTION:
      'Sistema de controle de presenças do Programa de Alfabetização e Letramento de Jovens e Adultos do Instituto Yduqs na Estácio. Desenvolvido pelo Laboratório de Transformação Digital (LTD) da Estácio campus Nova América.',
    VERSION: '1.0',
  },
  PARAMETERS: {
    CLASS_GROUP_ID: 'ID da turma',
    UNIT_ID: 'ID da unidade',
    START_DATE: 'Data de início da turma',
    END_DATE: 'Data de término da turma',
    CPF: 'CPF do aluno',
    CLASS_DAY_ID: 'ID da aula',
  },
  CONTROLLER: {
    CLASS_GROUPS: {
      CREATE: 'Cria uma turma',
      GET_ALL: 'Retorna todas as turmas',
      UPDATE: 'Atualiza uma turma',
      DELETE: 'Deleta uma turma'
    },
    CLASS_DAYS: {
      CREATE: 'Cria uma aula',
      GET: 'Retorna aulas de acordo com os parâmetros passados (id, turma e/ou data)',
      UPDATE: 'Atualiza uma aula',
      DELETE: 'Deleta uma aula',
    },
    STUDENTS: {
      CREATE: 'Cria um aluno',
      GET_ALL: 'Retorna todos os alunos',
      UPDATE: 'Atualiza um aluno',
      DELETE: 'Deleta um aluno',
    },
    ATTENDANCES: {
      CREATE: 'Cria uma presença',
      GET: 'Retorna as presenças de acordo com o CPF do aluno e/ou dia de aula',
      UPDATE: 'Atualiza uma presença',
      DELETE: 'Deleta uma presença',
    },
    UNITS: {
      CREATE: 'Cria uma unidade',
      GET_ALL: 'Retorna todas as unidades',
      UPDATE: 'Atualiza uma unidade',
      DELETE: 'Deleta uma unidade',
    },
  },
};
