import Header from '../../components/common/header';

export default function Truck({ truck }) {
    console.log('truck front', truck)
    return (
        <>
            <Header />
            <h1 className='m-4'>Véhicule N° {truck.truck_id}</h1>
            <div className='flex flex-col'>
                <h5 className='flex justify-center mt-2'>Nom: {truck.name}</h5>
                <h5 className='flex justify-center mt-2'> Immatriculation: {truck.immat}</h5>
                <p className='flex justify-center mt-2'> Benne: {truck.trailer}</p>
            </div>
        </>
    )
}


export async function getServerSideProps(context) {
    const { id } = context.query; // Récupérer l'ID du véhicule depuis les paramètres de requête

    console.log('truck id', id)

    const res = await fetch(`${process.env.BACKEND_URL}/api/v1/truck/${id}`)
    const truck = await res.json()
    console.log('truck', truck)

    return {
        props: {
            truck,
        },
    };
}
