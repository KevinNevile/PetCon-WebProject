<template>
    <q-page padding>
        <div>
            <q-card class="custom-card">
                <q-card-section>
                    <h5>Cadastrar Consulta</h5>
                </q-card-section>
            </q-card>
        </div>
        <q-card>
            <q-card-section>
                <div class="q-pa-md">
                    <q-form @submit="onSubmit" @reset="onReset" class="row q-col-gutter-sm">
                        <q-input outlined class="col-lg-6 col-xs-12" filled v-model="form.data" label="Data *" lazy-rules
                            :rules="[val => val && val.length > 0 || 'Digite a Data da Consulta']" />

                        <q-input outlined class="col-lg-6 col-xs-12" filled v-model="form.veterinario" label="Veterinário *"
                            lazy-rules :rules="[val => val && val.length > 0 || 'Digite o Veterinário da Consulta']" />

                        <q-input outlined class="col-lg-6 col-xs-12" filled v-model="form.animal" label="Animal *"
                            lazy-rules :rules="[val => val && val.length > 0 || 'Digite o Animal da Consulta']" />

                        <q-input outlined class="col-lg-6 col-xs-12" filled v-model="form.cliente" label="CPF Cliente *"
                            lazy-rules :rules="[val => val && val.length > 0 || 'Digite o Animal da Consulta']" />

                        <div class="col-lg-12 col-xs-12">
                            <q-editor v-model="editor" min-height="5rem" />
                        </div>

                        <div class="col-lg-12 col-xs-12 d-flex justify-end row">
                            <div>
                                <q-btn no-caps label="Cancelar" :to="{ name: 'consultas' }" color="negative" style="width: 120px" />
                            </div>
                            <div class="q-ml-md">
                                <q-btn class="text-white" no-caps label="Confirmar" type="submit" style="background-color: #26335d; width: 120px;" />
                            </div>
                        </div>
                    </q-form>
                </div>
            </q-card-section>
        </q-card>
    </q-page>
</template>


<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    name: 'formConsulta',

    setup() {
        const form = ref({
            data: '',
            descricao: '',
            animal: '',
            cpf: '',
            cliente: ''
        });
        return {
            form
        }
    }

})
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

