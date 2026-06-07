<template>
  <q-page padding class="page-content">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">Perfil do aluno</div>
        <div class="text-body1 text-grey-7">
          Consulta inicial de dados escolares, frequencia e desempenho.
        </div>
      </div>
      <q-btn outline color="primary" icon="arrow_back" label="Voltar" to="/alunos" />
    </div>

    <q-card flat bordered class="profile-card">
      <q-card-section class="row items-center q-col-gutter-md">
        <div class="col-auto">
          <q-avatar color="primary" text-color="white" size="72px" icon="person" />
        </div>
        <div class="col">
          <div class="text-h6 text-weight-bold">{{ student.name }}</div>
          <div class="text-body2 text-grey-7">Matricula {{ student.registration }}</div>
          <q-chip dense color="green-1" text-color="green-9" class="q-mt-sm">
            {{ student.status }}
          </q-chip>
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-md-4">
            <q-item>
              <q-item-section avatar><q-icon name="family_restroom" color="primary" /></q-item-section>
              <q-item-section>
                <q-item-label caption>Responsavel</q-item-label>
                <q-item-label>{{ student.responsibleName }}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12 col-md-4">
            <q-item>
              <q-item-section avatar><q-icon name="class" color="teal" /></q-item-section>
              <q-item-section>
                <q-item-label caption>Turma</q-item-label>
                <q-item-label>5o Ano A</q-item-label>
              </q-item-section>
            </q-item>
          </div>
          <div class="col-12 col-md-4">
            <q-item>
              <q-item-section avatar><q-icon name="fact_check" color="indigo" /></q-item-section>
              <q-item-section>
                <q-item-label caption>Frequencia</q-item-label>
                <q-item-label>92% no mes</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import students from 'src/data/mockStudents'

defineOptions({
  name: 'StudentProfilePage'
})

const route = useRoute()

const student = computed(() => {
  const studentId = Number(route.params.id)

  return students.find((item) => item.id === studentId) || students[0]
})
</script>

<style scoped>
.page-content {
  max-width: 1100px;
  margin: 0 auto;
}

.profile-card {
  border-radius: 8px;
}
</style>
