<template>
<div>
    <div v-for="(items,index) in data" :key="index">
        {{ items }}
    </div>
</div>
</template>

<script>
    export default {
      data () {
        return {
          test: 1,
          data: [2, 3, 4]
        }
      },
      methods: {
        test () {
    
        }
      }
    }
</script>

<style scoped>

</style>