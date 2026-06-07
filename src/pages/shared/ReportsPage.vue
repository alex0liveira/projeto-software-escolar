<template>
  <q-page padding class="page-content">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">Relatorios</div>
        <div class="text-body1 text-grey-7">
          Analises e exportacoes da rotina escolar.
        </div>
      </div>
      <q-btn color="primary" icon="download" label="Exportar" unelevated />
    </div>

    <div class="row q-col-gutter-md">
      <div v-for="report in reports" :key="report.id" class="col-12 col-md-6">
        <q-card flat bordered class="data-card">
          <q-card-section class="row items-center justify-between q-gutter-md">
            <div>
              <div class="text-subtitle1 text-weight-bold">{{ report.title }}</div>
              <div class="text-caption text-grey-7">{{ report.type }}</div>
            </div>
            <q-chip
              dense
              :color="report.status === 'disponivel' ? 'green-1' : 'orange-1'"
              :text-color="report.status === 'disponivel' ? 'green-9' : 'orange-9'"
            >
              {{ report.status }}
            </q-chip>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import reports from 'src/data/mockReports'

defineOptions({
  name: 'ReportsPage'
})
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
