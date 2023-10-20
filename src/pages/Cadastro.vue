<template>
  <q-page class="q-pa-xl login-background">
    <div class="q-mb-md">
      <q-btn flat round icon="arrow_back" @click="$router.push('/login')">Voltar</q-btn>
    </div>

    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <div class="text-h4 text-bold q-mt-md q-mv-xl">Cadastre-se</div>
        <div class="text-subtitle1 text-grey-6 q-mt-md q-mv-xl">
          Seja uma clínica integrada!
        </div>
        <div class="q-my-lg text-grey-7">
          <h7>Nome</h7>
          <q-input class="q-mt-sm" outlined v-model="login.email" label="Nome" />
        </div>
        <div class="q-my-lg text-grey-7">
          <h7>Sobrenome</h7>
          <q-input class="q-mt-sm" outlined v-model="login.email" label="Sobrenome" />
        </div>
        <div class="q-my-lg text-grey-7">
          <h7>Email</h7>
          <q-input class="q-mt-sm" outlined v-model="login.email" label="Email" />
        </div>
        <div class="q-my-lg text-grey-7">
          <h7>Senha</h7>
          <q-input class="q-mt-sm" v-model="login.password" outlined label="Senha"
            :type="login.isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon :name="login.isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                @click="login.isPwd = !login.isPwd" />
            </template>
          </q-input>
        </div>
        <div class="q-my-lg text-grey-7">
          <h7>Confirmar Senha</h7>
          <q-input class="q-mt-sm" v-model="login.password" outlined label="Confirmar Senha"
            :type="login.isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon :name="login.isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                @click="login.isPwd = !login.isPwd" />
            </template>
          </q-input>
          <q-btn class="full-width q-mt-xl" style="background: #26335d; color: white; padding: 25px" label="Cadastrar"
            :to="{ name: 'login' }" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "PageLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
        isPwd: true,
      },
    };
  },

  setup() {
    return {
      val: ref(false),
    };
  },

  methods: {},
};
</script>

<style scoped>
.login-background {
  background-color: #ffffff;
}
</style>
