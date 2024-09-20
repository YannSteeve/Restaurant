async function submitForm(event) {
    event.preventDefault();

    const nom = document.querySelector('input[placeholder="Nom"]').value;
    const telephone = document.querySelector('input[placeholder="Numero de téléphone"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const date = document.querySelector('input[placeholder="Date"]').value;
    const time = document.querySelector('input[placeholder="Heure"]').value;
    const nombrePersonnes = document.querySelector('input[placeholder="Nombre de personnes"]').value;

    
    if (!nom || !telephone || !email || !date || !time || !nombrePersonnes) {
        alert("Veuillez remplir tous les champs !");
        return;
    }

    const reservationData = { nom, telephone, email, date, time, nombrePersonnes };

    
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = "Envoi de votre réservation...";
    document.body.appendChild(loadingMessage);

    try {
        const response = await fetch('https://api-form-gj21.onrender.com/api/reservations', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reservationData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erreur lors de la soumission de la réservation');
        }

        const responseData = await response.json();
        console.log('Réservation réussie:', responseData);
        
        
        document.getElementById("formRestau").reset();
        alert("Réservation réussie !");
        
    } catch (error) {
        console.error('Erreur:', error);
        alert("Une erreur s'est produite : " + error.message);
    } finally {
        
        submitButton.disabled = false;
        document.body.removeChild(loadingMessage);
    }
}
