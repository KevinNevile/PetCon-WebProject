<template>
  <q-page padding>
    <q-table
      :title="'Clientes (' + rows.length + ')'"
      :rows="rows"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:header-cell-acoes="props">
        <q-th :props="props">Ações</q-th>
      </template>
      <template v-slot:top>
        <span class="text-h5"
          >Clientes
          <span class="text-h6" style="color: rgb(167, 167, 167)"
            >({{ rows.length }})</span
          ></span
        >
        <q-space />
        <div class="q-pa-md">
          <q-input
            outlined
            class="col-lg-6 col-xs-12"
            filled
            v-model="filtroCPF"
            label="Filtrar por CPF"
            dense
          />
        </div>
        <q-btn
          class="text-white"
          no-caps
          :disable="loading"
          label="Cadastrar"
          :to="{ name: 'formCliente' }"
          style="background-color: #26335d; width: 120px"
        />
      </template>

      <template v-slot:body-cell-acoes="props">
        <q-td :props="props">
          <q-btn
            style="margin-right: 5px"
            icon="edit"
            color="primary"
            dense
            :to="{ name: 'editCliente' }"
          >
          </q-btn>
          <q-btn
            icon="delete"
            color="negative"
            dense
            @click="confirm(props.row.id)"
          >
          </q-btn>
        </q-td>
      </template>

      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <q-badge
            :color="props.row.status === 'Concluído' ? 'red' : 'green'"
            >{{ props.row.status }}</q-badge
          >
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { ref, defineComponent, onMounted } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "ClientesPage",

  setup() {
    const columns = ref([
      {
        name: "nomeCliente",
        field: "nomeCliente",
        label: "Nome",
        sortable: true,
        align: "left",
      },
      {
        name: "sobrenomeCliente",
        field: "sobrenomeCliente",
        label: "Sobrenome",
        sortable: true,
        align: "left",
      },
      {
        name: "cpfCliente",
        field: "cpfCliente",
        label: "CPF do Cliente",
        sortable: true,
        align: "left",
      },
      {
        name: "emailCliente",
        field: "emailCliente",
        label: "E-mail",
        sortable: true,
        align: "left",
      },
      {
        name: "telefoneCliente",
        field: "telefoneCliente",
        label: "Telefone Contato",
        sortable: true,
        align: "left",
        filter: true,
      },
      {
        name: "acoes",
        field: "acoes",
        label: "Ações",
        sortable: true,
        align: "right",
      },
    ]);

    const rows = ref([
      {
        nomeCliente: "John",
        sobrenomeCliente: "Armeni",
        cpfCliente: "22548473578",
        emailCliente: "emailjohn@email.com",
        telefoneCliente: "1897050348",
      },
      {
        nomeCliente: "Luana",
        sobrenomeCliente: "Feliciano",
        cpfCliente: "22408606051",
        emailCliente: "emailluana@email.com",
        telefoneCliente: "14972505406",
      },
      {
        nomeCliente: "Kevin",
        sobrenomeCliente: "Nevile",
        cpfCliente: "45762130468",
        emailCliente: "emailkevin@email.com",
        telefoneCliente: "14963045710",
      },
      {
        nomeCliente: "Daniel",
        sobrenomeCliente: "Pontolio",
        cpfCliente: "41625879300",
        emailCliente: "emaildaniel@email.com",
        telefoneCliente: "14978501344",
      },
    ]);

    const $q = useQuasar();

    const confirm = (id) => {
      $q.dialog({
        title: "Confirmar",
        message: "Tem certeza que deseja excluir?",
        ok: "Sim",
        cancel: "Cancelar",
      }).onOk(() => {
        deleteRow(id);
        $q.notify({
          message: "Excluído com sucesso.",
          color: "secondary",
        });
      });
    };

    const deleteRow = (id) => {
      const index = rows.value.findIndex((row) => row.id === id);

      if (index !== -1) {
        rows.value.splice(index, 1);
      }
    };

    onMounted(() => {});

    return {
      columns,
      rows,
      confirm,
    };
  },
});
</script>
