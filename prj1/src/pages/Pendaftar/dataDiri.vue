<template>
  <q-layout class="bg-yellow-gr-1" view="hHh Lpr lFf ">
    <q-page-container>
      <q-page padding class="row items-center justify-center">
        <div class="row full-width">
          <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
            <q-card flat class="bg-white text-black">
              <div class="row">
                <q-card-section class ="text-blue-grey-14">
                  <div class ="text-h4">Data Diri</div>
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
                        v-model="NLengkap"
                        label="Nama Lengkap "
                        hint="Nama Lengkap"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="nik"
                        label="NIK"
                        hint ="NIK"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        v-model="Kelamin"
                        label="Jenis Kelamin"
                        hint ="Jenis Kelamin"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="Agama"
                        label="Agama"
                        hint ="Agama"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="ttl"
                        label="Tempat Tanggal Lahir"
                        hint ="Tempat Tanggal Lahir"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />

                      <q-input
                        filled
                        v-model="Alamat"
                        label="Alamat"
                        hint ="Alamat"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <q-input
                        filled
                        v-model="Prodi"
                        label="Prodi "
                        hint ="Prodi Yang Akan Diambil"
                        lazy-rules
                        :rules="[ val => val && val.length > 0 || 'Data tidak boleh kosong']"
                      />
                      <div>
                        <q-btn label="Simpan" type="submit" color="primary"/>
                        <q-btn label="Pendidikan SMA" to="/pendaftar/pendidikan" color="primary" flat class="q-ml-sm" />
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
  name: 'dataDiri',
  data () {
    return {
      Nlengkap: null,
      nik: null,
      kelamin: null,
      Agama: null,
      ttl: null,
      Alamat: null,
      Prodi: null,
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
