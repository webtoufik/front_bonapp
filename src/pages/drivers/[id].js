import Header from '../../components/common/header';

export default function Driver({ driver, formattedDate }) {
    console.log('driver front', driver)
    return (
        <>
            <Header />
            <h1 className='m-4'>Chauffeur N° {driver.driver_id}</h1>
            <div className='flex flex-col'>
                <h5 className='flex justify-center mt-2'>Nom: {driver.firstname}</h5>
                <h5 className='flex justify-center mt-2'> Prénom: {driver.lastname}</h5>
                <p className='flex justify-center mt-2'> Date de naissance: {formattedDate}</p>
                <p className='flex justify-center mt-2'> Téléphone: {driver.phone}</p>
            </div>
        </>
    )
}


export async function getServerSideProps(context) {
    const { id } = context.query; // Récupérer l'ID du véhicule depuis les paramètres de requête

    console.log('driver id', id)

    const res = await fetch(`http://localhost:9500/api/v1/driver/${id}`)
    const driver = await res.json()
    console.log('driver', driver)

    const birthDriver = driver.dateofbirth;
    const formattedDate = new Date(birthDriver).toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

    return {
        props: {
            driver,
            formattedDate,
        },
    };
}
