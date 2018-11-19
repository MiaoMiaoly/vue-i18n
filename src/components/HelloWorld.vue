<template>
  <div class="hello">
   <button @click="switchLang('zh')">中文</button>
   <button @click="switchLang('en')">英文</button>
  <h1>{{$t("message.title")}}</h1>
   <h1>{{$t("message.name")}}</h1>
  <ul>
    <li v-for="(brand,index) in brands" :key="index">{{ $t(brand) }}</li>
  </ul>
  <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
  </el-date-picker>
  <el-select v-model="value" :placeholder="$t('placeholder.enter')" clearable>
    <el-option
      v-for="item in list"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      lang: 'zh',
      brands: ['brands.nike', 'brands.adi', 'brands.nb', 'brands.ln'],
      value1:'2018-11-15',
      value: '',
      list:[],
      optionsZh: [{
          value: 1,
          label: '黄金糕'
        }, {
          value: 2,
          label: '双皮奶'
        }, {
          value: 3,
          label: '蚵仔煎'
        }, {
          value: 4,
          label: '龙须面'
        }, {
          value: 5,
          label: '北京烤鸭'
        }],
     optionEn: [{
          value: 1,
          label: 'cake'
        }, {
          value: 2,
          label: 'pinai'
        }, {
          value: 3,
          label: 'xiazijian'
        }, {
          value: 4,
          label: 'mian'
        }, {
          value: 5,
          label: 'kaoya'
        }],
    }
  },
  methods: {
    switchLang(data)  {
      console.log(data);
        this.$i18n.locale = data; 
        if(data=='zh'){
          this.list = Object.assign([],this.optionsZh);
        }
        else{
          this.list =  Object.assign([],this.optionEn);
        }
    }
  },
  mounted(){
    this.list = Object.assign([],this.optionsZh);
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
} */
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
