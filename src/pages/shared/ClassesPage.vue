<template>
  <q-page padding class="page-content">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">Turmas</div>
        <div class="text-body1 text-grey-7">
          Organizacao das turmas por turno e ano letivo.
        </div>
      </div>
      <q-btn color="primary" icon="add" label="Nova turma" unelevated />
    </div>

    <div class="row q-col-gutter-md">
      <div v-for="schoolClass in classes" :key="schoolClass.id" class="col-12 col-sm-6">
        <q-card flat bordered class="data-card">
          <q-card-section>
            <div class="row items-start justify-between q-gutter-sm">
              <div>
                <div class="text-h6 text-weight-bold">{{ schoolClass.name }}</div>
                <div class="text-body2 text-grey-7">Ano letivo {{ schoolClass.schoolYear }}</div>
              </div>
              <q-chip dense color="teal-1" text-color="teal-9" icon="schedule">
                {{ schoolClass.shift }}
              </q-chip>
            </div>
            <div class="text-body2 text-grey-8 q-mt-md">
              {{ studentCount(schoolClass.id) }} alunos vinculados
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import classes from 'src/data/mockClasses'
import students from 'src/data/mockStudents'

defineOptions({
  name: 'ClassesPage'
})

function studentCount (classId) {
  return students.filter((student) => student.classId === classId).length
}
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
