<template>
	<div class="about-page">
		<div class="about-one">
			<!-- <div id="image-one">
				<img
					src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
					height="550px"
					width="500px"
				/>
			</div> -->
			<div id="text-one">
				<h1>About Us</h1>
				<p id="about-us-text">
					Established in 1990, Kumar Moorthy & Associates is an award
					winning partnership firm of architects and interior
					designers based in Delhi. In the twenty nine years since
					inception we have undertaken and successfully completed a
					wide range of design works in the diverse fields of
					residential design and interiors, institutional and hotel
					design, commercial and office spaces and interiors. The
					clients for the above include notable industrial groups,
					private limited companies, charitable and non government
					organisations, government agencies and public figures other
					than private individuals.
					<br />
					<br />
					The firm has been honoured to receive awards in various
					categories under the prestigious J.K. Architect of the Year
					Awards in 1995 and 1997, and the Indian Institute of
					Interior Designers- MK Award 2004 & 2006, Best Office
					Architecture India, Asia Pacific Property Awards
					Architecture 2018, The I.I.A National Awards for Excellence
					2018.
					<br />
					<br />
					We have executed projects in the diverse locations of Delhi
					N.C.R including Noida , Gurgaon, Manesar & Bawal as also in
					Agra, Mumbai, Indore (M.P.) and Kullu (H.P).
					<br />
					<br />
					Recent notable projects by the firm span a diverse spectrum
					of concept, philosophy and materials and include an building
					in the Indo Saracenic heritage campus of a 125 year old
					public school in Indore and a low cost building using &
					exemplifying alternative technology for a rehabilitation
					centre in West Delhi for an NGO for disabled persons to a
					factory for a large upcoming Indo American lighting JV in
					Bawal, Haryana other than corporate office buildings &
					interiors in Gurgaon & NOIDA and a small number of
					significant residential projects including farmhouses.
				</p>
			</div>
		</div>

		<div class="about-two">
			<div id="text-two">
				<h1>Principal Architects</h1>
				<p id="about-us-text">
					<strong>Mallika Kumar</strong>
					<br />
					<br />
					* Schooling : The Lawrence School, Sanawar
					<br />
					<br />
					* Professional Qualifications : B.Arch. from School of
					Architecture, Institute of Environmental Design, Vallabh
					Vidyanagar, Gujarat.
					<br />
					<br />
					* Professional experience prior to setting up firm : a. S.K.
					Das & Associates, New Delhi (1988)

					<br />
					<br />
					<br />
					<strong>Narayan Moorthy</strong>
					<br />
					<br />
					* Schooling : The Daly College, Indore
					<br />
					<br />
					* Professional Qualifications : B.Arch. from School of
					Architecture, Institute of Environmental Design, Vallabh
					Vidyanagar, Gujarat.
					<br />
					<br />
					* Professional experience prior to setting up firm : a.
					Society for Development Alternatives, New Delhi (1988) b.
					VIKAS Centre for Development, Ahmedabad (1991). In addition
					to private practice, Narayan Moorthy has also briefly taught
					architecture at T.V.B. School of Habitat Studies, New Delhi.
				</p>
			</div>
			<div class="arch">
				<img class="circ" src="../assets/MK-220x300.jpg" />
				<img class="image-circ" src="../assets/1..jpg" />
			</div>
		</div>

		<div class="about-three">
			<div class="contact-text">
				<h1 id="small">Contact Us</h1>
				<div id="address">
					<h3>Address</h3>
					<p>
						Kumar Moorthy & Associates<br />C 9/9250, Vasant Kunj<br />New
						Delhi 110070, India<br />
					</p>
				</div>
				<div id="phone">
					<h3>Telephone</h3>
					<p>
						+011 41767501<br />+011 40044887<br />+011 40044888<br />
						<br />
						+91 9810150749 <br />+91 9810520749
					</p>
				</div>
				<div id="email">
					<h3>Email Address</h3>
					<p>
						office@kumarmoorthy.com<br />mk@kumarmoorthy.com<br />nm@kumarmoorthy.com<br />
					</p>
				</div>
			</div>
			<div class="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.977949415103!2d77.14096191510274!3d28.54038249499651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c33c65d9c4f%3A0x24ee13ab8bdd67ea!2sKumar%20Moorthy%20%26%20Associates!5e0!3m2!1sen!2sin!4v1599975292929!5m2!1sen!2sin"
					width="700"
					height="500"
					frameborder="0"
					style="border:0;"
					allowfullscreen=""
					aria-hidden="false"
					tabindex="0"
				></iframe>
			</div>
		</div>
	</div>
</template>

<style scoped>
@font-face {
	font-family: "AirbnbBlack";
	src: url(../fonts/AirbnbCereal-Black.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbBold";
	src: url(../fonts/AirbnbCereal-Bold.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbBook";
	src: url(../fonts/AirbnbCereal-Book.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbExtraBold";
	src: url(../fonts/AirbnbCereal-ExtraBold.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbLight";
	src: url(../fonts/AirbnbCereal-Light.ttf) format("truetype");
}

@font-face {
	font-family: "AirbnbMedium";
	src: url(../fonts/AirbnbCereal-Medium.ttf) format("truetype");
}

.map {
	width: 60%;
	height: 400px;
	margin-left: 40px;
	margin-top: 32px;
}

#small {
	font-size: 40px;
}
.contact-text {
	display: flex;
	flex-direction: column;
	justify-content: center;
}

.about-one {
	margin-top: 20px;
	display: flex;
	flex-direction: row;
	justify-content: start;
}
.about-two {
	margin-top: 120px;
	margin-bottom: 120px;
	display: flex;
	flex-direction: row;
	justify-content: start;
}

#about-us-text {
	opacity: 1;
	font-weight: 50;
}

.about-three {
	margin-top: 60px;
	margin-bottom: 120px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

#text-one {
	/* margin-left: 50px; */
	justify-content: start;
}

h1 {
	font-family: AirbnbBold;
	font-size: 50px;
}

h3,
h2 {
	font-family: AirbnbBold;
}

p {
	font-family: AirbnbMedium;
	color: #000000;
}

.arch {
	display: flex;
	flex-direction: column;
	margin-left: 40px;
	margin-top: 20px;
}

.circ {
	width: 200px;
	height: 200px;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	border-radius: 100px;
	background: blue;
	margin: 20px;
}

.image-circ {
	width: 200px;
	height: 200px;
	-webkit-border-radius: 100px;
	-moz-border-radius: 100px;
	border-radius: 100px;
	background: black;
	margin: 20px;
}

iframe {
	width: 100%;
}

.image-one {
	margin-right: 2rem;
}

@media screen and (max-width: 1025px) {
	.about-three {
		flex-direction: column;
		text-align: center;
	}
	.image-one,
	.arch {
		display: none;
	}

	#text-one {
		margin-left: 0;
	}
	.map {
		width: 100%;
		margin-left: 0;
	}
}
</style>
