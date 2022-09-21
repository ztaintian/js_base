<template>
  <span>
    <span>{{result?result.name:''}}</span>
  </span>
</template>

<script>
  export default {
    name: 'view2',
    props: ["result", "loading"],
  }
</script>