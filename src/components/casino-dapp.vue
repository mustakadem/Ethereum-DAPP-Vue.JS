<template>
  <div>
    <casino></casino>
    <hello-metamask></hello-metamask>
  </div>
</template>

<script>
  import HelloMetamask from './hello-metamask';
  import Casino from './casino-component';

  export default {
        name: "casino-dapp",
      beforeCreate(){
        console.log('accion de registerWeb3 en casino-dapp');
        this.$store.dispatch('registerWeb3');
      },
      components:{
          'hello-metamask': HelloMetamask,
          'casino': Casino
      }
    }
</script>

<style scoped>

</style>
