<template>
  <q-page padding class="page-content">
    <div class="q-mb-lg">
      <div class="text-h4 text-weight-bold">Avisos</div>
      <div class="text-body1 text-grey-7">
        Comunicados institucionais e recados importantes para a comunidade escolar.
      </div>
    </div>

    <div class="row q-col-gutter-md">
      <div
        v-for="notice in notices"
        :key="notice.id"
        class="col-12 col-md-6"
      >
        <q-card flat bordered class="notice-card">
          <q-card-section>
            <div class="row items-start justify-between q-gutter-sm">
              <div>
                <div class="text-subtitle1 text-weight-bold">{{ notice.title }}</div>
                <div class="text-caption text-grey-7">{{ notice.audience }}</div>
              </div>
              <q-chip dense color="blue-1" text-color="blue-9" icon="event">
                {{ notice.date }}
              </q-chip>
            </div>
            <div class="text-body2 text-grey-8 q-mt-md">{{ notice.summary }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import notices from 'src/data/mockNotices'

defineOptions({
  name: 'NoticesPage'
})
</script>

<style scoped>
.page-content {
  max-width: 1100px;
  margin: 0 auto;
}

.notice-card {
  border-radius: 8px;
}
</style>
