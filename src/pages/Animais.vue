<template>
    <q-page padding>
        <q-table :title="'Animais (' + rows.length + ')'" :rows="rows" :columns="columns" row-key="id">
            <template v-slot:header-cell-acoes="props">
                <q-th :props="props">Ações</q-th>
            </template>
            <template v-slot:top>
                <span class="text-h5">Animais <span class="text-h6" style="color: rgb(167, 167, 167);">({{ rows.length
                }})</span></span>
                <q-space />
                <div class="q-pa-md">
                    <q-input outlined class="col-lg-6 col-xs-12" filled v-model="filtroCPF" label="Filtrar por CPF" dense />
                </div>
                <q-btn class="text-white" no-caps :disable="loading" label="Cadastrar" :to="{ name: 'formAnimal' }"
                    style="background-color: #26335d; width: 120px" />
            </template>

            <template v-slot:body-cell-acoes="props">
                <q-td :props="props">
                    <q-btn style="margin-right: 5px;" icon="edit" color="primary" dense
                        :to="{ name: 'editAnimal', params: { idCliente: props.row.clienteId, idAnimal: props.row.animalId } }">
                    </q-btn>
                    <q-btn v-if="props.row.ativo != false" icon="delete" color="negative" dense
                        @click="confirm(props.row.animalId)">
                    </q-btn>
                </q-td>
            </template>

            <template v-slot:body-cell-sexo="props">
                <q-td :props="props">
                    <q-badge :color="getSexoBadgeColor(props.row.sexo)">{{ props.row.sexo }}</q-badge>
                </q-td>
            </template>

            <template v-slot:body-cell-ativo="props">
                <q-td :props="props">
                    <q-badge :color="getStatusBadgeColor(props.row.ativo)">{{ props.row.ativo }}</q-badge>
                </q-td>
            </template>

        </q-table>
    </q-page>
</template>
  
<script>
import { ref, defineComponent, onMounted, watch } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'src/boot/axios'

export default defineComponent({
    name: 'AnimaisPage',

    setup() {

        const rows = ref([])
        const filtroCPF = ref('');

        const getSexoBadgeColor = (sexo) => {
            switch (sexo) {
                case 'Macho':
                    return 'blue';
                case 'Fêmea':
                    return 'pink';
            }
        };

        const getStatusBadgeColor = (status) => {
            console.log('status', status)
            switch (status) {
                case true:
                    return 'green';
                case false:
                    return 'red';
            }
        };

        const columns = ref([
            { name: 'animalId', field: 'animalId', label: 'Id', sortable: true, align: 'left' },
            { name: 'tipo', field: 'tipo', label: 'Tipo do Animal', sortable: true, align: 'left' },
            { name: 'nome', field: 'nome', label: 'Nome do Animal', sortable: true, align: 'left' },
            { name: 'raca', field: 'raca', label: 'Raça', sortable: true, align: 'left' },
            { name: 'sexo', field: 'sexo', label: 'Sexo do Animal', sortable: true, align: 'left' },
            { name: 'clienteNome', field: 'clienteNome', label: 'Nome do Cliente', sortable: true, align: 'left' },
            { name: 'cpfCliente', field: 'cpfCliente', label: 'CPF do Cliente', sortable: true, align: 'left' },
            { name: 'ativo', field: 'ativo', label: 'status do Animal', sortable: true, align: 'left' },
            { name: 'idade', field: 'idade', label: 'Idade do Animal', sortable: true, align: 'left' },

            { name: 'acoes', field: 'acoes', label: 'Ações', sortable: true, align: 'right' },
        ])

        const fetchData = async () => {
            try {
                const response = await api.get('/api/Animal');
                const animais = response.data.$values;

                // Carrego o cliente para cada animal
                const ClientePromisse = animais.map(async (animal) => {
                    const clientResponse = await api.get(`/api/Cliente/${animal.clienteId}`);
                    animal.clienteNome = `${clientResponse.data.nome} ${clientResponse.data.sobrenome}`;
                    animal.cpfCliente = clientResponse.data.cpf
                    return animal;
                });

                // Espero carregar o cliente
                const animalComCliente = await Promise.all(ClientePromisse);

                rows.value = filtroCPF.value
                    ? animalComCliente.filter(animal => animal.cpfCliente.includes(filtroCPF.value))
                    : animalComCliente;
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        const handleFilterChange = () => {
            fetchData();
        };
        watch(filtroCPF, handleFilterChange);

        const $q = useQuasar();

        const confirm = (idAnimal) => {

            $q.dialog({
                title: 'Confirmar',
                message: 'Tem certeza que deseja Excluir este Animal?',
                ok: 'Sim',
                cancel: 'Não'
            }).onOk(() => {
                deleteRow(idAnimal)
            })
        }

        const deleteRow = async (id) => {
            const response = await api.delete(`/api/Animal/${id}`);

            console.log('Response:', response);
            $q.notify({
                message: 'Animal Inativado com sucesso.',
                color: 'secondary'
            })

            fetchData()

        }

        onMounted(() => {
            fetchData()
        })

        return {
            columns,
            rows,
            confirm,
            filtroCPF,
            getSexoBadgeColor,
            getStatusBadgeColor
        }
    }
})
</script>
  
  
  