<template>
  <q-page padding class="page-content">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">Kanban</div>
        <div class="text-body1 text-grey-7">
          Fluxo de tarefas administrativas e pedagogicas.
        </div>
      </div>
      <q-btn color="primary" icon="add_task" label="Nova tarefa" unelevated />
    </div>

    <div class="row q-col-gutter-md">
      <div v-for="column in columns" :key="column.status" class="col-12 col-md-4">
        <div class="column-title q-mb-sm">{{ column.label }}</div>
        <q-card flat bordered class="kanban-column">
          <q-card-section v-if="tasksByStatus(column.status).length === 0" class="text-grey-7">
            Nenhuma tarefa
          </q-card-section>
          <q-list v-else separator>
            <q-item v-for="task in tasksByStatus(column.status)" :key="task.id">
              <q-item-section avatar>
                <q-icon name="task_alt" color="primary" />
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-weight-bold">{{ task.title }}</q-item-label>
                <q-item-label caption>{{ task.ownerRole }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import tasks from 'src/data/mockTasks'

defineOptions({
  name: 'KanbanPage'
})

const columns = [
  { label: 'Pendente', status: 'pendente' },
  { label: 'Em andamento', status: 'em_andamento' },
  { label: 'Concluido', status: 'concluido' }
]

function tasksByStatus (status) {
  return tasks.filter((task) => task.status === status)
}
</script>

<style scoped>
.page-content {
  max-width: 1100px;
  margin: 0 auto;
}

.column-title {
  color: #607d8b;
  font-weight: 700;
}

.kanban-column {
  min-height: 180px;
  border-radius: 8px;
}
</style>
