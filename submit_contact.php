<?php
// Paramètres de connexion à la base de données
$servername = "localhost"; // Adresse du serveur
$username = "root"; // Nom d'utilisateur par défaut dans XAMPP
$password = ""; // Pas de mot de passe par défaut dans XAMPP
$dbname = "contacts"; // Nom de la base de données

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
    die("Erreur de connexion : " . $conn->connect_error);
}


// Récupérer les données du formulaire
$name = $_POST['nom'];
$email = $_POST['email'];
$phone = $_POST['téléphone'];
$subject = $_POST['sujet'];
$message = $_POST['message'];

// Préparer et exécuter la requête SQL pour insérer les données
$sql = "INSERT INTO contacts (nom, email, téléphone, sujet, message) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sssss", $nom, $email, $phone, $subject, $message);

if ($stmt->execute()) {
    echo "<h2>Merci, votre message a été envoyé avec succès.</h2>";
} else {
    echo "Erreur lors de l'envoi du message : " . $stmt->error;
}

// Fermer la connexion
$stmt->close();
$conn->close();
?>
<?php
echo "Le fichier submit_contact.php est accessible et fonctionne correctement.";
?>