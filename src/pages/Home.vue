<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeLayout",
});
</script>

<template>
  <div class="q-pa-md">
    <q-toolbar
      class="text-white shadow-2 rounded-borders no-shadow"
      style="background-color: #26335d"
    >
      <q-toolbar-title>PetCon</q-toolbar-title>
      <q-space />

      <div class="q-pa-md q-gutter-sm">
        <q-btn
          flat
          style="color: #26335d; width: 120px"
          label="Login"
          text-color="white"
          no-caps
          @click="$router.push('/login')"
        />
        <q-btn
          style="background: #1bc768; color: white; width: 120px"
          label="Cadastre-se"
          no-caps
        />
      </div>
    </q-toolbar>
  </div>
  <div class="q-pa-md items-start q-gutter-md">
    <div class="row" style="background-color: #26335d">
      <div class="col text-white flex flex-center" style="height: 720px">
        <div class="q-pa-md row items-start q-gutter-md">
          <q-card
            class="my-card no-shadow"
            style="background-color: #26335d; height: 450px; width: 450px"
          >
            <q-card-section style="font-size: 55px">
              Agendamentos Rápidos, Cuidados Imediatos
            </q-card-section>
            <q-card-section>
              PetCon: sua clínica veterinária integrada!
            </q-card-section>
            <div class="q-pa-md q-gutter-sm">
              <q-btn
                style="background: #1bc768; color: white; width: 120px"
                label="Começar"
                no-caps
              />
              <q-btn
                outline
                style="color: #1bc768; width: 120px"
                label="Ver mais"
                text-color="#1bc768"
                no-caps
              />
            </div>
          </q-card>
        </div>
      </div>
      <div class="col text-white flex flex-center" style="height: 720px">
        <div class="col-4">
          <q-img
            src="src/assets/PetConImg.png"
            style="height: 400px; width: 600px; border-radius: 36px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #26335d;
}
</style>
