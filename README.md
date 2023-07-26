# Formulaire de contact avec Email.js

Ce projet est un formulaire de contact simple qui utilise la bibliothèque Email.js pour envoyer des e-mails à partir d'un formulaire Web.

## Importation de la bibliothèque Email.js

Avant de pouvoir utiliser Email.js dans votre projet, vous devez suivre ces étapes :

1. Assurez-vous que vous avez Node.js installé sur votre machine. Si vous ne l'avez pas encore installé, vous pouvez le télécharger depuis le site officiel de Node.js : https://nodejs.org

2. Ouvrez votre terminal et accédez au répertoire de votre projet.

3. Exécutez la commande suivante pour installer la bibliothèque Email.js à l'aide de npm (Node Package Manager) :

   ```bash
   npm install emailjs-com
   ```

4. Ajoutez la ligne suivante juste avant la balise de fermeture `</body>` de votre fichier HTML :

```html
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
```

## Prérequis

Avant d'utiliser ce formulaire de contact, assurez-vous de suivre ces étapes de configuration sur le site officiel d'Email.js :

1. Créez un compte sur Email.js en vous rendant sur https://www.emailjs.com/ et en utilisant votre adresse e-mail.

2. Créez un nouveau service en cliquant sur "Services" > "Add New Service". Donnez un nom à votre service et choisissez un fournisseur de messagerie (comme Gmail ou Outlook). Vous obtiendrez un `service_id` unique.

3. Créez un modèle d'e-mail en cliquant sur "Email Templates" > "Add New Template". Donnez un nom à votre modèle et écrivez le contenu de l'e-mail. Utilisez des variables entre accolades pour personnaliser le contenu en fonction des données du formulaire.

4. Ajoutez votre clé publique dans le fichier HTML comme indiqué ci-dessous :

```html
<!-- Remplacez 'YOUR_USER_ID' par votre clé publique -->
<script>
  (function () {
    emailjs.init('YOUR_USER_ID');
  })();
</script>
```

## Comment utiliser le formulaire de contact

1. Clonez le projet ou téléchargez les fichiers nécessaires.
2. Ouvrez le fichier `index.html` dans votre éditeur de texte.
3. Remplacez `YOUR_SERVICE_ID` et `YOUR_TEMPLATE_ID` par vos identifiants Email.js.

```js
// email.js

(function () {
  emailjs.init('YOUR_USER_ID');
})();

function sendEmail(event) {
  event.preventDefault();
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', event.target)
    .then(function(response) {
      console.log('L\'e-mail a été envoyé avec succès !', response);
      alert('L\'e-mail a été envoyé avec succès !');
      resetForm();
    }, function(error) {
      console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
      alert('Erreur lors de l\'envoi de l\'e-mail : ' + error);
    });
}

// Le reste du code...
```

4. N'oubliez pas d'ajouter l'ID "contact-form" au formulaire de contact pour qu'il puisse être ciblé par le script Email.js. 

```html
<!-- Remplacez ces valeurs par vos propres identifiants Email.js -->
<form id="contact-form" onsubmit="return validateForm()">
  <!-- ... -->
</form>
<script src="email.js"></script>
```

## Comment l'envoi d'e-mails fonctionne

Le JavaScript dans le fichier email.js s'occupe de l'envoi des e-mails via Email.js. Lorsque l'utilisateur soumet le formulaire, l'événement submit est déclenché, ce qui appelle la fonction sendEmail(event). Cette fonction empêche l'envoi par défaut du formulaire, puis utilise Email.js pour envoyer le contenu du formulaire au service spécifié avec le modèle spécifié.

Lorsque l'e-mail est envoyé avec succès, une confirmation s'affiche à l'utilisateur, et le formulaire est réinitialisé.

Personnalisation du formulaire
Vous pouvez personnaliser le formulaire en modifiant le code HTML et CSS selon vos besoins. Vous pouvez également ajouter ou supprimer des champs du formulaire en ajustant le code HTML et JavaScript en conséquence.

N'hésitez pas à personnaliser le style CSS pour correspondre à l'apparence de votre site Web.

## Auteur

Ce projet a été développé par [Nerlyss1](https://github.com/Nerlyss1).
