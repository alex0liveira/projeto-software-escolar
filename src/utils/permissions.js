export const roles = {
  SECRETARIA: 'secretaria',
  PROFESSOR: 'professor',
  INSPETOR: 'inspetor',
  PEDAGOGO: 'pedagogo',
  DIRECAO: 'direcao',
  ALUNO: 'aluno',
  RESPONSAVEL: 'responsavel',
  SUPERVISAO: 'supervisao'
}

export const roleLabels = {
  secretaria: 'Secretaria',
  professor: 'Professor',
  inspetor: 'Inspetor',
  pedagogo: 'Pedagogo',
  direcao: 'Direcao',
  aluno: 'Aluno',
  responsavel: 'Responsavel',
  supervisao: 'Supervisao'
}

export const permissionsByRole = {
  [roles.SECRETARIA]: ['dashboard', 'students', 'classes', 'attendance', 'notices', 'reports', 'tasks'],
  [roles.PROFESSOR]: ['dashboard', 'classes', 'attendance', 'grades', 'notices', 'tasks'],
  [roles.INSPETOR]: ['dashboard', 'attendance', 'notices', 'tasks'],
  [roles.PEDAGOGO]: ['dashboard', 'students', 'classes', 'grades', 'reports', 'tasks'],
  [roles.DIRECAO]: ['dashboard', 'students', 'classes', 'attendance', 'grades', 'notices', 'reports', 'tasks'],
  [roles.ALUNO]: ['dashboard', 'grades', 'notices'],
  [roles.RESPONSAVEL]: ['dashboard', 'students', 'attendance', 'grades', 'notices'],
  [roles.SUPERVISAO]: ['dashboard', 'students', 'classes', 'attendance', 'grades', 'notices', 'reports']
}

export function canAccess (role, permission) {
  return permissionsByRole[role]?.includes(permission) || false
}
