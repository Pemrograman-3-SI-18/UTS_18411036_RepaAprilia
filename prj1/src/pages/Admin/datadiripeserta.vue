<template>
  <q-page class="flex flex-">
    <div class="q-pa-md">
      <q-table
        title="Treats"
        :data="data"
        :columns="columns"
        row-key="id"
        :filter="filter"
        :loading="loading"
      >

        <template v-slot:top>
          <q-btn color="teal" :disable="loading" label="Edit "  />
<!--          <q-btn class="q-ml-sm" color="primary" :disable="loading" label="Remove row" @click="removeRow" />-->
          <q-space />
          <q-input borderless dense debounce="300" color="primary" v-model="filter">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>

      </q-table>
    </div>
  </q-page>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      filter: '',
      rowCount: 10,
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'User Name',
          align: 'left',
          field: row => row.username,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'namalengkap', align: 'center', label: 'Nama Lengkap', field: 'namalengkap', sortable: true },
        { name: 'ttl', align: 'center', label: 'Tempat Tanggal lahir', field: 'ttl', sortable: true },
        { name: 'email', label: 'Email', align: 'center', field: 'email' },
        { name: 'jeniskel', label: 'Jenis Kelamin', align: 'center', field: 'jeniskel' },
        { name: 'nik', label: 'NIK', align: 'center', field: 'nik' },
        { name: 'prodi', label: 'prodi', align: 'center', field: 'prodi' },
        { name: 'namaayah', label: 'Nama Ayah', align: 'center', field: 'namaayah' },
        { name: 'pekerjaan', label: 'Pekerjaan Ayah', align: 'center', field: 'pekerjaan' },
        { name: 'namaibu', label: 'Nama Ibun', align: 'center', field: 'namaibu' },
        { name: 'pekerjaanibu', label: 'pekerjaan Ibu', align: 'center', field: 'pekerjaanibu' },
        { name: 'jumlah', label: 'Jumlah Saudara', align: 'center', field: 'jumlah' },
        { name: 'tanggungan', label: 'Tanggungan Keluarga', align: 'center', field: 'tanggungan' },
        { name: 'Namasma', label: 'Nama SMA/SMK', align: 'center', field: 'Namasma' },
        { name: 'Alamatsma', label: 'Alamat SMA', align: 'center', field: 'Alamatsma' },
        { name: 'Jurusan', label: 'Jurusan', align: 'center', field: 'Jurusan' },
        { name: 'verifikasi', label: 'Verifikasi', align: 'center', field: 'verifikasi' }
      ],
      data: [
        {
          username: 'rvaprlia_',
          namalengkap: 'Reva Aprilia',
          ttl: 'lambar, 24 April 2000',
          email: 'repa.18411036@student.ubl.ac.id',
          jeniskel: 'Perempuan',
          nik: 234578876543,
          prodi: 'Sistem Informasi',
          namaayah: 'Mashuri Efendi',
          pekerjaan: 'Petani',
          namaibu: 'Susanti',
          pekerjaanibu: 'Ibu Rumah Tangga',
          jumlah: '4',
          tanggungan: 5,
          Namasma: 'SMKN 1 Way Tenong',
          Alamatsma: 'Lampung Barat',
          Jurusan: 'Teknik Komputer Jaringan',
          verifikasi: 'SUDAH'
        },
        {
          username: 'dhanieerl_',
          namalengkap: 'Dhanie Erlandho Assegaff',
          ttl: 'Sejincau,20 November 2000',
          email: 'erlandhodhanie@gmail.com',
          jeniskel: 'Laki-Laki',
          nik: 234578876543,
          prodi: 'Informatika',
          namaayah: 'sdfghj',
          pekerjaan: 'Petani',
          namaibu: 'rghjk',
          pekerjaanibu: 'Ibu Rumah Tangga',
          jumlah: '3',
          tanggungan: 4,
          Namasma: 'SMKN 1 Way Tenong',
          Alamatsma: 'Lampung Barat',
          Jurusan: 'Listrik',
          verifikasi: 'BELUM'
        }
      ]
    }
  },

  methods: {
    // emulate fetching data from server
    addRow () {
      this.loading = true
      setTimeout(() => {
        const
          index = Math.floor(Math.random() * (this.data.length + 1)),
          row = this.original[Math.floor(Math.random() * this.original.length)]
        if (this.data.length === 0) {
          this.rowCount = 0
        }
        row.id = ++this.rowCount
        const addRow = { ...row } // extend({}, row, { name: `${row.name} (${row.__count})` })
        this.data = [...this.data.slice(0, index), addRow, ...this.data.slice(index)]
        this.loading = false
      }, 500)
    },

    removeRow () {
      this.loading = true
      setTimeout(() => {
        const index = Math.floor(Math.random() * this.data.length)
        this.data = [...this.data.slice(0, index), ...this.data.slice(index + 1)]
        this.loading = false
      }, 500)
    }
  }
}
</script>
