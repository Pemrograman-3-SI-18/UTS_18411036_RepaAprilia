
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Admin/datadiripeserta.vue') },
      { path: 'datadiripeserta', component: () => import('pages/Admin/datadiripeserta.vue') },
      { path: 'inputedit', component: () => import('pages/Admin/inputedit.vue') },
      { path: 'datatransaksi', component: () => import('pages/Admin/dataTransaksi.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/LoginRegisLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/Pendaftar/login.vue') },
      { path: 'auth/registrasi', component: () => import('pages/Pendaftar/registrasi.vue') }
    ]
  },
  {
    path: '/pendaftar',
    component: () => import('layouts/pendaftar.vue'),
    children: [
      { path: 'login', component: () => import('pages/Admin/login.vue') },
      { path: 'dataDiri', component: () => import('pages/Pendaftar/dataDiri.vue') },
      { path: 'dataKeluarga', component: () => import('pages/Pendaftar/dataKeluarga.vue') },
      { path: 'Transaksi', component: () => import('pages/Pendaftar/Transaksi.vue') },
      { path: 'SimpanAkhir', component: () => import('pages/Pendaftar/SimpanAkhir.vue') },
      { path: 'pendidikan', component: () => import('pages/Pendaftar/pendidikan.vue') },
      { path: 'kartuujian', component: () => import('pages/Pendaftar/kartuujian.vue') },
      { path: 'foto', component: () => import('pages/Pendaftar/foto.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
