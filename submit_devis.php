<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $company = htmlspecialchars($_POST['company']);
    $service = htmlspecialchars($_POST['service']);
    $description = htmlspecialchars($_POST['description']);
    $budget = htmlspecialchars($_POST['budget']);
    $date = htmlspecialchars($_POST['date']);
    $address = htmlspecialchars($_POST['address']);
    $city = htmlspecialchars($_POST['city']);
    $country = htmlspecialchars($_POST['country']);

    // Display a confirmation message (or save data to a database/file)
    echo "<h2>Merci, votre demande de devis a été soumise avec succès.</h2>";
    echo "<p>Nom: $nom</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Téléphone: $téléphone</p>";
    echo "<p>Entreprise: $entreprise</p>";
    echo "<p>Service: $service</p>";
    echo "<p>Description: $description</p>";
    echo "<p>Budget: $budget GN</p>";
    echo "<p>Date d'intervention: $date</p>";
    echo "<p>Adresse: $addresse</p>";
    echo "<p>Ville: $ville</p>";
    echo "<p>Pays: $pays</p>";
}
?>
<?php
// Vérifiez si la méthode de la requête est POST (indiquant que le formulaire a été soumis)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 1. Récupérer les données du formulaire et les sécuriser
    // Utilisez htmlspecialchars pour éviter les injections de code
    $name = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['téléphone']);
    $company = htmlspecialchars($_POST['entreprise']);
    $service = htmlspecialchars($_POST['service']);
    $description = htmlspecialchars($_POST['description']);
    $budget = htmlspecialchars($_POST['budget']);
    $date = htmlspecialchars($_POST['date']);
    $address = htmlspecialchars($_POST['addresse']);
    $city = htmlspecialchars($_POST['ville']);
    $country = htmlspecialchars($_POST['pays']);

    // 2. Connexion à la base de données
    // Paramètres de connexion (utilisateur par défaut "root" sans mot de passe)
    $conn = new mysqli("localhost", "root", "", "securite");

    // 3. Vérifier la connexion
    if ($conn->connect_error) {
        die("Échec de la connexion : " . $conn->connect_error);
    }

    // 4. Préparer la requête SQL pour insérer les données
    // Le SQL utilise des paramètres pour éviter les injections SQL
    $sql = "INSERT INTO demandes (nom, email, phone, entreprise, service, description, budget, date, addresse, ville, pays) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // 5. Préparer la requête SQL avec bind_param pour lier les valeurs
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssdssss", $nom, $email, $phone, $entreprise, $service, $description, $budget, $date, $addresse, $ville, $pays);

    // 6. Exécuter la requête et vérifier si l'insertion a réussi
    if ($stmt->execute()) {
        echo "<h2>Merci, votre demande de devis a été soumise avec succès.</h2>";
    } else {
        echo "Erreur lors de la soumission : " . $stmt->error;
    }

    // 7. Fermer la requête et la connexion
    $stmt->close();
    $conn->close();
}
?>
