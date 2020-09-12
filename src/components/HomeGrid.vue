<template>
	<div>
		<!-- TODO: Get stuff from prismic -->
		<div class="grid">
			<!-- test -->
			<!-- <img src="https://source.unsplash.com/random" alt="" /> -->
			<div id="panel">
				<ul>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[0].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[1].data.title[0].text }}
						</router-link>
					</li>
				</ul>
			</div>
			<img :src="fields.projects[0].data.image.url" alt="" />
			<img :src="fields.projects[1].data.image.url" alt="" />
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
			},
		};
	},
	methods: {
		// This is an example query, the important part is above.
		getContent() {
			this.$prismic.client
				.query(this.$prismic.Predicates.at("document.type", "project"))
				.then((document) => {
					this.fields.projects = document.results;
					// console.log(document.results[0].data);
				});
		},
	},
	created() {
		this.getContent();
	},
};
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
	grid-auto-rows: 1fr;
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

a {
	color: white;
	text-decoration: none;
}
#panel {
	padding: 1rem 1rem;
	font-family: "AirbnbBook";
}

div ul li {
	color: white;
	margin: 0;
	margin-bottom: 0.5rem;
}

img {
	height: 100%;
	width: 100%;
	/* min-width: 21.5rem; */
	object-fit: cover;
}
</style>
