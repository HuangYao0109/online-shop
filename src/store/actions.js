import axios from 'axios'

// 获取秒杀数据
export const loadSeckillsInfo = ({commit}) => {

    return axios.get('/api/secKillsInfo').then(res => {
        let data = res.data;
        const date = new Date();
        const hours = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();
        console.log([hours, minute, seconds]);
        // 距离开始秒杀时间
        const deadline = {
            hours: 1,
            minute: 38,
            seconds: 36
        };
        commit('SET_SECKILLS_INFO', [data, deadline]);
    });
};

// 获取轮播(营销)图片
export const loadCarouselItems = ({commit}) => {

    return axios.get('/api/carouselItems').then(res => {
        let data = res.data;
        commit('SET_CAROUSELITEMS_INFO', data);
    });
};

// 加载电脑专栏数据
export const loadComputer = ({commit}) => {

    return axios.get('api/computer').then(res => {
        let computer = res.data;
        commit('SET_COMPUTER_INFO', computer);
    });
};

// 加载爱吃专栏数据
export const loadEat = ({commit}) => {

    return axios.get('/api/eat').then(res => {
        let eat = res.data;
        commit('SET_EAT_INFO', eat);
    });
};

// 请求获得商品详细信息
export const loadGoodsInfo = ({commit}) => {
    commit('SET_LOAD_STATUS', true);

    return axios.get('/api/goodsInfo').then(res => {
        let data = res.data;
        commit('SET_GOODS_INFO', data);
        commit('SET_LOAD_STATUS', false);
    });
};

// 获取商品列表
export const loadGoodsList = ({commit}) => {
    commit('SET_LOAD_STATUS', true);

    return axios.get('/api/goodsList').then(res => {
        let data = res.data;
        commit('SET_GOODS_LIST', data);
        commit('SET_LOAD_STATUS', false);
    });
};

// 添加购物车
export const addShoppingCart = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        commit('ADD_SHOPPING_CART', data);
    });
};

// 获取用户推荐
export const loadRecommend = ({commit}) => {

    return axios.get('/api/recommend').then(res => {
        let data = res.data;
        commit('SET_RECOMMEND_INFO', data);
    });
};

export const loadAddress = ({commit}) => {

    return axios.get('/api/address').then(res => {
        let address = res.data;
        commit('SET_USER_ADDRESS', address);
    });
};

export const loadShoppingCart = ({commit}) => {
    return new Promise((resolve, reject) => {
        const data = [{
            goods_id: 1529931938150,
            count: 1,
            img: 'static/img/goodsDetail/pack/1.jpg',
            package: '水磨精华沁肤紧肤蜜',
            price: 529,
            title: 'CPB 肌肤之钥隔离乳霜精华水乳套装'
        }];
        commit('SET_SHOPPING_CART', data);
    });
};

// 添加注册用户
export const addSignUpUser = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        const userArr = localStorage.getItem('users');
        let users = [];
        if (userArr) {
            users = JSON.parse(userArr);
        }
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
    });
};

// 用户登录
export const login = ({commit}, data) => {
    return new Promise((resolve, reject) => {
        if (data.username === 'huangyao' && data.password === '123456') {
            localStorage.setItem('loginInfo', JSON.stringify(data));
            commit('SET_USER_LOGIN_INFO', data);
            resolve(true);
            return true;
        }
        const userArr = localStorage.getItem('users');
        console.log(userArr);
        if (userArr) {
            const users = JSON.parse(userArr);
            for (const item of users) {
                if (item.username === data.username) {
                    localStorage.setItem('loginInfo', JSON.stringify(item));
                    commit('SET_USER_LOGIN_INFO', item);
                    resolve(true);
                    break;
                }
            }
        } else {
            resolve(false);
        }
    });
};

// 退出登陆
export const signOut = ({commit}) => {
    localStorage.removeItem('loginInfo');
    commit('SET_USER_LOGIN_INFO', {});
};

// 判断是否登陆
export const isLogin = ({commit}) => {
    const user = localStorage.getItem('loginInfo');
    if (user) {
        commit('SET_USER_LOGIN_INFO', JSON.parse(user));
    }
};
