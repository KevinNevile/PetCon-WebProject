<template>
  <q-page padding>
    <q-table :title="'Consultas (' + rows.length + ')'" :rows="rows" :columns="columns" row-key="id">
      <template v-slot:header-cell-acoes="props">
        <q-th :props="props">Ações</q-th>
      </template>
      <template v-slot:top>
        <span class="text-h5">Consultas <span class="text-h6">({{ rows.length }})</span></span>
        <q-space />
        <q-btn color="primary" :disable="loading" label="Cadastrar" :to="{ name: 'formConsulta' }" />
      </template>

      <template v-slot:body-cell-acoes="props">
        <q-td :props="props">
          <q-btn style="margin-right: 5px;" icon="edit" color="primary" dense @click="editRow(props.row.id)">
          </q-btn>
          <q-btn icon="delete" color="negative" dense @click="deleteRow(props.row.id)">
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConsultasPage',
  data() {
    return {
      columns: [
        { name: 'id', field: 'id', label: 'Id', sortable: true, align: 'left' },
        { name: 'tipo', field: 'tipo', label: 'Animal', sortable: true, align: 'left' },
        { name: 'contato', field: 'contato', label: 'Contato', sortable: true, align: 'left' },
        { name: 'data', field: 'data', label: 'Data', sortable: true, align: 'left' },
        { name: 'status', field: 'status', label: 'Status', sortable: true, align: 'left' },
        { name: 'acoes', field: 'acoes', label: 'Ações', sortable: true, align: 'right' },
      ],
      rows: [
        { id: 1, tipo: 'Cachorro', contato: 'Email', data: '2023-10-20', status: 'Agendado' },
        { id: 2, tipo: 'Gato', contato: 'Telefone', data: '2023-10-22', status: 'Concluído' },
        { id: 3, tipo: 'Pássaro', contato: 'Email', data: '2023-10-25', status: 'Agendado' },
      ],
    }
  },
  methods: {
    deleteRow(id) {
      const index = this.rows.findIndex(row => row.id === id);

      if (index !== -1) {
        this.rows.splice(index, 1);
      }
    }
  }
})
</script>
