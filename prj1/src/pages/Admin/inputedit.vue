<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-page padding class="items-center-justify-center bg-grey-3">
    <q-card flat class="bg-white q-pa-md">
      <span class="text-h5 text-weight-light q-pa-md">
        <span class="text-blue-grey-14">Tambah Atau Edit </span>
      </span>
      <div class="q-pa-md">
        <q-form
          class="q-gutter-md"
        >
          <q-input
            label="Nama Lengkap"
            lazy-rules
            color="teal"
            v-model="namalengkap"
            :rules="[
           val => val !== null && val !== '' || 'Nama Lengkap'
           ]">
            <template v-slot:append>
              <q-icon name="dns"/>
            </template>
          </q-input>
          <q-input
            label="Tempat Tangal Lahir"
            lazy-rules
            color="teal"
            v-model="TTL"
            :rules="[
           val => val !== null && val !== '' || 'tempat tanggal lahir'
           ]">
            <template v-slot:append>
              <q-icon name="title"/>
            </template>
          </q-input>
          <q-input
            label="Alamat"
            lazy-rules
            color="teal"
            v-model="Alamat"
            :rules="[
           val => val !== null && val !== '' || 'Alamat'
           ]">
            <template v-slot:append>
              <q-icon name="menu_book"/>
            </template>
          </q-input>
          <q-input
            label="Nama Ayah"
            lazy-rules
            color="teal"
            v-model="namaayah"
            :rules="[
           val => val !== null && val !== '' || 'Nama Ayah'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Pekerjaan Ayah"
            lazy-rules
            color="teal"
            v-model="pekerjaanayah"
            :rules="[
           val => val !== null && val !== '' || 'Pekerjaan ayah'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Nama Ibu"
            lazy-rules
            color="teal"
            v-model="namaibu"
            :rules="[
           val => val !== null && val !== '' || 'Nama Ibu'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Pekerjaan ibu"
            lazy-rules
            color="teal"
            v-model="pekerjaanibu"
            :rules="[
           val => val !== null && val !== '' || 'Pekerjaan Ibu'
           ]">
            <template v-slot:append>
              <q-icon name="calender_today"/>
            </template>
          </q-input>
          <q-input
            label="Jumlah Saudara"
            lazy-rules
            color="teal"
            v-model="jumlahsaudara"
            :rules="[
           val => val !== null && val !== '' || 'Jumlah Saudara'
           ]">
            <template v-slot:append>
              <q-icon name="person"/>
            </template>
          </q-input>
          <q-input
            label="Jumlah Tanggungan"
            lazy-rules
            color="teal"
            v-model="jumlahtanggungan"
            :rules="[
           val => val !== null && val !== '' || 'HJumlah Tangungan'
           ]">
            <template v-slot:append>
              <q-icon name="money"/>
            </template>
          </q-input>
          <div>
            <q-btn
              unelevated
              icon="add"
              label="Simpan"
              style="height: 50px"
              color="teal-6"/>
          </div>
        </q-form>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      namalengkap: null,
      ttl: null,
      namaayah: null,
      pekerjaanayah: null,
      namaibu: null,
      pekerjaanibu: null,
      jumlahsaudara: null,
      jumlahangungan: null
    }
  }
}
</script>

<style scoped>

</style>
