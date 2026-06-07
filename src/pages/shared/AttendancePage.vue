<template>
  <q-page padding class="page-content">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">Presencas</div>
        <div class="text-body1 text-grey-7">
          Registro diario de frequencia dos alunos.
        </div>
      </div>
      <q-btn color="primary" icon="fact_check" label="Registrar chamada" unelevated />
    </div>

    <q-card flat bordered class="data-card">
      <q-table
        flat
        :rows="attendanceRows"
        :columns="columns"
        row-key="id"
        hide-bottom
      >
        <template #body-cell-status="props">
          <q-td :props="props">
            <q-chip
              dense
              :color="props.row.status === 'presente' ? 'green-1' : 'red-1'"
              :text-color="props.row.status === 'presente' ? 'green-9' : 'red-9'"
            >
              {{ props.row.status }}
            </q-chip>
          </q-td>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import attendance from 'src/data/mockAttendance'
import classes from 'src/data/mockClasses'
import students from 'src/data/mockStudents'

defineOptions({
  name: 'AttendancePage'
})

const columns = [
  { name: 'date', label: 'Data', field: 'date', align: 'left' },
  { name: 'studentName', label: 'Aluno', field: 'studentName', align: 'left' },
  { name: 'className', label: 'Turma', field: 'className', align: 'left' },
  { name: 'status', label: 'Status', field: 'status', align: 'left' }
]

const attendanceRows = computed(() => attendance.map((record) => {
  const student = students.find((item) => item.id === record.studentId)
  const schoolClass = classes.find((item) => item.id === record.classId)

  return {
    ...record,
    studentName: student?.name || 'Aluno nao encontrado',
    className: schoolClass?.name || 'Sem turma'
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
