import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PrismicVue from "prismic-vue";
import linkResolver from "./link-resolver";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
	endpoint: window.prismic.endpoint,
	linkResolver,
});

Vue.use(VueLazyLoad);

new Vue({
	router,
	render: function(h) {
		return h(App);
	},
}).$mount("#app");
