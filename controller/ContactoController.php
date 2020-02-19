
<?php 

    if(!empty($_POST)){
    $nombre = $_POST['nombre'];
    $mail = $_POST['mail'];
    $mensaje = $_POST['mensaje'];
}
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require '../phpmailer/Exception.php';
    require '../phpmailer/PHPMailer.php';
    require '../phpmailer/SMTP.php';

    function enviar_mail( $nombreq, $mailq, $mensajeq ){

        $mail = new PHPMailer(true);

        try {
            //Server settings
            $mail->SMTPDebug = 0;                                       // Enable verbose debug output
            $mail->isSMTP();                                            // Set mailer to use SMTP
            $mail->Host       = 'smtp.gmail.com';  // Specify main and backup SMTP servers
            $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
            $mail->Username   = 'engels.valdezcastillo@gmail.com';                     // SMTP username
            $mail->Password   = 'PHE220728?';                               // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption, `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;                                    // TCP port to connect to

            //Recipients
            $mail->setFrom('engels.valdezcastillo@gmail.com', 'Solicitud de informacion');
            $mail->addAddress('engels.valdezcastillo@gmail.com');     // Add a recipient


            // Attachments
            //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
            //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

            // Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = 'Solicitud de informacion';
            $mail->Body = "
                        <h3>Santana Castro & Asoc.</h3>
                        <p>
                        El señor(a) <b>$nombreq</b>, con el correo <b>$mailq</b>, acaba de solicitar: <br>$mensajeq </p><br>
            ";
            //$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            echo "<script>alert('Los datos fueron enviados correctamente');</script>";
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    }

    if(!empty($nombre) && !empty($mail) && !empty($mensaje)){

        enviar_mail( "$nombre", "$mail", "$mensaje" );

    }
require_once('../view/pages/contacto.view.php');
?>