<template>
  <q-page padding>
    <div>
      <q-card class="custom-card">
        <q-card-section>
          <h5>Cadastrar Cliente</h5>
        </q-card-section>
      </q-card>
    </div>
    <q-card>
      <q-card-section>
        <div class="q-pa-md">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="row q-col-gutter-sm"
          >
            <q-input
              outlined
              class="col-lg-6 col-xs-12"
              filled
              v-model="form.nome"
              label="Nome *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Digite o nome do cliente ',
              ]"
            />

            <q-input
              outlined
              class="col-lg-6 col-xs-12"
              filled
              v-model="form.sobrenome"
              label="Sobrenome *"
              lazy-rules
              :rules="[
                (val) =>
                  (val && val.length > 0) || 'Digite o sobrenome do cliente',
              ]"
            />

            <q-input
              outlined
              class="col-lg-6 col-xs-12"
              filled
              v-model="form.cpf"
              label="CPF *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Digite um CPF válido',
              ]"
            />
            <q-input
              outlined
              class="col-lg-6 col-xs-12"
              filled
              v-model="form.telefone"
              label="Telefone"
            />
            <q-input
              outlined
              class="col-lg-12 col-xs-12"
              filled
              v-model="form.email"
              label="E-mail *"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Digite um e-mail válido',
              ]"
            />

            <div class="col-lg-12 col-xs-12">
              <q-editor v-model="editor" min-height="5rem" />
            </div>

            <div class="col-lg-12 col-xs-12 d-flex justify-end row">
              <div>
                <q-btn
                  no-caps
                  label="Cancelar"
                  :to="{ name: 'clientes' }"
                  color="negative"
                  style="width: 120px"
                />
              </div>
              <div class="q-ml-md">
                <q-btn
                  class="text-white"
                  no-caps
                  label="Confirmar"
                  type="submit"
                  style="background-color: #26335d; width: 120px"
                />
              </div>
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "formCliente",

  setup() {
    const form = ref({
      nome: "",
      sobrenome: "",
      email: "",
      cpf: "",
      telefone: "",
    });
    return {
      form,
    };
  },
});
</script>

<style scoped>
.custom-card {
  height: 70px;
  /* Defina a altura desejada */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
