<template>
	<div>
		<!-- TODO: Get stuff from prismic -->
		<div class="grid">
			<!-- test -->
			<!-- <img src="https://source.unsplash.com/random" alt="" /> -->

			<!-- TODO: FIGURE THIS OUT -->
			<div id="panel">
				<router-link to="/">Go back</router-link>

				<h1>
					{{ name }}
				</h1>
				<p>
					{{ description }}
				</p>
			</div>
			<div class="imgholder" v-for="index in projects" :key="index">
				{{ index }}
				<a :href="index" target="_blank">
					<img class="img" :src="index" alt="" />
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	Name: "HomeGrid",
	props: {
		slug: {
			type: String,
		},
	},
	data() {
		return {
			fields: {
				projects: [],
				name: "",
				description: "",
			},
		};
	},
	methods: {
		// This is an example query, the important part is above.
		async getContent() {
			let data = await this.$prismic.client.getByUID(
				"project",
				this.slug
			);
			// console.log(data);
			this.name = data.data.title[0].text;
			console.log(this.name);

			let arr = [];
			for (let i = 0; i < Object.keys(data).length; i++) {
				if (Object.values(data.data)[i].url !== undefined) {
					arr.push(Object.values(data.data)[i].url);
				}
			}

			this.description = data.data.description[0].text;
			this.projects = arr;

			console.log(this.projects);
			this.$forceUpdate();
		},
	},
	mounted() {
		this.getContent();
	},
	created() {
		this.getContent();
	},
};
</script>

<style scoped>
a {
	color: white;
}
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	grid-auto-rows: 1fr;
}

h1 {
	text-align: left;
	font-size: 1.5rem;
}

a:hover {
	color: rgb(173, 173, 173);
	transition: ease all 0.2s;
}

.grid::before {
	content: "";
	width: 0;
	padding-bottom: 100%;
	grid-row: 1 / 1;
	grid-column: 1 / 1;
}

.grid > *:first-child {
	grid-row: 1 / 1;
	grid-column: 1 / 1;
}

/* Just to make the grid visible */

.grid > * {
	background: black;
	border: 1px white solid;
}

#panel {
	padding: 1.5rem 1.5rem;
	font-family: "AirbnbBook";
	color: white;
	overflow: scroll;
	height: 17.5rem;
}
#panel p {
	overflow: scroll;
	color: white;
	font-family: "AirbnbLight";
}

.imgholder {
	height: 20.5rem;
	width: 100%;
}

.img {
	position: relative;
	top: -72px;
	height: 20.5rem;
	width: 100%;
	/* min-width: 21.5rem; */
	object-fit: cover;
	transition: all 0.2s ease;
}

.img:hover {
	opacity: 0.5;
	transition: all 0.2s ease;
}
</style>
