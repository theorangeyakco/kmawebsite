import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PrismicVue from "prismic-vue";
import linkResolver from "./link-resolver";

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
	endpoint: window.prismic.endpoint,
	linkResolver,
});

new Vue({
	router,
	render: function(h) {
		return h(App);
	},
}).$mount("#app");
