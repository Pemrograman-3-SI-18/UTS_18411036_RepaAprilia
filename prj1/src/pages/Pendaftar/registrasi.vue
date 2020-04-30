<template>
<q-layout  view="hHh Lpr lFf">
  <q-page-container>
    <div class="q-pa-md">
      <q-img
        src="statics/oj.png"
        style="height: 200px"
      >
        <q-menu
          touch-position
          context-menu
        >

          <q-list dense style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Open...</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>New</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>Preferences</q-item-section>
              <q-item-section side>
                <q-icon name="keyboard_arrow_right" />
              </q-item-section>

              <q-menu anchor="top right" self="top left">
                <q-list>
                  <q-item
                    v-for="n in 3"
                    :key="n"
                    dense
                    clickable
                  >
                    <q-item-section>Submenu Label</q-item-section>
                    <q-item-section side>
                      <q-icon name="keyboard_arrow_right" />
                    </q-item-section>
                    <q-menu auto-close anchor="top right" self="top left">
                      <q-list>
                        <q-item
                          v-for="n in 3"
                          :key="n"
                          dense
                          clickable
                        >
                          <q-item-section>3rd level Label</q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                </q-list>
              </q-menu>

            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Quit</q-item-section>
            </q-item>
          </q-list>

        </q-menu>
      </q-img>
    </div>
    <q-page padding class="row items-center justify-center">
      <div class="row full-width">
        <div class="col-md-8 offset-md-2 col-xs-12 q-pl-md q-pr-md q-pt-sm">
          <div class ="text-h5">Registrasi </div>
          <q-card flat class="bg-white text-black">
            <div class="row">
              <div class="q-pa-md">
                <div class="q-gutter-md row items-start">
                  <q-input v-model="nlengkap" filled type="Nama Lengkap" hint="Nama Lengkap" />
                  <q-input v-model="email" filled type="email" hint="Email" />
                  <q-input v-model="password" filled type="password" hint="Password" />

                  <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Ulangi Password">
                    <template v-slot:append>
                      <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                      />
                    </template>
                  </q-input>
                  <q-input v-model="alamat" filled type="Alamat" hint="Alamat" />
                  <q-input v-model="tlp" filled type="No telpon" hint="No telpon" />
                  <div class="text-h7"> *setelah membuat acoount, silahkan login dan mengisi
                  data pribadi, sekolah, orangtua dan prodi. <br> Setelah mengisi silahkan membayar uang
                  pendaftaran sebesar Rp 150000 agar account anda aktif.</div>
                  <div>
                    <q-btn label="Daftar Akun" to="/login"  color="primary" flat class="q-ml-sm" />
                  </div>
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
      password: '',
      isPwd: true,

      email: '',
      nlengkap: '',
      alamat: '',
      tlp: ''
    }
  }
}
</script>

<style scoped>

</style>
