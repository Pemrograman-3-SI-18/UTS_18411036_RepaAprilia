<template>
  <q-layout  view="hHh Lpr lFf">q
    <q-page-container>
  <q-page padding class="row items-center justify-center">
  <q-card class="my-card">
  <q-card-section>
  <div class="text-h5">Data Calon Mahasiswa UAI</div>
    <div class="text-subtitle2"> .</div>
    <div class="text-subtitle2">Nama Lengkap         : Repa Aprilia</div>
    <div class="text-subtitle2">Tempat Tanggal Lahir : Lambar, 24 April 2000</div>
    <div class="text-subtitle2">Jenis Kelamin        : Perempuan</div>
    <div class="text-subtitle2">Agama                : Islam</div>
    <div class="text-subtitle2">Hp : 085789773903</div>
    <div class="text-subtitle2">Email : repa.18411036@student.ubl.ac.id</div>
    <div class="text-subtitle2">Pilihan Prodi : Sistem Informasi</div>
    <div class="text-subtitle1">.</div>
    <div class="text-subtitle1">PENDIDIKAN</div>
    <div class="text-subtitle2">Nama SMA/SMK : SMKN 1 Way Tenong</div>
    <div class="text-subtitle2">Jurusan : Teknik Komputer Jaringan</div>
    <div class="text-subtitle1">.</div>
    <div class="text-subtitle1">DATA ORANG TUA</div>
    <div class="text-subtitle2">Nama Ayah : Mashuri Efendi</div>
    <div class="text-subtitle2">Nama Ibu : Susanti</div>
    <div class="text-subtitle2">Pekerjaan ayah : Petani</div>
    <div class="text-subtitle2">Pekerjaan ibu : Ibu Rumah Tangga</div>
  </q-card-section>
    <q-btn label="Edit Data" to="/pendaftar/dataDiri"  color="primary" flat class="q-ml-sm" />
    <q-btn label="Informasi" to="/pendaftar/SimpanAkhir"  color="primary" flat class="q-ml-sm" />
  </q-card>
  </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'kartuujian'
}
</script>

<style scoped>

</style>
