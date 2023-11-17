<template>
  <q-page class="q-pa-xl login-background">
    <div class="q-mb-md">
      <q-btn flat round icon="arrow_back" @click="$router.push('/')">Voltar</q-btn>
    </div>

    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <div class="text-h4 text-bold q-mt-md q-mv-xl">Realizar Login</div>
        <div class="text-subtitle1 text-grey-6 q-mt-md q-mv-xl">
          Se você já possui o cadastro, faça login com seu email e senha.
        </div>
        <div class="q-my-xl text-grey-7">
          <h7>Endereço de Email</h7>
          <q-input class="q-mt-sm" outlined v-model="login.email" label="Email" />
        </div>
        <div class="q-my-xl text-grey-7">
          <h7>Senha</h7>
          <q-input class="q-mt-sm" v-model="login.password" outlined label="Senha"
            :type="login.isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon :name="login.isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer"
                @click="login.isPwd = !login.isPwd" />
            </template>
          </q-input>
          <div class="q-pa-md text-grey-6">
            <q-checkbox v-model="val">Lembrar-se de mim</q-checkbox>
          </div>
          <q-btn class="full-width" style="background: #26335d; color: white; padding: 25px" label="Acessar"
            @click="fazerLogin" />
            <div v-if="erroLogin" class="mensagem-erro">
              {{ erroLogin }}
            </div>
          <!-- :to="{ name: 'consultas' }" /> -->
        </div>
        <div class="q-mt-md text-center">
          Não possui uma conta?
          <router-link :to="{ name: 'cadastro' }">Cadastre-se</router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "PageLogin",
  data() {
    return {
      login: {
        email: "",
        password: "",
        isPwd: true,
      },
      erroLogin: null,
    };
  },

  setup() {
    return {
      val: ref(false),
    };
  },

  methods: {async fazerLogin() {
      try {
        const response = await axios.post("/api/Clinica/Login", {
          email: this.login.email,
          senha: this.login.password,
        });

        if (response.status === 200) {
          this.$router.push({ name: "consultas" });
        } else {
          this.erroLogin = "Email ou Senha incorretos. Por favor, tente novamente.";
        }
      } catch (error) {
        console.error("Erro durante o login", error);
        this.erroLogin = "Erro durante o login. Por favor, tente novamente.";
      }
    },},
};
</script>

<style scoped>
.login-background {
  background-color: #ffffff;
}

.mensagem-erro {
  color: #ff0000;
  margin-top: 10px;
}
</style>
