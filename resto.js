// Fonction pour gérer la soumission du formulaire
async function submitForm(event) {
    // Empêche le rechargement de la page
    event.preventDefault();

    // Récupère les valeurs des champs du formulaire
    const nom = document.querySelector('input[placeholder="Nom"]').value;
    const telephone = document.querySelector('input[placeholder="Numero de téléphone"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const date = document.querySelector('input[placeholder="date"]').value;
    const time = document.querySelector('input[placeholder="time"]').value;
    const nombrePersonnes = document.querySelector('input[placeholder="Nombre de personnes"]').value;

    // Valide les champs
    if (!nom || !telephone || !email || !date || !time || !nombrePersonnes) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    // Crée un objet avec les données à envoyer
    const reservationData = {
        nom,
        telephone,
        email,
        date,
        time,
        nombrePersonnes
    };

    try {
        
        const response = await fetch('api-form-d7cu.vercel.app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservationData)
        });

        
        if (!response.ok) {
            throw new Error('Erreur lors de la soumission de la réservation');
        }

        const responseData = await response.json();
        console.log('Réservation réussie:', responseData);

        
        document.getElementById("formRestau").reset();
        alert("Réservation réussie !");
        
    } catch (error) {
        console.error('Erreur:', error);
        alert("Une erreur s'est produite. Veuillez réessayer.");
    }
}
