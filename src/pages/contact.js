import emailjs from "@emailjs/browser"
import Header from '../components/common/header';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        const formReset = document.getElementById('form');

        emailjs.sendForm(
            'service_i4tgd3h', 
            'template_odpy0de', 
            e.target, 
            '_YEbG5wbsDa6JTAfS'
        ).then(res=>{
            console.log("Mail envoyé", res);
            alert("Votre message à bien été envoyé, Merci !");
            formReset.reset();
        }).catch(err=> console.log("erreur d'envoi du mail", err))
    }

    return (
        <>
            <Header />
            <div className="flex flex-col text-center md:flex-row">
                {/* Bloc des informations de contact */}
                <div className="flex flex-col justify-center items-center md:w-1/2 p-6">
                    <h2 className="text-2xl font-bold mb-8">Vous souhaitez obtenir des informations ?</h2>
                    <h3 className="mb-8">Nos équipes sont disponibles pour répondre à toutes vos questions par mail ou téléphone.</h3>
                    <p className="mb-8">
                        <a href="tel:+33600010203" class="card-link">06.00.01.02.03</a>
                    </p>
                    <p className="mb-8">
                        <a href="mailto:tnstransport@gmail.com" class="card-link">tnstransport@gmail.com</a>
                    </p>
                </div>

                {/* Bloc du formulaire de contact */}
                <div className="sm:w-1/2 p-6">
                    <h2 className="text-2xl font-bold mb-4">Contactez-nous !</h2>
                    <form id='form' onSubmit={sendEmail}>
                        <div className="mb-4">
                            <label htmlFor="lastname" className="block text-gray-700 font-bold">Nom :</label>
                            <input type="text" id="lastname" name="lastname" className="w-full border rounded-lg py-2 px-3" required="required"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="firstname" className="block text-gray-700 font-bold">Prénom :</label>
                            <input type="text" id="firstname" name="firstname" className="w-full border rounded-lg py-2 px-3" required="required"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold">Email :</label>
                            <input type="email" id="email" name="email" className="w-full border rounded-lg py-2 px-3" required="required"/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-bold">Message :</label>
                            <textarea id="message" name="message" className="w-full border rounded-lg py-2 px-3" required="required"></textarea>
                        </div>
                        <button type="submit" className="bg-red-500 hover:bg-red-800 hover:shadow-sm hover:scale-95 transition duration-300 text-white font-bold py-2 px-4 rounded-lg">Envoyer</button>
                    </form>
                </div>
            </div>
        </>
    )
}

//onSubmit={sendEmail} 