<template>
  <q-page padding>
    <q-table :title="'Consultas (' + rows.length + ')'" :rows="rows" :columns="columns" row-key="id">
      <template v-slot:header-cell-acoes="props">
        <q-th :props="props">Ações</q-th>
      </template>
      <template v-slot:top>
        <span class="text-h5">Consultas <span class="text-h6" style="color: rgb(167, 167, 167);">({{ rows.length
        }})</span></span>
        <q-space />
        <div class="q-pa-md">
          <q-input outlined class="col-lg-6 col-xs-12" filled v-model="filtroCPF" label="Filtrar por CPF" dense />
        </div>
        <q-btn class="text-white" no-caps :disable="loading" label="Cadastrar" :to="{ name: 'formConsulta' }"
          style="background-color: #26335d; width: 120px" />
      </template>

      <template v-slot:body-cell-acoes="props">
        <q-td :props="props">
          <q-btn style="margin-right: 5px;" icon="edit" color="primary" dense
            :to="{ name: 'editConsulta', params: { id: props.row.IdConsulta } }">
          </q-btn>
          <q-btn icon="delete" color="negative" dense @click="confirm(props.row.id)">
          </q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-badge :color="getStatusBadgeColor(props.row.Status)">{{ props.row.Status }}</q-badge>
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
  name: 'ConsultasPage',

  setup() {

    const getStatusBadgeColor = (status) => {
      console.log('status', status)
      return status === 'Concluído' ? 'red' : 'green';
    };

    const columns = ref([
      { name: 'IdConsulta', field: 'IdConsulta', label: 'Id', sortable: true, align: 'left' },
      { name: 'tipo', field: 'tipo', label: 'Tipo do Animal', sortable: true, align: 'left' },
      { name: 'nomeAnimal', field: 'nomeAnimal', label: 'Nome do Animal', sortable: true, align: 'left' },
      { name: 'contato', field: 'contato', label: 'Contato', sortable: true, align: 'left' },
      { name: 'CPF', field: 'CPF', label: 'CPF do Cliente', sortable: true, align: 'left' },
      { name: 'veterinario', field: 'veterinario', label: 'Veterinário', sortable: true, align: 'left' },
      { name: 'DataConsulta', field: 'DataConsulta', label: 'Data', sortable: true, align: 'left' },
      { name: 'status', field: 'Status', label: 'Status', sortable: true, align: 'left', filter: true },

      { name: 'acoes', field: 'acoes', label: 'Ações', sortable: true, align: 'right' },
    ])

    const rows = ref([])
    const filtroCPF = ref('');


    const fetchData = async () => {
      try {
        const response = await api.get('/api/Consulta');
        const consultas = response.data.map(consulta => {
          return {
            ...consulta,
            nomeAnimal: consulta.Animal.Nome,
            tipo: consulta.Animal.Tipo,
            veterinario: `${consulta.Veterinarios.Nome} ${consulta.Veterinarios.Sobrenome}`,
            contato: consulta.Animal.Clientes.Telefone,
            CPF: consulta.Animal.Clientes.CPF
          };
        });


        rows.value = filtroCPF.value
          ? consultas.filter(consulta => consulta.CPF.includes(filtroCPF.value))
          : consultas;



        console.log(consultas);
      } catch (error) {
        console.error('Erro ao buscar dados:', error)
      }

    }

    const handleFilterChange = () => {
      fetchData();
    };
    watch(filtroCPF, handleFilterChange);

    const $q = useQuasar();

    const confirm = (id) => {

      $q.dialog({
        title: 'Confirmar',
        message: 'Tem certeza que deseja excluir?',
        ok: 'Sim',
        cancel: 'Cancelar'
      }).onOk(() => {
        deleteRow(id)
        $q.notify({
          message: 'Excluído com sucesso.',
          color: 'secondary'
        })
      })
    }

    const deleteRow = (id) => {
      const index = rows.value.findIndex(row => row.id === id)

      if (index !== -1) {
        rows.value.splice(index, 1)
      }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      columns,
      rows,
      confirm,
      filtroCPF,
      getStatusBadgeColor,
    }
  }
})
</script>


