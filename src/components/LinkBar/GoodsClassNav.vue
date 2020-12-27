/*
 * @Author: huangyao
 * @Date: 2018-06-11 11:27:10
 * @Last Modified by: huangyao
 * @Last Modified time: 2018-06-11 12:23:40
 * @Describe: 搜索商品导航标签
 */
<template>
  <div class="item-class-show">
    <Row class="item-class-group" v-for="(items, index) in tagsInfo" :key="index">
      <i-col class="item-class-name" span="3">{{ items.tagName }} : </i-col>
      <i-col class="item-class-select" span="21">
        <span v-for="(item, subIndex) in items.tags" :key="subIndex">{{ item }}</span>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'GoodsClassNav',
  data () {
    return {
      tagsInfo: [
        {
          tagName: '彩妆',
          tags: [ '口红', '底妆', 'MATE', '眉眼' ]
        },
        {
          tagName: '护肤',
          tags: [ '洁面', '面膜', '爽肤水' ]
        },
        {
          tagName: '精选品牌',
          tags: [ 'SKII', '兰蔻', '雅诗兰黛', '美宝莲', '理肤泉', '玉兰油', '玛丽黛佳', '御泥坊', '欧诗漫', '兰芝' ]
        },
        {
          tagName: '适合肤质',
          tags: [ '敏感肌', '干皮', '油皮', '混干皮', '混油皮']
        }
      ]
    };
  }
};
</script>

<style scoped>
.item-class-show {
  margin: 15px auto;
  width: 100%;
}
.item-class-group {
  margin-top: 1px;
  height: 45px;
  border-bottom: 1px solid #ccc;
}
.item-class-group:first-child {
  border-top: 1px solid #ccc;
}
.item-class-name {
  padding-left: 15px;
  line-height: 44px;
  color: #666;
  font-weight: bold;
  background-color: #f3f3f3;
}
.item-class-name:first-child {
  line-height: 43px;
}
.item-class-select span {
  margin-left: 15px;
  width: 160px;
  color: #005aa0;
  line-height: 45px;
  cursor: pointer;
}
</style>
