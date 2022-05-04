<?php 

session_start();

if (!isset($_SESSION['username'])) {
    header("Location: index.php");
}

?>

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
</head>
<body>
    
    <a href="logout.php">Logout</a>
</body>
</html> -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>WELCOME</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="Tempo/assets/img/favicon.png" rel="icon">
  <link href="Tempo/assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="Tempo/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="Tempo/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="Tempo/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">
  <link href="Tempo/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="Tempo/assets/vendor/remixicon/remixicon.css" rel="stylesheet">
  <link href="Tempo/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="Tempo/assets/css/style.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Tempo - v4.7.0
  * Template URL: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top ">
    <div class="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="Tempo/index.html" style="color:rgb(81, 179, 42);"><img style="width:50px;" src="uni.png"> | UniQuiz</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar">
        <ul >
          <li><a class="nav-link scrollto active" href="#hero" >Home</a></li>         
           <li><a class="nav-link scrollto " href="#about" >About</a></li>

          <li class="dropdown"><a href="#"><span>Categories</span> <i class="bi bi-chevron-down"></i></a>
            <ul style="background-color:white;">
  
              <li><a href="animation/environnement/index.html"><img style="width: 35px" src="envi.png">Environnement</a></li>
              <li><a href="animation/space/index.html"><img style="width: 35px" src="sp.png">Astronomy</a></li>
              <li><a href="animation/weather/index.html"><img style="width: 35px" src="https://cdn-icons-png.flaticon.com/512/2076/2076783.png">Weather</a></li>
            </ul>
          </li>
          <li class="dropdown"><a href="#"><span>Me</span> <i class="bi bi-chevron-down"></i></a>
            <ul style="background-color:white;">
  
              <li><a href="#"><?php echo  $_SESSION['username'] ; ?></a></li>
              <li><a href="logout.php">Logout</a></li>
              
            </ul>
          </li>
          
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav><!-- .navbar -->

    </div>
  </header><!-- End Header -->

  <!-- ======= Hero Section ======= -->
  
  <section id="hero">
    
    <div class="hero-container">
      <h3>Welcome to <strong style="color: rgb(81, 179, 42);">UniQuiz</strong></h3>
      <h1>The best game to learn while having fun</h1>
      <h2>In this quiz you will get to learn more about environment and space while devolping fun pictures</h2>
      <a href="#services" class="btn-get-started scrollto">Launch the Game</a>
    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">

        <div class="section-title">
          <h2 style="color: rgb(81, 179, 42);padding-bottom: 30px;">About</h2>
          <h3 style="color: rgb(2, 1, 80);">Learn More <span>About The Game</span></h3>
          <p></p>
        </div>

        <div class="row content">
          <div class="col-lg-6">
            <ul>
              <li><i class="ri-check-double-line"></i> you have to choose one of three categories</li>
              <li><i class="ri-check-double-line"></i> you will have a list of questions and you try to answer correctly</li>

              <li><i class="ri-check-double-line"></i> The questions are accompanied by a picture.</li>
              <li><i class="ri-check-double-line"></i> Each time you check the right answer, an element is added to the image, until you have a clear and complete image </li>
              <li><i class="ri-check-double-line"></i>               At the end of each question (valid answer or not) an information support will be displayed to further enrich your knowledge.
              </li>
            </ul>

          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <a href="#" class="btn-learn-more">Learn More</a>
          </div>
        </div>
        

      </div>
    </section>

    <!-- ======= categories Section ======= -->
    <section id="services" class="services">
      <div class="container">

        <div class="section-title">
          
          <h3 style="color: rgb(81, 179, 42);">Explore By Categories </h3>
        </div>

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" style="width: 300px; background-color: #e2fcd8;">

              <div class="icon"><img src="envi.png" style="width: 100px;"></div>
              <h4 class="title"><a href="animation/environnement/index.html">Environnement</a></h4>
              <p class="description"></p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" style="width: 300px; background-color: #e2fcd8;">
              <div class="icon"><img style="width:100px" src="sp.png"></div>
              <h4 class="title"><a href="animation/space/index.html">Astronomy </a></h4>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" style="width: 300px;  background-color: #e2fcd8;">
              <div class="icon"><img style="width:100px" src="https://cdn-icons-png.flaticon.com/512/2076/2076783.png"></div>
              <h4 class="title"><a href="animation/weather/index.html"> Weather </a></h4>
            
            </div>
          </div>

          

        </div>
          </div>

         

        </div>

      </div>
    </section><!-- End Services Section -->

    <!-- ======= Features Section ======= -->
    <!-- End Features Section -->

    <!-- ======= Cta Section ======= -->
    

    <!-- ======= Portfolio Section ======= --><!-- End Portfolio Section -->

    <!-- ======= Pricing Section ======= -->
    <!-- End Pricing Section -->

    <!-- ======= F.A.Q Section ======= -->
    <!-- End F.A.Q Section -->

    <!-- ======= Team Section ======= -->
    <!-- End Team Section -->

    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title">
          <h2 style="color: rgb(81, 179, 42);">You Can Leave a Comment</h2>
          
        </div>

       

        <div class="row mt-5">

        

          <div class="col-lg-8 mt-5 mt-lg-0" style="background-color: #e2fcd8;">

            <form action="Tempo/forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="col-md-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" required>
                </div>
              </div>
              <div class="form-group mt-3">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required>
              </div>
              <div class="form-group mt-3">
                <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section><!-- End Contact Section -->

  </main><!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">

    <div class="footer-top">
      <div class="container">
        <div class="row">

          

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>EcoQuiz</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About</a></li>
              
            
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Categories</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="animation/environnement/index.html">Environnement</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="animation/space/index.html">Astronomy</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="animation/weather/index.html">Weather</a></li>
            </ul>
          </div>

         
        </div>
      </div>
    </div>

    <div class="container d-md-flex py-4">

      <div class="me-md-auto text-center text-md-start">
        <div class="copyright">
          &copy; Copyright <strong><span>UniQuiz</span></strong>. All Rights Reserved
        </div>
        <div class="credits">
          <!-- All the links in the footer should remain intact. -->
          <!-- You can delete the links only if you purchased the pro version. -->
          <!-- Licensing information: https://bootstrapmade.com/license/ -->
          <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/tempo-free-onepage-bootstrap-theme/ -->
          Designed by <a href="https://bootstrapmade.com/" style="color:rgb(81, 179, 42) ;">BootstrapMade</a>
        </div>
      </div>
      <div class="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
      </div>
    </div>

  </footer><!-- End Footer -->

  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Vendor JS Files -->
  <script src="Tempo/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="Tempo/assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="Tempo/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="Tempo/assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="Tempo/assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="Tempo/assets/js/main.js"></script>
 

</body>

</html>