<template>
    <div>

      <navbar/>
      <div class="container text-center">
      <div class="mt-5 row align-items-center">
        <div id="contact-head" class = "mb-5">
          <h1 id = "contactDrag">Contact</h1>
          </div>

          </div>
          </div>


    
    <div id="contactForm-div">

      <div class="body">
        <div class="loginbox p-2  animate__animated animate__fadeIn container">
            <form action="https://formspree.io/f/xzbwjdvo" method="POST" class="form" style="padding-bottom: 7%;">
          <div class="row">
            <div class="col mx-3">
              <input type="text" class="form-control" name="name" placeholder="First name" aria-label="First name" required>
            </div>
            <div class="col mx-3">
              <input type="text" class="form-control" name="lastname" placeholder="Last name" aria-label="Last name" required>
            </div>
          </div>
          <div class="mb-3 mx-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Your Email" required>
          </div>
        
            <div class="mb-3 mx-3">
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" name="message" placeholder="Enter Message Here" required></textarea>
            </div>
            <div class="but">
                <button type="submit" class="btn btn-light subButton" name="submit">Submit</button>
            </div>
        </form>

        
    </div>
        </div>


<div id = "icons" class = "d-flex justify-content-center mt-4 mb-5">

<div id = "linkedin-div">
<a href="https://www.linkedin.com/in/muhammad-rajah-a1a00421a/" target="_blank"><i class="fa-brands fa-linkedin fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>

<div id = "github-div" class = "mx-3">

<a href="https://github.com/Fireshadow111" target="_blank"><i class="fa-brands fa-github fa-xl" style="color: #40d62c; cursor: pointer;"></i></a>

</div>

<div id = "whatsapp-div">

<a href="https://wa.me/+277741883" target="_blank"><i class="fa-brands fa-whatsapp fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>

<div id = "instagram-div" class = "mx-3">

<a href="https://www.instagram.com/muhammadrajah111/" target="_blank"><i class="fa-brands fa-instagram fa-xl" style="color: #40d62c; cursor: pointer;"></i></a>

</div>

<div id= "facebook-div">

<a href="https://www.facebook.com/muhammad.rajah.716/" target="_blank"><i class="fa-brands fa-square-facebook fa-xl" style="color: #44d62c; cursor: pointer;"></i></a>

</div>
</div>

</div>





        
    </div>
</template>
<script>
import navbar from '../components/navbar.vue'
export default {
    components:{
      navbar
    }
}
</script>
<style>
   
   
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
  margin-top: 70px;
}


.form{
    justify-content: center;
}
.my-element {
  animation: fadeIn;
  animation-duration: 5s;
}

.body{
    margin: 0;
    padding: 0;
    min-height: 100vh;
}
.loginbox{
    min-width: 315px;
    width: 60%;
    background-color: #000;
    color: white;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
}

h1{
    margin: 0;
    padding: 0 0 10px;
    text-align: center;
    font-size: 28px;
}

.loginbox p{
    margin: 0;
    padding: 0;

}

.loginbox input{
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0px;
    outline: none;
    height: 40px;
    color: white;

}

.loginbox textarea{
    width: 100%;
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
}

.loginbox button{
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0px;
}

.loginbox button:hover{
    transition: 0.3s;
    opacity: 80%;
}

.loginbox a{
    text-decoration: none;
    color: white;
}

.loginbox a:hover{
    color: rgb(198, 191, 191);
    transition: 0.3s;
}

.but{
  display: flex;
  justify-content: center;
  align-items: center;
}

.head{
    font-family: 'Syne', sans-serif !important;
}

.subButton{
    max-width: 50%;
    font-family: 'Syne', sans-serif !important;
}

/* Contact Page */

@media (max-width: 300px) {

body {
  flex-wrap: wrap;
}



#ontact-head {
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
.footer {
  font-size: 15px;
  color: black;
  font-weight: bolder;
  text-align: center;
  background-color: #44d62c;
}





</style>