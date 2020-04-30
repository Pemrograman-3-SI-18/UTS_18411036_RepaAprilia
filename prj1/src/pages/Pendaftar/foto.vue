<template>
  <q-layout class="bg-blue-grey-1" view="hHh Lpr lFf">
    <q-page padding class="row items-center justify-center">
      <div class="text-h5">Input Foto</div>
      <div class="row full-width">
        <div class="col-md-6 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
          <q-card flat class="bg-white text-black">
            <div class="row" >
              <div class="col-md-6 col-xs-12">
                <div class="row q-pt-md q-pb-md bg-teal-5">
                  <div class="col-md-5 offset-2 col-xs-8">
                    <q-img spinner-color="white" placeholder-src="statics/aprill.jpg" src="statics/aprill.jpg"></q-img>
                  </div>
                </div>
              </div>
              <div class="q-pa-md">
                <div class="q-gutter-md row items-start">
                  <!--
                    Due to browser security policy,
                    we can only read the value, but not
                    write to it, so we only have an @input listener
                  -->

<!--                  <q-input-->
<!--                    @input="val => { file = val[0] }"-->
<!--                    filled-->
<!--                    type="file"-->
<!--                    hint="Native file"-->
<!--                  />-->

                  <q-input
                    @input="val => { files = val }"
                    multiple
                    filled
                    type="file"
                    hint="Upload foto dengan Background berwarna Merah "
                  />
                  <q-btn label="konfirmasi  Pembayaran" to="/pendaftar/Transaksi"  color="primary" flat class="q-ml-sm" />
                </div>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </q-page>
  </q-layout>
</template>

<script>
export default {
  name: 'foto',
  data () {
    return {
      file: null,
      files: null
    }
  }
}
</script>

<style scoped>

</style>
