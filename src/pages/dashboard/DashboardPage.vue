<template>
  <q-page padding class="page-content">
    <div class="row items-center justify-between q-mb-lg">
      <div>
        <div class="text-h4 text-weight-bold">Dashboard</div>
        <div class="text-body1 text-grey-7">
          Visao inicial dos indicadores da rede escolar municipal.
        </div>
      </div>
      <q-btn color="primary" icon="event" label="Ano letivo 2026" unelevated />
    </div>

    <div class="row q-col-gutter-md">
      <div
        v-for="card in summaryCards"
        :key="card.label"
        class="col-12 col-sm-6 col-md-3"
      >
        <q-card flat bordered class="summary-card">
          <q-card-section class="row items-center no-wrap">
            <q-avatar :color="card.color" text-color="white" :icon="card.icon" />
            <div class="q-ml-md">
              <div class="text-h5 text-weight-bold">{{ card.value }}</div>
              <div class="text-caption text-grey-7">{{ card.label }}</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-12 col-md-8">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle1 text-weight-bold">Acompanhamento rapido</div>
            <div class="text-body2 text-grey-7">
              Espaco reservado para graficos e indicadores consolidados.
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <q-linear-progress size="14px" :value="0.78" color="primary" rounded />
            <div class="row justify-between text-caption text-grey-7 q-mt-sm">
              <span>Frequencia media</span>
              <span>78%</span>
            </div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-12 col-md-4">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-subtitle1 text-weight-bold">Pendencias</div>
            <q-list dense separator class="q-mt-sm">
              <q-item>
                <q-item-section avatar><q-icon name="assignment" color="primary" /></q-item-section>
                <q-item-section>Documentos de matricula</q-item-section>
              </q-item>
              <q-item>
                <q-item-section avatar><q-icon name="fact_check" color="teal" /></q-item-section>
                <q-item-section>Conferencia de presencas</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'DashboardPage'
})

const summaryCards = [
  { label: 'Alunos ativos', value: '420', icon: 'groups', color: 'primary' },
  { label: 'Turmas', value: '17', icon: 'class', color: 'teal' },
  { label: 'Frequencia hoje', value: '92%', icon: 'fact_check', color: 'indigo' },
  { label: 'Avisos abertos', value: '6', icon: 'campaign', color: 'deep-orange' }
]
</script>

<style scoped>
.page-content {
  max-width: 1280px;
  margin: 0 auto;
}

.summary-card {
  border-radius: 8px;
}
</style>
