<!-- Header.svelte -->

<script>
  import logo from '$lib/assets/logo.svg';

  import { onMount } from 'svelte';
  onMount(() => {
    // close nav when a nav item is cliecked; this is the typical, expected UX
    const links = document.querySelectorAll('div.menu-items li');
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(e) {
        document.querySelector('.nav-container input[type="checkbox"]').checked = false;
      });
    }
  });  

</script>

<header>
  <nav>
    <div class="navbar">
      <div class="container nav-container">
          <input class="checkbox" type="checkbox" name="" id="" />
          <div class="hamburger-lines">
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
          </div>  
        <div class="logo">
          <a href="/">
            <img alt="Naturemap logo" src={logo} />
          </a>
        </div>
        <div class="menu-items">
          <li><a href="/">home</a></li>
          <li><a href="/about">about</a></li>
          <li><a href="/blog">blog</a></li>
          <li><a href="/work">work</a></li>
          <li><a href="/contact">contact</a></li>
        </div>
      </div>
    </div>
  </nav>
</header>


  <!-- styles are component scoped by default -->
  <style>

    header {
      background: #0ebba94a;
    }

    img {
      width: 68px;
      height: 68px;
    }

    .navbar {
      width: 100%;
      box-shadow: 0 1px 4px rgb(146 161 176 / 15%);
    }

    .navbar .nav-container li {
      list-style: none;
    }

    .navbar .nav-container a {
      text-decoration: none;
      border-bottom: none;
      color: #0e2431;
      font-family: 'Raleway', sans-serif;
      font-weight: 700;
      font-size: 28px;
      display: inline-block;
    }

    .navbar .nav-container a:hover{
      font-weight: bolder;
    }

    .nav-container {
      display: block;
      position: relative;
      height: 80px;
    }

    .nav-container .checkbox {
      position: absolute;
      display: block;
      height: 32px;
      width: 32px;
      top: 15px;
      left: 10px;
      z-index: 5;
      opacity: 0;
      cursor: pointer;
    }

    .nav-container .hamburger-lines {
      display: block;
      height: 26px;
      width: 32px;
      position: absolute;
      top: 27px;
      left: 20px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .nav-container .hamburger-lines .line {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #0e2431;
    }

    .nav-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .nav-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .nav-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }

    .navbar .menu-items {
      background: #fff500;
      padding-top: 120px;
      box-shadow: inset 0 0 2000px rgba(255, 255, 255, .5);
      height: calc(100vh - 120px);
      width: 100%;
      transform: translateX(-150%);
      display: flex;
      flex-direction: column;
      margin-left: -40px;
      padding-left: 40px;
      transition: transform 0.5s ease-in-out;
      text-align: center;
    }

    .navbar .menu-items li {
      margin-bottom: 1.2rem;
      font-size: 1.5rem;
      font-weight: 500;
    }

    .navbar .menu-items li a:hover {
      /* border-bottom: 1px solid #000; */
      box-shadow: 0px -7px 0px red inset;
      background: #fff;
    }

    .logo {
      position: absolute;
      top: 5px;
      right: 15px;
      font-size: 1.2rem;
      color: #0e2431;
    }

    .nav-container input[type="checkbox"]:checked ~ .menu-items {
      transform: translateX(0);
    }

    .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
      transform: rotate(45deg);
    }

    .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
      transform: scaleY(0);
    }

    .nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
      transform: rotate(-45deg);
    }

    /* .nav-container input[type="checkbox"]:checked ~ .logo{
      display: none;
    } */

  </style>