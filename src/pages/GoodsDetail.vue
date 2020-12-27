<template>
    <div>
        <Search></Search>
        <ShopHeader></ShopHeader>
        <GoodsDetailNav></GoodsDetailNav>
        <div class="shop-item-path">
            <div class="shop-nav-container">
                <Breadcrumb>
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem to="/goodsList">美妆</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <!-- 商品信息展示 -->
        <ShowGoods></ShowGoods>
        <!-- 商品详细展示 -->
        <ShowGoodsDetail></ShowGoodsDetail>
        <Spin size="large" fix v-if="isLoading"></Spin>
    </div>
</template>

<script>
    import Search from '@/components/Search';
    import GoodsDetailNav from '@/components/LinkBar/GoodsDetailNav';
    import ShopHeader from '@/components/TopHeader/ListHeader';
    import ShowGoods from '@/components/Detail/Goods';
    import ShowGoodsDetail from '@/components/Detail/GoodsDetail';
    import store from '@/store/store';
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'GoodsDetail',
        beforeRouteEnter(to, from, next) {
            window.scrollTo(0, 0);
            next();
        },
        created() {
            console.log(21323);
            this.loadGoodsInfo();
        },
        data() {
            return {
                tagsColor: ['blue', 'green', 'red', 'yellow']
            };
        },
        methods: {
            ...mapActions(['loadGoodsInfo'])
        },
        computed: {
            ...mapState(['goodsInfo', 'isLoading'])
        },
        components: {
            Search,
            ShopHeader,
            GoodsDetailNav,
            ShowGoods,
            ShowGoodsDetail
        },
        store
    };
</script>

<style scoped>
    .shop-item-path {
        height: 38px;
        background-color: rgb(236, 235, 235);
        line-height: 38px;
        color: #2c2c2c;
    }

    .shop-nav-container {
        margin: 0px auto;
        width: 80%;
    }
</style>
