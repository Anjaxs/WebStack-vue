<template>
  <div class="boxed-container">
    <nav class="navbar horizontal-menu navbar-fixed-top">
      <div class="navbar-inner">
        <div class="navbar-brand">
          <router-link to="/" class="logo">
            <img src="../assets/images/logo_dark@2x.png" width="100%" alt="" class="hidden-xs">
            <img src="../assets/images/logo@2x.png" width="100%" alt="" class="visible-xs">
          </router-link>
        </div>
        <div class="navbar-mobile-clear"></div>
        <a href="https://github.com/Anjaxs/WebStack-vue" target="_blank">
           <img style="position: absolute; top: 0; right: 0; border: 0;"
               src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
               alt="Fork me on GitHub">
        </a>
      </div>
    </nav>

    <div class="page-container">
      <div class="main-content" style="">
        <div class="row">
          <div class="col-md-12">
            <div class="panel panel-default">
              <!-- 关于网站 -->
              <h4 class="text-gray">关于网站</h4>
              <div class="panel-body">
                <div class="row">
                  <div class="col-sm-12">
                    <blockquote>
                      <p>有一段时间我发现我的收藏夹越来越多，很难找到某个不常用的网站。
                        所以就有了这个网站，这里收集的基本都是我自己浏览器收藏夹里的网站，我平时用的相对比较多的一些都在这里。</p>
                      <br />
                      <p>如果你也是设计师，如果你也正好喜欢设计，那希望这个网站能给你带来一些作用。</p>
                      <p>闲聊或者有任何建议都可以加QQ群交流：304584722</p>
                    </blockquote>
                  </div>
                </div>
                <!-- 关于站长 -->
                <h4 class="text-gray">关于站长</h4>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="xe-widget xe-conversations box2 label-info"
                         onclick="window.open('http://www.viggoz.com/', '_blank')"
                         data-toggle="tooltip"
                         data-placement="bottom"
                         title=""
                         data-original-title="http://www.viggoz.com/">
                      <div class="xe-comment-entry">
                        <a class="xe-user-img">
                          <img :src="authorImg" class="img-circle" width="40">
                        </a>
                        <div class="xe-comment">
                          <a href="#" class="xe-user-name overflowClip_1">
                            <strong>Designer. Viggo.</strong>
                          </a>
                          <p class="overflowClip_2"> Full-time UI designer with an enduring interest in Coding.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="row">
                      <div class="col-sm-12">
                        <br />
                        <blockquote>
                          <p>
                            这是一个公益项目，而且是<a href="https://github.com/WebStackPage/WebStackPage.github.io"> 开源 </a>
                            <iframe src="https://ghbtns.com/github-btn.html?user=WebStackPage&repo=WebStackPage.github.io&type=star&count=true"
                                    frameborder="0" scrolling="0" width="100px" height="20px"></iframe> 的。你也可以拿来制作自己的网址导航。如果你有更好的想法，可以通过个人网站
                            <a href="http://www.viggoz.com">
                              <span class="label label-info" data-toggle="tooltip"
                                    data-placement="left" title=""
                                    data-original-title="Hello I am a Tooltip">viggoz.com</span>
                            </a>中的联系方式找到我，欢迎与我交流分享。
                          </p>
                        </blockquote>
                      </div>
                    </div>
                    <br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  name: 'About',
  components: {
    Footer
  },
  data() {
    return {
      authorImg: './assets/images/logos/viggoz.png'
    }
  }
}
</script>

<style>
</style>
