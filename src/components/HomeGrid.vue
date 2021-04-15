<template>
	<div>
		<!-- TODO: Get stuff from prismic -->
		<div class="grid">
			<!-- test -->
			<!-- <img src="https://source.unsplash.com/random" alt="" /> -->
			<div id="panel">
				<ul>
					<li
						v-for="project in fields.projects"
						:key="project.data.url"
					>
						<router-link :to="`/project/${project.uid}`"
							>{{ project.data.title[0].text }}
						</router-link>
					</li>
				</ul>
			</div>

			<div v-for="project in fields.projects" :key="project.data.url">
				<router-link :to="`/project/${project.uid}`">
					<div class="holder">
						<img :src="project.data.image.url" alt="" />
						<p>{{ project.data.title[0].text }}</p>
					</div>
				</router-link>
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
					console.log(document.results);
				});

			this.$forceUpdate();
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
	/* grid-auto-rows: 1fr; */
}

.holder {
	height: 20.5rem;
}

a {
	height: 20.5rem;
}

.holder p {
	position: relative;
	bottom: 13rem;
	z-index: 1;
}

.holder img {
	transition: 0.2s ease all;
}

.holder:hover img {
	opacity: 0.5;
	transition: 0.2s ease all;
}

.holder p {
	text-align: center;
	color: white;
	opacity: 0;
	font-family: "AirbnbMedium";
	font-size: 1.5rem;
}

.holder:hover p {
	opacity: 1;
	transition: 0.2s ease all;
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
	padding: 1rem 0rem;
	font-family: "AirbnbBook";
	overflow: scroll;
	height: 18.5rem;
}

@media screen and (min-width: 768px) {
	#panel {
		/* height: 20.5rem; */
	}

	.holder {
		/* height: 23.5rem; */
	}
}

div ul li {
	color: white;
	margin: 0;
	margin-bottom: 0.5rem;
}

a:hover {
	color: rgb(173, 173, 173);
	transition: ease all 0.2s;
}

img {
	height: 100%;
	width: 100%;
	/* min-width: 21.5rem; */
	object-fit: cover;
}
</style>
