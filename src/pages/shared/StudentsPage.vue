<template>
  <q-page padding class="page-content">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">Alunos</div>
        <div class="text-body1 text-grey-7">
          Cadastro escolar e acesso rapido ao perfil dos estudantes.
        </div>
      </div>
      <q-btn color="primary" icon="person_add" label="Novo aluno" unelevated />
    </div>

    <q-card flat bordered class="data-card">
      <q-list separator>
        <q-item
          v-for="student in enrichedStudents"
          :key="student.id"
          clickable
          v-ripple
          :to="student.profileUrl"
        >
          <q-item-section avatar>
            <q-avatar color="primary" text-color="white" icon="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-weight-bold">{{ student.name }}</q-item-label>
            <q-item-label caption>
              Matricula {{ student.registration }} - {{ student.className }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-chip dense color="green-1" text-color="green-9">{{ student.status }}</q-chip>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import students from 'src/data/mockStudents'
import classes from 'src/data/mockClasses'

defineOptions({
  name: 'StudentsPage'
})

const enrichedStudents = computed(() => students.map((student) => {
  const schoolClass = classes.find((item) => item.id === student.classId)

  return {
    ...student,
    className: schoolClass?.name || 'Sem turma',
    profileUrl: `/alunos/${student.id}`
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
}
</style>
