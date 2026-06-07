<template>
  <q-layout view="lHh Lpr lFf" class="main-layout">
    <q-header elevated class="bg-white text-blue-grey-10">
      <q-toolbar class="main-toolbar">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Abrir menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="row items-center no-wrap">
          <q-avatar color="primary" text-color="white" icon="school" size="36px" class="q-mr-sm" />
          <div>
            <div class="text-subtitle1 text-weight-bold">Gestor Escolar Municipal</div>
            <div class="text-caption text-grey-7">Rede Municipal de Ensino</div>
          </div>
        </q-toolbar-title>

        <q-chip color="teal-1" text-color="teal-9" icon="verified_user" class="gt-xs">
          Prototipo
        </q-chip>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :width="280"
      class="main-drawer"
    >
      <div class="drawer-heading q-pa-md">
        <div class="brand-mark">
          <q-avatar color="white" text-color="primary" icon="school" size="46px" />
          <div>
            <div class="text-subtitle1 text-weight-bold">Sistema de Gestão Escolar</div>
          </div>
        </div>

        <q-card flat class="school-card q-mt-md">
          <q-card-section class="q-pa-sm">
            <div class="text-caption text-blue-grey-7">Unidade escolar</div>
            <div class="text-blue text-weight-bold">CIEP Profª Oniva de Moura Brizola</div>
          </q-card-section>
        </q-card>
      </div>

      <q-separator class="drawer-separator" />

      <q-list padding class="drawer-menu">
        <q-item-label header class="menu-section-label">Navegacao</q-item-label>

        <q-item
          v-for="item in menuItems"
          :key="item.label"
          clickable
          v-ripple
          :to="item.to"
          exact
          active-class="menu-item-active"
          class="menu-item"
        >
          <q-item-section avatar>
            <div class="menu-icon">
              <q-icon :name="item.icon" />
            </div>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.label }}</q-item-label>
            <q-item-label caption>{{ item.caption }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <div class="drawer-footer q-pa-md">
        <q-card flat class="profile-card">
          <q-card-section class="row items-center no-wrap q-pa-sm">
            <q-avatar color="primary" text-color="white" icon="person" size="38px" />
            <div class="q-ml-sm">
              <div class="text-body2 text-weight-bold">Maria Oliveira</div>
              <div class="text-caption text-blue-grey-7">Secretaria escolar</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'MainLayout'
})

const menuItems = [
  { label: 'Dashboard', caption: 'Indicadores gerais', icon: 'dashboard', to: '/' },
  { label: 'Alunos', caption: 'Cadastro e perfil', icon: 'groups', to: '/alunos' },
  { label: 'Turmas', caption: 'Organizacao escolar', icon: 'class', to: '/turmas' },
  { label: 'Presencas', caption: 'Frequencia diaria', icon: 'fact_check', to: '/presencas' },
  { label: 'Notas', caption: 'Desempenho escolar', icon: 'grade', to: '/notas' },
  { label: 'Avisos', caption: 'Comunicados', icon: 'campaign', to: '/avisos' },
  { label: 'Relatorios', caption: 'Analises e exportacoes', icon: 'summarize', to: '/relatorios' },
  { label: 'Kanban', caption: 'Fluxo de tarefas', icon: 'view_kanban', to: '/kanban' }
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.main-layout {
  background: #f4f7fb;
}

.main-toolbar {
  min-height: 68px;
}

.main-drawer {
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f7fbff 0%, #ffffff 44%, #f4f8f7 100%);
  color: #263238;
}

.drawer-heading {
  background: linear-gradient(135deg, #1565c0 0%, #00897b 100%);
  color: #ffffff;
}

.brand-mark {
  display: flex;
  align-items: center;
  gap: 12px;
}

.school-card,
.profile-card {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.92);
}

.drawer-separator {
  background: rgba(21, 101, 192, 0.12);
}

.drawer-menu {
  flex: 1;
}

.menu-section-label {
  color: #607d8b;
  font-weight: 700;
  letter-spacing: 0;
  padding-left: 18px;
}

.menu-item {
  border-radius: 8px;
  margin: 6px 10px;
  color: #344955;
  min-height: 58px;
  transition: background 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
}

.menu-item:hover {
  background: rgba(21, 101, 192, 0.08);
}

.menu-icon {
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  background: #eaf3fb;
  color: #1565c0;
}

.menu-item-active {
  background: #ffffff;
  color: #1565c0;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(21, 101, 192, 0.16);
}

.menu-item-active .menu-icon {
  background: #1565c0;
  color: #ffffff;
}

.drawer-footer {
  border-top: 1px solid rgba(21, 101, 192, 0.12);
}
</style>
