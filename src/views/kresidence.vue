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
					{{ this.fields.name }}
				</h1>
			</div>
			<div class="imgholder" v-for="index in fields.projects">
				<img class="img" :src="index.url" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	Name: "HomeGrid",
	data() {
		return {
			fields: {
				projects: [],
				name: [],
			},
		};
	},
	methods: {
		// This is an example query, the important part is above.
		getContent() {
			this.$prismic.client
				.query(this.$prismic.Predicates.at("document.type", "project"))
				.then((document) => {
					let array = [];
					var size = Object.keys(document.results[0].data).length;
					for (let i = 0; i < size; i++) {
						array.push(Object.values(document.results[0].data)[i]);
					}

					array.shift();
					array.shift();

					this.fields.projects = array;
					this.fields.name = document.results[0].data.title[0].text;
				});
		},
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
	text-align: center;
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
	padding: 1rem 1rem;
	font-family: "AirbnbBook";
	color: white;
}

.imgholder {
	height: 100%;
	width: 100%;
}

.img {
	height: 19.5rem;
	width: 100%;
	/* min-width: 21.5rem; */
	object-fit: cover;
}
</style>
