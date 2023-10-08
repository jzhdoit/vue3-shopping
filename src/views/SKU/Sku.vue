<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import powerSet from "./power-set"


// 商品数据
const goods = ref({})
const getGoods = async () => {
  // 1135076  初始化就有无库存的规格
  // 1369155859933827074 更新之后有无库存项（蓝色-20cm-中国）
  const res = await axios.get('http://pcapi-xiaotuxian-front-devtest.itheima.net/goods?id=1135076 ')
  goods.value = res.data.result
  const pathMap=getPathMap(goods.value)
  console.log(pathMap);
  initDisableStatus(goods.value.specs,pathMap)
}
//切换选中状态
onMounted(() => getGoods())
const changeSelectedStatus=(item,val)=>{
    if(val.disabled)return
    if(val.selected){
        val.selected=false
    }else{
        item.values.forEach(val =>val.selected=false)
        val.selected=true
     }
}
//生成有效路径字典对象
const getPathMap =(goods)=>{
    const pathMap={}
    const effectiveSkus=goods.skus.filter(sku=>sku.inventory>0)
    effectiveSkus.forEach(sku=>{
        const selectedValArr= sku.specs.map(val=>val.valueName)
        const valueArrPowerSet= powerSet(selectedValArr)
        valueArrPowerSet.forEach(arr=>{
            const key = arr.join('-')
            if(pathMap[key]){
                pathMap[key].push(sku.id)
            }else{
                pathMap[key]=[sku.id]
            }
        })
    })
    return pathMap
}
//初始化禁用状态
const initDisableStatus=(specs,pathMap)=>{
    specs.forEach(spec=>{
        spec.values.forEach(val=>{
            if(pathMap[val.name]){
                val.disabled=false
            }else{
                val.disabled=true
            }
        })
    })
}

</script>

<template>
  <div class="goods-sku">
    <dl v-for="item in goods.specs" :key="item.id">
      <dt>{{ item.name }}</dt>
      <dd>
        <template v-for="val in item.values" :key="val.name">
          <!-- 图片类型规格 -->
          <img :class="{selected:val.selected,disabled:val.disabled}" v-if="val.picture"  @click="changeSelectedStatus(item,val)" :src="val.picture" :title="val.name">
          <!-- 文字类型规格 -->
          <span v-else :class="{selected:val.selected}" @click="changeSelectedStatus(item,val)">{{ val.name }}</span>
        </template>
      </dd>
    </dl>
  </div>
</template>

<style scoped lang="scss">
@mixin sku-state-mixin {
  border: 1px solid #e4e4e4;
  margin-right: 10px;
  cursor: pointer;

  &.selected {
    border-color: #27ba9b;
  }

  &.disabled {
    opacity: 0.6;
    border-style: dashed;
    cursor: not-allowed;
  }
}

.goods-sku {
  padding-left: 10px;
  padding-top: 20px;

  dl {
    display: flex;
    padding-bottom: 20px;
    align-items: center;

    dt {
      width: 50px;
      color: #999;
    }

    dd {
      flex: 1;
      color: #666;

      >img {
        width: 50px;
        height: 50px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }

      >span {
        display: inline-block;
        height: 30px;
        line-height: 28px;
        padding: 0 20px;
        margin-bottom: 4px;
        @include sku-state-mixin;
      }
    }
  }
}
</style>