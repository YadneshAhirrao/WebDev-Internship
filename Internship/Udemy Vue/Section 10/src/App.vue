<template>
  <the-header title="Remember Me"></the-header>
  <stored-resource :resources="storedResource"></stored-resource>
</template>

<script>
import StoredResource from './components/learning-resources/StoredResource.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  components: {
    StoredResource,
    TheHeader,
  },
  data() {
    return {
      storedResource: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js Documentation',
          link: 'https://vuejs.org/',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn how to google...',
          link: 'https://google.com/',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
