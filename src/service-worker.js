/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
  '/',
  '../public/index.html',
  '../public/favicon.ico',
  './assets/AdicionarMesa/add-icon.svg',
  './assets/CriarPedido/add-icon.svg',
  './assets/CriarPedido/remove-icon.svg',
  './assets/favicon/16.png',
  './assets/favicon/20.png',
  './assets/favicon/29.png',
  './assets/favicon/32.png',
  './assets/favicon/40.png',
  './assets/favicon/48.png',
  './assets/favicon/50.png',
  './assets/favicon/55.png',
  './assets/favicon/57.png',
  './assets/favicon/58.png',
  './assets/favicon/60.png',
  './assets/favicon/64.png',
  './assets/favicon/66.png',
  './assets/favicon/72.png',
  './assets/favicon/76.png',
  './assets/favicon/80.png',
  './assets/favicon/87.png',
  './assets/favicon/88.png',
  './assets/favicon/92.png',
  './assets/favicon/100.png',
  './assets/favicon/102.png',
  './assets/favicon/114.png',
  './assets/favicon/120.png',
  './assets/favicon/128.png',
  './assets/favicon/144.png',
  './assets/favicon/144.png',
  './assets/favicon/152.png',
  './assets/favicon/167.png',
  './assets/favicon/172.png',
  './assets/favicon/180.png',
  './assets/favicon/196.png',
  './assets/favicon/216.png',
  './assets/favicon/256.png',
  './assets/favicon/512.png',
  './assets/favicon/1024.png',
  './assets/favicon/favicon.svg',
  './assets/header/profile-down-icon.svg',
  './assets/header/settings-icon.svg',
  './assets/NovaComanda/seta-voltar.svg',
  './assets/pageTitle/qrcode-icon.svg',
  './assets/pesquisa/search-icon.svg',
  './components/CriarPedido/CardOpcao/CardOpcao.css',
  './components/CriarPedido/CardOpcao/CardOpcao.js',
  './components/CriarPedido/ScrollPedidos/ScrollPedidos.css',
  './components/CriarPedido/ScrollPedidos/ScrollPedidos.js',
  './components/Header/Header.css',
  './components/Header/Header.js',
  './components/InputText/InputText.css',
  './components/InputText/InputText.js',
  './components/Login/LoginField/LoginField.css',
  './components/Login/LoginField/LoginField.js',
  './components/Login/Logo/Logo.css',
  './components/Login/Logo/Logo.js',
  './components/Mesas/AdicionarMesa/AdicionarMesa.css',
  './components/Mesas/AdicionarMesa/AdicionarMesa.js',
  './components/Mesas/Consumo/MesaConsumo.css',
  './components/Mesas/Consumo/MesaConsumo.js',
  './components/Mesas/Disponivel/MesaDisponivel.css',
  './components/Mesas/Disponivel/MesaDisponivel.js',
  './components/Mesas/Pagamento/MesaPagamento.css',
  './components/Mesas/Pagamento/MesaPagamento.js',
  './components/NovaComanda/Voltar/Voltar.css',
  './components/NovaComanda/Voltar/Voltar.js',
  './components/PageTitle/PageTitle.css',
  './components/PageTitle/PageTitle.js',
  './components/Pesquisa/Pesquisa.css',
  './components/Pesquisa/Pesquisa.js',
  './pages/CriarPedido/index.js',
  './pages/CriarPedido/pedidos.css',
  './pages/LoginFuncionario/index.js',
  './pages/Mesas/index.js',
  './pages/Mesas/mesas.css',
  './pages/NovaComandaMesa/index.js',
  './pages/NovaComandaMesa/NovaComandaMesa.css',
  './App.css',
  './App.js',
  './index.css',
  './index.js',
  './reportWebVitals.js',
  './routes.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request)
          .then(response => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseToCache));

            return response;
          });
      })
  );
});
