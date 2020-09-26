<template>
	<div>
		<!-- TODO: Get stuff from prismic -->
		<div class="grid">
			<!-- test -->
			<!-- <img src="https://source.unsplash.com/random" alt="" /> -->
			<div id="panel">
				<ul>
					<li>
						<router-link to="/rfarmhouse"
							>{{ fields.projects[0].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[1].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[2].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[3].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[4].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[5].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[6].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[7].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[8].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[9].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[10].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[11].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[12].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[13].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[14].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[15].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[16].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[17].data.title[0].text }}
						</router-link>
					</li>
					<li>
						<router-link to="/kresidence"
							>{{ fields.projects[18].data.title[0].text }}
						</router-link>
					</li>
				</ul>
			</div>
			<div class="holder">
				<img :src="fields.projects[0].data.image.url" alt="" />
				<p>{{ fields.projects[0].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[1].data.image.url" alt="" />
				<p>{{ fields.projects[1].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[2].data.image.url" alt="" />
				<p>{{ fields.projects[2].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[3].data.image.url" alt="" />
				<p>{{ fields.projects[3].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[4].data.image.url" alt="" />
				<p>{{ fields.projects[4].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[5].data.image.url" alt="" />
				<p>{{ fields.projects[5].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[6].data.image.url" alt="" />
				<p>{{ fields.projects[6].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[7].data.image.url" alt="" />
				<p>{{ fields.projects[7].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[8].data.image.url" alt="" />
				<p>{{ fields.projects[8].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[9].data.image.url" alt="" />
				<p>{{ fields.projects[9].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[10].data.image.url" alt="" />
				<p>{{ fields.projects[10].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[11].data.image.url" alt="" />
				<p>{{ fields.projects[11].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[12].data.image.url" alt="" />
				<p>{{ fields.projects[12].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[11].data.image.url" alt="" />
				<p>{{ fields.projects[11].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[13].data.image.url" alt="" />
				<p>{{ fields.projects[13].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[14].data.image.url" alt="" />
				<p>{{ fields.projects[14].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[15].data.image.url" alt="" />
				<p>{{ fields.projects[15].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[16].data.image.url" alt="" />
				<p>{{ fields.projects[16].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[17].data.image.url" alt="" />
				<p>{{ fields.projects[17].data.title[0].text }}</p>
			</div>
			<div class="holder">
				<img :src="fields.projects[18].data.image.url" alt="" />
				<p>{{ fields.projects[18].data.title[0].text }}</p>
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

.holder {
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
