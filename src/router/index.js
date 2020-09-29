import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/awards",
		name: "Awards",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/Awards.vue"
			);
		},
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(/* webpackChunkName: "about" */ "../views/About.vue");
		},
	},
	{
		path: "/kresidence",
		name: "K Residence",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/kresidence.vue"
			);
		},
	},
	{
		path: "/tresidence",
		name: "T Residence",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/tresidence.vue"
			);
		},
	},
	{
		path: "/rfarmhouse",
		name: "R Farmhouse",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/rfarmhouse.vue"
			);
		},
	},
	{
		path: "/sresidence2",
		name: "S Residence 2 DLF",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/sresidence2.vue"
			);
		},
	},
	{
		path: "/creativecorp",
		name: "Creative Corporate Office",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/creativecorp.vue"
			);
		},
	},
	{
		path: "/jresidence",
		name: "J Residence",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/jresidence.vue"
			);
		},
	},
	{
		path: "/gfarmhouse",
		name: "G Farmhouse",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/gfarmhouse.vue"
			);
		},
	},
	{
		path: "/scientech",
		name: "Scientech Technologies",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/scientech.vue"
			);
		},
	},
	{
		path: "/sresidence1",
		name: "S Residence 1 DLF",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/sresidence1.vue"
			);
		},
	},
	{
		path: "/bresidence",
		name: "B Residence",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/bresidence.vue"
			);
		},
	},
	{
		path: "/japartment",
		name: "J Apartment",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/japartment.vue"
			);
		},
	},
	{
		path: "/sysproperties",
		name: "Sys Properties",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/sysproperties.vue"
			);
		},
	},
	{
		path: "/marveloffice",
		name: "Marvel Office",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/marveloffice.vue"
			);
		},
	},
	{
		path: "/sresidencedefcol",
		name: "S Residence Def Col",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/sresidencedefcol.vue"
			);
		},
	},
	{
		path: "/dalycollege",
		name: "The Daly College, Indore",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/dalycollege.vue"
			);
		},
	},
	{
		path: "/mhousevv",
		name: "M House Vasant Vihar",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/mhousevv.vue"
			);
		},
	},
	{
		path: "/incasfarmhouse",
		name: "Incas Farm House",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/incasfarmhouse.vue"
			);
		},
	},
	{
		path: "/rvhouse",
		name: "RV House",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/rvhouse.vue"
			);
		},
	},
	{
		path: "/bungalow99",
		name: "Bungalow 99",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/bungalow99.vue"
			);
		},
	},
	{
		path: "/kresidence",
		name: "K Residence",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: function() {
			return import(
				/* webpackChunkName: "about" */ "../views/kresidence.vue"
			);
		},
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
