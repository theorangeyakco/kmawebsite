<template>
	<div id="app">
		<div id="nav">
			<div>
				<h1>KM&A</h1>
			</div>
			<div>
				<router-link to="/">Home</router-link>
				<router-link to="/awards">Awards</router-link>
				<router-link to="/about">About</router-link>
			</div>
		</div>
		<router-view />
	</div>
</template>

<style>
@font-face {
	font-family: "AirbnbBlack";
	src: url(./fonts/AirbnbCereal-Black.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbBold";
	src: url(./fonts/AirbnbCereal-Bold.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbBook";
	src: url(./fonts/AirbnbCereal-Book.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbExtraBold";
	src: url(./fonts/AirbnbCereal-ExtraBold.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbLight";
	src: url(./fonts/AirbnbCereal-Light.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbMedium";
	src: url(./fonts/AirbnbCereal-Medium.ttf) format("truetype");
}
</style>

<style scoped>
#app {
	margin: 2rem 8rem;
}

#nav {
	display: flex;
	height: 5rem;
	justify-content: space-between;
	align-items: center;
	font-family: "AirbnbMedium";
}

a {
	color: black;
	margin-left: 2rem;
	text-decoration: none;
}

a:hover {
	color: #999999;
	transition: all ease 0.3s;
}

h1 {
	font-size: 1.8rem;
}

#nav a.router-link-exact-active {
	text-decoration: underline !important;
}
</style>
