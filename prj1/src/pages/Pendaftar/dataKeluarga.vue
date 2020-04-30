<template>
  <q-layout class="bg-yellow-grey-1" view="hHh Lpr lFf">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <q-card-section class ="text-blue-grey-12">
                  <div class ="text-h4">Data Keluarga</div>
                </q-card-section>
                <div class="col-md-12 col-xs-12 q-pt-md">
                  <div class="q-pa-md">

                    <q-form
                      @submit="onSubmit"
                      @reset="onReset"
                      class="q-gutter-md"
                    >
                      <q-input
                        filled
                        v-model="Nayah"
                        label="Nama Ayah "
                        hint="Nama Ayah"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="PekerjaanA"
                        label="Pekerjaan Ayah"
                        hint ="Pekerjaan Ayah"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        v-model="Nibu"
                        label="Nama Ibu"
                        hint ="Nama Ibu"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="PekerjaanI"
                        label="Pekerjaan Ibu"
                        hint ="Pekerjaan ibu"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="Saudara"
                        label="Jumlah Saudara"
                        hint ="Jumlah Saudara"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="Tkeluarga"
                        label="Tanggungan Keluarga"
                        hint ="Tanggungan Keluarga"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <div>
                        <q-btn label="Simpan"  type="submit" color="primary"/>
                        <q-btn label="Upload Foto "  to="/pendaftar/foto" color="primary" flat class="q-ml-sm" />
                      </div>
                    </q-form>

                  </div>
                </div>
              </div>
            </q-card>
          </div>
        </div>

      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'registrasi',
  data () {
    return {
      Nayah: null,
      PekerjaanA: null,
      Nibu: null,
      PekerjaanI: null,
      Saudara: null,
      Tkeluarga: null,
      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'You need to accept the license and terms first'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>

<style scoped>

</style>
