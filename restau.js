// Fonction pour soumettre le formulaire
async function submitForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const formData = new FormData(document.getElementById('formRestau'));
    const response = await fetch('', {
        method: 'POST',
        body: formData
    });

    const result = await response.text();
    alert(result); // Affiche le message de retour du serveur
}