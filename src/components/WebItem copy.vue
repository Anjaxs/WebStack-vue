<template>
  <div>
    <h4 class="text-gray">
      <i class="linecons-tag" :id="transName(item)"></i>{{ transName(item) }}
    </h4>
    <div class="row">
      <div class="col-sm-3" v-for="(web, idx) in item.web" :key="idx">
        <div
          title=""
          class="webitem"
          :class="{ hover: web.hover ?? false }"
          @click="openweb(web.url)"
          :data-original-title="web.url"
          @mouseover="handleOverCard(web)"
          @mouseleave="handleLeaveCard(web)"
        >
          <div class="xe-comment-entry">
            <a class="xe-user-img">
              <img :src="web.logo" class="lozad img-circle" width="40" />
            </a>
            <div class="xe-comment">
              <a href="#" class="xe-user-name overflowClip_1">
                <strong>{{ web.title }}</strong>
              </a>
              <p class="overflowClip_2">{{ web.desc }}</p>
            </div>
          </div>
          <!-- <div class="webitem-url" v-if="web.hover">{{ web.url }}</div> -->
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: "WebItem",
  props: {
    item: Object,
    transName: Function,
  },
  methods: {
    handleOverCard(web) {
      web.hover = true;
    },
    handleLeaveCard(web) {
      web.hover = false;
    },
    openweb(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
i {
  margin-right: 7px;
}
.webitem {
  height: 86px;
  margin-bottom: 0px;
  padding: 15px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #e4ecf3;
  margin: 20px 0 0 0;
  transition: all 0.3s ease;
}
.webitem.hover {
  transform: translateY(-6px);
  box-shadow: 0 26px 40px -24px rgb(0 36 100 / 30%);
}
.webitem-url {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding-left: 65px;
  height: 15px;
  line-height: 15px;
  color: #666;
}
</style>
