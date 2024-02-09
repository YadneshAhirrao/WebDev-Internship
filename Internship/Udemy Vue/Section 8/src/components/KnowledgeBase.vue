<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid :topics="topics"></knowledge-grid>
  </section>
</template>

<script>
export default {
  // props: ['topics'],
  inject: ['topics'],
  // emits: ['select-topic'],
};
</script>
