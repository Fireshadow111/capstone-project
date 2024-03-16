<template>

<body>
  

      <navbar/>
      <div class="container text-center">
      <div class="row align-items-center">
        <div id="contact-head" class = "mb-5 mt-5">
          <h1 id = "contactDrag">Contact</h1>
          </div>

          </div>
          </div>

         <div id = "con-background">
    <div id="contactForm-div">


<form action="https://formspree.io/f/myyqoarq" method="POST" target = "_blank">
  <label for="firstName">First Name:</label>
  <input type="text" id="firstName" name="firstName" placeholder="Enter your name..">
  <label for="lastName">Last Name:</label>
  <input type="text" id="lastName" name="lastName" placeholder="Enter your last name..">
  <label for="email">Email:</label>
  <input type="text" id="email" name="email" placeholder="Enter your email..">
  <label for="messege">Messege:</label>
  <textarea id="messege" name="messege" placeholder="Enter a messege.." style="height:170px"></textarea>
  <input type="submit" value="Submit">
</form>



<div id = "icons" class = "d-flex justify-content-center mt-4 mb-5">

<div id = "linkedin-div">
<a href="https://www.linkedin.com/in/muhammad-rajah-a1a00421a/" target="_blank"><i class="fa-brands fa-linkedin fa-xl" style="color:#e10800; cursor: pointer;"></i></a>

</div>


<div id = "instagram-div" class = "mx-3">

<a href="https://www.instagram.com/muhammadrajah111/" target="_blank"><i class="fa-brands fa-instagram fa-xl" style="color: #e10800; cursor: pointer;"></i></a>

</div>

<div id= "facebook-div">

<a href="https://www.facebook.com/muhammad.rajah.716/" target="_blank"><i class="fa-brands fa-square-facebook fa-xl" style="color: #e10800; cursor: pointer;"></i></a>

</div>


</div>
</div>
</div>


        
<footer id = "footer-con" class="container py-3 my-5" style="font-family: fantasy;">
      <p id = "footer" class="text-center text">Redragon - Copyright© - 2024 | All Rights Reserved</p>
    </footer>
  </body>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
    components:{
      navbar
    }
}
</script>
<style scoped>


i{
  transition: transform 0.3s ease
}

i:hover{
  transform:scale(105%);
}
 
 body{
  background-color: black
 }
   
#contactDrag{

color: #e10800;
font-style: italic;
font-family: "DM Serif Display";
font-size: 60px;

}

#contact-head {
  background-color: black;
  color: white;
  border: 5px solid #e10800;
  border-radius: 50px;
  font-family: "Roboto";
  font-size: 50px;
  text-align: center;

}

#contactForm-div {
  width: 550px;
  margin: auto;
 
  padding: 20px; 
  border-radius: 20px; 
  box-shadow: 0 0 25px #e10800;
  
}



label {
  font-family: "Roboto";
  font-size: 23px;
  color:#e10800;
  font-weight: bold;
  
  
}

input[type=text],
textarea {
  width: 100%;
  padding: 12px;
  border: 2px solid #e10800;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  border-radius: 15px;
  font-weight: bold;
  background:transparent;
  color:white;

}

input[type=submit] {
  min-width: 500px;
  height: 45px;
  font-family: "Roboto";
  font-size: 26px;
  font-weight: bold;
  background-color: #e10800;
  border: solid 3px black;
  border-radius: 50px;
  cursor: pointer;
  transition: border-color 0.5s, background-color 0.5s, color 0.5s;
  
}

input[type=submit]:hover {
  background-color: black;
  color: #e10800;
  border-color: white;
}

input[type=submit]:active {
  box-shadow: 0 5px #666;
  transform: translatex(4px);
}

#footer-con{
  border-top: 2px solid #e10800;
}

#footer{
color: #e10800;
}




/* Contact Page */

@media (max-width: 300px) {

body {
  flex-wrap: wrap;
}



#contact-head {
  font-size: 30px;
}

#contactForm-div {
  width: 90%;
  margin: auto;
}

label {
  font-size: 14px;
}

input[type=text] {
  width: 100%;
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: 10px;
}

input[type=submit] {
  width: auto;
  height: auto;
  font-size: 14px;
}



.fa-brands {
  margin-bottom: 10px;
}

#map iframe {
    width: 100%;
    height: 300px;
}
.footer {
    font-size: 12px; 
    padding: 5px;
  }
}


@media (max-width: 720px) {

body {
  flex-wrap: wrap;
}

#contactForm-div {
  width: 90%;
  margin: auto;
}

label {
  font-size: 18px;
}

input[type=text] {
  width: 100%;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 12px;
}

textarea {
  width: 100%;
  font-size: 16px;
  margin-top: 8px;
  margin-bottom: 12px;
}

input[type=submit] {
  width: 100%;
  height: 45px;
  font-size: 18px;
}

#map iframe {
            width: 100%;
            height: 200px; 
        }
}


@media (max-width: 1080px) {
#contactForm-div {
  width: 80%;
  margin: auto;
}

label {
  font-size: 22px;
}

input[type=text] {
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 16px;
}

textarea {
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 16px;
}

input[type=submit] {
  width: 100%;
  height: 50px;
  font-size: 22px;
}
}

#map iframe {
    width: 100%;
  }



</style>