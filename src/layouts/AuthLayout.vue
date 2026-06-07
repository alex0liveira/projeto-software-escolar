<template>
  <q-layout class="auth-layout">
    <q-page-container>
      <q-page class="auth-page row items-center justify-center q-pa-md">
        <div class="auth-shell">
          <div class="auth-brand q-mb-lg">
            <q-avatar color="primary" text-color="white" icon="school" size="56px" />
            <div>
              <div class="text-h5 text-weight-bold">Gestor Escolar Municipal</div>
              <div class="text-body2 text-grey-7">Apoio a gestao escolar da rede municipal</div>
            </div>
          </div>

          <router-view />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
defineOptions({
  name: 'AuthLayout'
})
</script>

<style scoped>
.auth-layout {
  background:
    linear-gradient(135deg, rgba(21, 101, 192, 0.08), rgba(0, 150, 136, 0.08)),
    #f6f8fb;
}

.auth-page {
  min-height: 100vh;
}

.auth-shell {
  width: min(100%, 440px);
}

.auth-brand {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>
