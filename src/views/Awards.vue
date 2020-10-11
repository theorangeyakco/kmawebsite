<template>
	<main class="grid">
		<article>
			<img
				src="../assets/awards/1. J.K. ARCHITECT OF THE YEAR AWARDS  1995.jpg"
				alt="Sample photo"
			/>
			<div class="text">
				<h3>
					1. CERTIFICATE OF MERIT, J.K. ARCHITECT OF THE YEAR AWARDS
					1995
				</h3>
				<p>
					in the category “Private Residences” for a residence in
					Delhi.
				</p>
			</div>
		</article>
		<article>
			<img
				src="../assets/awards/2. J.K. ARCHITECT OF THE YEAR AWARDS 1997.jpg"
				alt="Sample photo"
			/>
			<div class="text">
				<h3>
					2. COMMENDATION AWARD, J.K. ARCHITECT OF THE YEAR AWARDS
					1997
				</h3>
				<p>
					in the category “Private Residences” for a residence in
					N.O.I.D.A.
				</p>
			</div>
		</article>
		<article>
			<img
				src="../assets/awards/3. 10TH IIID-MK AWARDS 2004.jpg"
				alt="Sample photo"
			/>
			<div class="text">
				<h3>
					3. CERTIFICATE OF MERIT ( SPECIAL MENTION ) in 10TH IIID-MK
					AWARDS 2004 (Institute of Indian Interior Designers)
				</h3>
				<p>
					in the category “ Residential – Big” to Mallika Kumar for a
					residence in Delhi.
				</p>
			</div>
		</article>
		<article>
			<img
				src="../assets/awards/4. 10TH IIID-MK AWARDS 2006.jpg"
				alt="Sample photo"
			/>
			<div class="text">
				<h3>
					4. 1st RUNNER UP in 10TH IIID-MK AWARDS 2006 (Institute of
					Indian Interior Designers)
				</h3>
				<p>
					in the category “ Residential – Small” to Mallika Kumar for
					a residence in Delhi.
				</p>
			</div>
		</article>
		<article>
			<img
				src="../assets/awards/5. Asia Pacific Award.jpg"
				alt="Sample photo"
			/>
			<div class="text">
				<h3>
					5. BEST OFFICE ARCHITECTURE INDIA, ASIA PACIFIC PROPERTY
					AWARDS ARCHITECTURE,
				</h3>
				<p>
					in the category "Commercial", for a Corporate Office in
					Gurgaon.
				</p>
			</div>
		</article>
		<article>
			<img src="../assets/awards/6. IIA Award.jpg" alt="Sample photo" />
			<div class="text">
				<h3>
					6. WINNER IIA NATIONAL AWARDS FOR EXCELLENCE IN ARCHITECTURE
					2018,
				</h3>
				<p>
					by Indian Institute of Architects in the category
					"Commercial", for a Corporate Office in Gurgaon.
				</p>
			</div>
		</article>
		<article>
			<img src="../assets/awards/Best of Houzz .jpg" alt="Sample photo" />
			<div class="text">
				<h3>
					7. WINNER OF HOUZZ,
				</h3>
				<p>
					best of 2020, 2019, 2018, 2017, 2016
				</p>
			</div>
		</article>
		<article>
			<img
				src="../assets/awards/Best of Houzz 2020.jpg"
				alt="Sample photo"
			/>
			<div class="text">
				<h3>
					8. WINNER OF HOUZZ
				</h3>
				<p>
					best of 2020 in the category design.
				</p>
			</div>
		</article>
	</main>
</template>

<script>
// @ is an alias to /src

export default {
	name: "Home",
	components: {},
};
</script>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-gap: 20px;
	align-items: stretch;
}
.grid > article {
	/* border: 1px solid #ccc; */
	box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
.grid > article img {
	max-width: 100%;
}
.text {
	padding: 0 20px 20px;
	font-family: "AirbnbBook";
}
</style>
