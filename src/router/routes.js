const routes = [
  {
    path: '/login',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: '', component: () => import('pages/auth/LoginPage.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/dashboard/DashboardPage.vue') },
      { path: 'alunos', component: () => import('pages/shared/StudentsPage.vue') },
      { path: 'avisos', component: () => import('pages/shared/NoticesPage.vue') },
      { path: 'kanban', component: () => import('pages/shared/KanbanPage.vue') },
      { path: 'notas', component: () => import('pages/shared/GradesPage.vue') },
      { path: 'presencas', component: () => import('pages/shared/AttendancePage.vue') },
      { path: 'relatorios', component: () => import('pages/shared/ReportsPage.vue') },
      { path: 'turmas', component: () => import('pages/shared/ClassesPage.vue') },
      { path: 'alunos/:id', component: () => import('pages/shared/StudentProfilePage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
