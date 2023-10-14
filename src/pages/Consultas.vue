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
        <q-btn class="text-white" no-caps :disable="loading" label="Cadastrar" :to="{ name: 'formConsulta' }"
          style="background-color: #26335d; width: 120px" />
      </template>

      <template v-slot:body-cell-acoes="props">
        <q-td :props="props">
          <q-btn style="margin-right: 5px;" icon="edit" color="primary" dense :to="{ name: 'editConsulta' }">
          </q-btn>
          <q-btn icon="delete" color="negative" dense @click="confirm(props.row.id)">
          </q-btn>
        </q-td>
      </template>



      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-badge :color="props.row.status === 'Concluído' ? 'red' : 'green'">{{ props.row.status }}</q-badge>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'ConsultasPage',

  setup() {
    const columns = ref([
      { name: 'id', field: 'id', label: 'Id', sortable: true, align: 'left' },
      { name: 'tipo', field: 'tipo', label: 'Animal', sortable: true, align: 'left' },
      { name: 'contato', field: 'contato', label: 'Contato', sortable: true, align: 'left' },
      { name: 'data', field: 'data', label: 'Data', sortable: true, align: 'left' },
      { name: 'status', field: 'status', label: 'Status', sortable: true, align: 'left', filter: true },
      { name: 'acoes', field: 'acoes', label: 'Ações', sortable: true, align: 'right' },
    ])

    const rows = ref([
      { id: 1, tipo: 'Cachorro', contato: 'Email', data: '2023-10-20', status: 'Agendado' },
      { id: 2, tipo: 'Gato', contato: 'Telefone', data: '2023-10-22', status: 'Concluído' },
      { id: 3, tipo: 'Pássaro', contato: 'Email', data: '2023-10-25', status: 'Agendado' },
    ])

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

    })

    return {
      columns,
      rows,
      confirm,
    }
  }
})
</script>


