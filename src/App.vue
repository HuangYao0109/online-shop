<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer v-if="excludeRoutes.indexOf($route.name) == -1"></Footer>
  </div>
</template>

<script>
import Header from '@/components/TopHeader/MainHeader';
import Footer from '@/components/BottomFoot/Footer';
export default {
  name: 'App',
  data () {
    return {
      excludeRoutes: ['HomeIndex', 'MyAddress', 'AddAddress', 'MyOrder', 'MyShoppingCart']
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>
