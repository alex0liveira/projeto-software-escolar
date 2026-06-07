<template>
  <q-page padding class="page-content">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">Notas</div>
        <div class="text-body1 text-grey-7">
          Acompanhamento do desempenho por componente curricular.
        </div>
      </div>
      <q-btn color="primary" icon="edit_note" label="Lancar notas" unelevated />
    </div>

    <q-card flat bordered class="data-card">
      <q-table
        flat
        :rows="gradeRows"
        :columns="columns"
        row-key="id"
        hide-bottom
      >
        <template #body-cell-grade="props">
          <q-td :props="props">
            <q-badge color="primary" class="text-body2">{{ props.row.grade }}</q-badge>
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import grades from 'src/data/mockGrades'
import students from 'src/data/mockStudents'

defineOptions({
  name: 'GradesPage'
})

const columns = [
  { name: 'studentName', label: 'Aluno', field: 'studentName', align: 'left' },
  { name: 'subject', label: 'Disciplina', field: 'subject', align: 'left' },
  { name: 'period', label: 'Periodo', field: 'period', align: 'left' },
  { name: 'grade', label: 'Nota', field: 'grade', align: 'left' }
]

const gradeRows = computed(() => grades.map((record) => {
  const student = students.find((item) => item.id === record.studentId)

  return {
    ...record,
    studentName: student?.name || 'Aluno nao encontrado'
  }
}))
</script>

<style scoped>
.page-content {
  max-width: 1100px;
  margin: 0 auto;
}

.data-card {
  border-radius: 8px;
  overflow: hidden;
}
</style>
