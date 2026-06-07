<template>
  <q-card flat bordered class="login-card">
    <q-card-section>
      <div class="text-h6 text-weight-bold">Acesso ao sistema</div>
      <div class="text-body2 text-grey-7 q-mt-xs">
        Entrada simulada para apresentacao do prototipo.
      </div>
    </q-card-section>

    <q-card-section class="q-gutter-md">
      <q-input
        outlined
        label="CPF ou e-mail"
        model-value="maria@escola.com"
        readonly
      >
        <template #prepend>
          <q-icon name="person" />
        </template>
      </q-input>

      <q-input
        outlined
        label="Senha"
        type="password"
        model-value="123456"
        readonly
      >
        <template #prepend>
          <q-icon name="lock" />
        </template>
      </q-input>
    </q-card-section>

    <q-card-actions class="q-pa-md">
      <q-btn
        unelevated
        color="primary"
        label="Entrar"
        icon-right="login"
        class="full-width"
        to="/"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineOptions({
  name: 'LoginPage'
})
</script>

<style scoped>
.login-card {
  border-radius: 8px;
  box-shadow: 0 18px 40px rgba(25, 42, 70, 0.12);
}
</style>
