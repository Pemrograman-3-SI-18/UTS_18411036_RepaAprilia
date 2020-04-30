<template>
  <div class="q-px-lg q-pb-md bg-grey-10 text-white">
    <q-timeline dark color="secondary">
      <q-timeline-entry heading>Informasi</q-timeline-entry>

      <q-timeline-entry
        title="Informasi lebih lanjut akan dihubungi lewat email atau nomor telepon yang sudah di cantumkan."

        avatar="https://cdn.quasar.dev/img/avatar5.jpg"
      >
      </q-timeline-entry>

      <q-timeline-entry
      >
        <div>
         Terimakasih telah mendaftar di Universitas April Indonesia, silahkan tunggu konfimasi selanjutnya. DAN TETAP SEMANGAT!
        </div>
      </q-timeline-entry>
    </q-timeline>
    <q-btn label="Kembali" to="/auth/registrasi"  color="primary" flat class="q-ml-sm" />
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: null,
      password: null,
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
