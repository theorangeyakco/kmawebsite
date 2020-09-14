<template>
<div class="about-page">
  <div class="about-one">
    <div id="image-one">
      <img src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" height=550px width=500px>    
    </div>
    <div id="text-one">
      <h1>About Us</h1>
      <p id="about-us-text">Established in 1990, Kumar Moorthy & Associates is an award winning partnership firm of architects and interior designers based in Delhi.<br>
      <br>In the twenty-nine years since inception we have undertaken and successfully completed a wide range of design works in the diverse fields of residential design and interiors, institutional and hotel design, commercial and office spaces and interiors. <br>
      <br>The clients for the above include notable industrial groups, private limited companies, charitable and non government organisations, government agencies and public figures other than private individuals. <br> 
      <br>We have executed projects in the diverse locations of Delhi N.C.R including Noida , Gurgaon, Manesar & Bawal as also in Agra, Mumbai, Indore (M.P.) and Kullu (H.P)<br>
      <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus molestiae aut nisi tenetur in aliquam, sit veritatis minus consequuntur quo eos! Eos repellendus consectetur debitis facere dolorem earum! Fuga, soluta, sequi minus molestias omnis ullam eligendi.<br></p>
    </div>
  </div>

  <div class="about-two">
    <div id="text-two">
      <h1>Principal Architects</h1>
      <p id="about-us-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quod vel cupiditate sit reprehenderit at. Maxime esse, facere, doloremque rerum omnis nisi commodi aspernatur explicabo adipisci totam accusamus ipsa vero illo ad minima, cum consequuntur pariatur. Vitae, modi. Enim nesciunt magni numquam amet, consequatur dolor itaque exercitationem corrupti, quis minima eaque nam. Aliquid vel sapiente distinctio molestias ducimus. Sint iste itaque voluptatibus, similique placeat alias tempore officiis sunt nemo, ex totam dolor illo doloribus minus mollitia voluptatum nostrum ipsa distinctio expedita. Ullam quos suscipit atque error enim autem officia quia quaerat voluptatibus maiores, similique placeat facere repellat omnis facilis! Blanditiis.<br>
        <br>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure ipsa doloribus velit adipisci nobis est harum reprehenderit, mollitia tenetur molestiae facere sapiente similique fugiat quasi odio itaque autem voluptatem ab qui eveniet recusandae possimus ratione voluptate iste. Culpa, ipsum quas deserunt fugit doloribus quos ratione inventore officiis reiciendis, voluptate voluptas, dolorum distinctio eius asperiores quibusdam deleniti dolor. Nesciunt, facere, saepe sequi culpa non excepturi dolores enim cupiditate iusto, iste animi aliquid nobis doloribus? Id odio similique nesciunt placeat nobis eaque molestiae, consequuntur laboriosam expedita ipsum architecto officiis incidunt eligendi explicabo. Asperiores iste libero cupiditate molestiae, praesentium ipsum laborum! Deserunt, magni?<br>
      </p>
    </div>
    <div class="arch">
        <div class="circ"></div>
        <div class="image-circ"></div>
    </div>
  </div>

  <div class="about-three">
    <div class="contact-text">
      <h1 id="small">Contact Us</h1>
      <div id="address">
        <h3>Address</h3>
        <p>Kumar Moorthy & Associates<br>C 9/9250, Vasant Kunj<br>New Delhi 110070, India<br></p>
      </div>
      <div id="phone">
        <h3>Telephone</h3>
        <p>+011 41767501<br>+011 40044887<br>+011 40044888<br></p>
      </div>
      <div id="email">
        <h3>Email Address</h3>
        <p>office@kumarmoorthy.com<br>mk@kumarmoorthy.com<br>nm@kumarmoorthy.com<br></p>
      </div>
    </div>
    <div class="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.977949415103!2d77.14096191510274!3d28.54038249499651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1c33c65d9c4f%3A0x24ee13ab8bdd67ea!2sKumar%20Moorthy%20%26%20Associates!5e0!3m2!1sen!2sin!4v1599975292929!5m2!1sen!2sin" width="700" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  </div>
</div>
</template>


<style>
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

.map{
width: 60%;
height: 400px;
margin-left: 220px;
margin-top: 32px;
}

#small {
  font-size:40px;
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
  opacity: 85%;
  font-weight: 50;
}

.about-three {
  margin-top: 60px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: row;
  justify-content: start;
}

#text-one {
  margin-left: 50px;
  justify-content: start;
}

h1{
  font-family: AirbnbBold;
  font-size: 50px;
}

h3, h2 {
  font-family: AirbnbBold;
}

p{
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

.image-circ{
  width: 200px;
  height: 200px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  background: black;
  margin:20px;
}

</style>

