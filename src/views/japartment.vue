<template>
	<div>
		<!-- TODO: Get stuff from prismic -->
		<div class="grid">
			<!-- test -->
			<!-- <img src="https://source.unsplash.com/random" alt="" /> -->

			<!-- TODO: FIGURE THIS OUT -->
			<div id="panel">
				<router-link to="/">< Go back</router-link>

				<h1>
					{{ this.fields.name }}
				</h1>
				<p>
					This large apartment in the very upscale Aralias apartment complex set in the DLF Golf Club in Gurgaon was gutted and completely redesigned for the owners family with his son and wife and small children. 
					With a focus on creating an airy spacious home a simple tonality of materials veering towards shades of beige is offset by wood detailing and rich textures.
					Multiple entertainment areas of the home are divided by sheer glass to ensure the visual continuity of the felt space and allow views through rooms to the lush golf greens.
					Bedroom spaces are personalised with dashes of colour while keeping the look airy and clean. An expansive fitted kitchen is the pride of the lady of the house and often finds the whole family clustered around the island in the centre enjoying the latest of Granny’s culinary treats.
				</p>
			</div>
			<div class="imgholder" v-for="index in fields.projects">
				<a :href="index.url" target="_blank">
					<img class="img" :src="index.url" alt="" />
				</a>
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
					var size = Object.keys(document.results[9].data).length;
					for (let i = 0; i < size; i++) {
						array.push(Object.values(document.results[9].data)[i]);
					}

					array.shift();
					array.shift();

					this.fields.projects = array;
					console.log(this.fields.projects);
					this.fields.name = document.results[9].data.title[0].text;
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
