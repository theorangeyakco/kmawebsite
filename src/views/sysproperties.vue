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
					This project features an office for a realty and
					construction company in the front of the ground floor and
					part of the basement while the rest of the building is
					occupied by a set of short stay service apartments for
					business visitors to the commercial hub of Gurgaon. Both
					entities have their own entrances at ground level. A central
					glass enclosed atrium enables visual connectivity betweeb
					the two levels of the office while larged glazed openings
					overlook a front garden and rear sunken court filling the
					workspaces with light & views of greenery.
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
					var size = Object.keys(document.results[10].data).length;
					for (let i = 0; i < size; i++) {
						array.push(Object.values(document.results[10].data)[i]);
					}

					array.shift();
					array.shift();

					this.fields.projects = array;
					console.log(this.fields.projects);
					this.fields.name = document.results[10].data.title[0].text;
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
