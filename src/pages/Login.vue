<template>
  <q-page class="q-pa-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-6">
        <div class="text-h4 text-bold q-mt-md q-mv-xl">Realizar Login</div>
        <div class="text-subtitle1 text-grey-6 q-mt-md q-mv-xl">
          Se você já possue um cadastro, faça login com seu email e senha.
        </div>
        <div class="q-my-xl text-grey-7">
          <h7>Endereço de Email</h7>
          <q-input outlined v-model="login.email" label="Email" />
        </div>
        <div class="q-my-xl text-grey-7">
          <h7>Senha</h7>
          <q-input
            class="q-mt-sm"
            v-model="login.password"
            outlined
            label="Password"
            :type="login.isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="login.isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="login.isPwd = !login.isPwd"
              />
            </template>
          </q-input>
          <div class="q-pa-md text-grey-6">
            <q-checkbox v-model="val">Lembrar-se de mim</q-checkbox>
          </div>
          <q-btn
            class="full-width"
            style="background: #26335d; color: white; padding: 25px"
            label="Acessar"
          />
        </div>
        <div class="q-mt-md text-center">
          Não possui uma conta?
          <router-link to="Colocar aqui">Cadastre-se</router-link>
          <!-- COLOCAR ROTA PARA SE CADASTRAR -->
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

<!-- <q-card
      style="
        width: 300px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      "
    >
      <q-card-section class="q-pt-none full-width">
        <q-input filled v-model="login.email" label="Email" />
        <q-input
          class="q-mt-sm"
          v-model="login.password"
          filled
          label="Password"
          :type="login.isPwd ? 'password' : 'text'"
        >
          <template v-slot:append>
            <q-icon
              :name="login.isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="login.isPwd = !login.isPwd"
            />
          </template>
        </q-input>
      </q-card-section>

      <q-card-actions class="full-width">
        <q-btn
          class="q-mx-sm"
          color="primary"
          label="Login"
          @click="$router.push({ name: 'home' })"
          style="width: 100%"
        />
      </q-card-actions>
      <q-card-actions class="full-width">
        <q-btn
          flat
          no-caps
          class="q-mx-sm"
          color="primary"
          label="Esqueci minha senha"
          @click="$router.push({ name: 'esqueciSenha' })"
          style="width: 100%"
        />
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <div class="absolute-bottom text-subtitle2 text-center">Title</div>
    </q-card> -->
