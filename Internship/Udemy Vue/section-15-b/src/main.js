import { createApp } from 'vue';

import router from './routers/index.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import store from './stores/index.js'

const app = createApp(App)

app.use(router);

app.component('base-badge', BaseBadge);
app.use(store);
app.mount('#app');
