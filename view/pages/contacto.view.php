<?php require_once('../view/pages/layout/head.php')?>
<title>Contactos | SC</title>
</head>
<body>
<?php require_once('../view/pages/layout/menu.php')?>
<main>
   

  <!-- //////////////////////////////////////// -->
  <div class="fixed-action-btn d-none btn-up">
      <a class="btn-floating btn-large waves-effect waves-light red darken-3">
        <i class="large material-icons">expand_less</i>
      </a>
  </div>

  <div class="fixed-action-btn " id="btn-social-net">
    <div class="animated pulse fast infinite">
      <a class="btn-floating btn-large light-blue darken-4">
        <i class="large material-icons light-blue darken-4">comment</i>
      </a> 
    </div>
      <ul>
        <li><a class="btn-floating light-blue darken-4"><i class="fab fa-facebook"></i>/i></a></li>
        <li><a class="btn-floating pink darken-1"><i class="fab fa-instagram"></i></a></li>
        <li><a class="btn-floating blue darken-1"><i class="fab fa-linkedin"></i></a></li>
        <li><a class="btn-floating blue"><i class="fab fa-twitter"></i></a></li>
        <li><a class="btn-floating gray"><i class="fas fa-mail-bulk"></i></a></li>
      </ul>
    </div>
  <!-- //////////////////////////////////////// -->

  <!-- Seccion y articulo 1 -->
    <div class="parallax-container" style="height:300px;">
        <div class="parallax be"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d946.0959730675135!2d-69.9107916708111!3d18.46626237126692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf89d47deacb0d%3A0x27bf9f67973d8811!2sPlaza%20Gazcue!5e0!3m2!1ses-419!2sdo!4v1575695264030!5m2!1ses-419!2sdo" style="width: 100%;" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe></div>
        <div class="container">
           <div class="row">
              <div class="col s12 l4 mt-50">
                <h2 class="header white-text">Contactos</h2>
                <div class="divider"></div>
              </div>
           </div>
        </div>
    </div>
    <div class="section white">
    
      <div class="container">
        <div class="row">
          <div class="col l12">
            <ul class="menu-map">
              <li><a href="#" class="grey-text">inicio</a></li>
              <li>/</li>
              <li><a href="#">contacto</a></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col s12 m12 l12">
              <div class="container">
                  <div class="row">
                      <div class="col l12 ">
                        <h4>Solicitud de información através de correo electrónico</h4><br>
                      </div>
                  </div>
                  <div class="row jumbo grey lighten-3">
                    <div class="col s12 m6 l8">
                      <div class="row">
                        <form class="col s12" method="post">
                          <div class="row">
                            <div class="input-field col s12">
                              <i class="material-icons prefix">account_circle</i>
                              <input id="icon_prefix" type="text" class="validate" name="nombre">
                              <label for="icon_prefix">Nombre y Apellido</label>
                            </div>
                            <div class="input-field col s12">
                              <i class="material-icons prefix">mail</i>
                              <input id="icon_telephone" type="email" class="validate" name="mail">
                              <label for="icon_telephone">Correo</label>
                            </div>
                            <div class="input-field col s12">
                            <i class="material-icons prefix">messages</i>
                              <textarea id="textarea1" class="materialize-textarea" name="mensaje"></textarea>
                              <label for="textarea1">Mensaje</label>
                            </div>
                            <div class="input-field col s12">
                            <button class="btn waves-effect waves-light red darken-3" type="submit" name="action">Solicitar información
                              <i class="material-icons right">send</i>
                            </button>
                            </div>

                         </div>
                        </form>
                      </div>   
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div><br><br><br><br><br>
    </div><br><br><br><br><br>
</main>
<?php require_once('../view/pages/layout/footer.php') ?>
    <script src="../view/js/jquery-3.3.1.min.js"></script>
    <script src="../view/js/materialize.js"></script>
    <script src="../view/js/matMain.js"></script>
    <script src="../view/js/mi-jquery.js"></script>
    <script src="../view/js/main.js"></script>
</body>
</html>