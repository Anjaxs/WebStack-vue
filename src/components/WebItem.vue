<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-tag" :id="transName(item)"></i>{{transName(item)}}
    </h4>
    <div class="row">
      <div class="col-sm-3" v-for="(web, idx) in item.web" :key="idx">
        <div class="xe-widget xe-conversations box2 label-info" title=""
          @click="openweb(web.url)"
          data-toggle="tooltip" 
          data-placement="bottom" 
          :data-original-title="web.url">

          <div class="xe-comment-entry">
            <a class="xe-user-img">
              <img :src="web.logo" class="lozad img-circle" width="40">
            </a>
            <div class="xe-comment">
              <a href="#" class="xe-user-name overflowClip_1">
                <strong>{{web.title}}</strong>
              </a>
              <p class="overflowClip_2">{{web.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'WebItem',
  props: {
    item: Object,
    transName: Function
  },
  methods: {
    openweb(url) {
      window.open(url, '_blank');
    }
  }
}
</script>

<style scoped>
i {
  margin-right: 7px;
}
</style>
