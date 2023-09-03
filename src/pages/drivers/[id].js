import Header from '../../components/common/header';

export default function Driver({ driver }) {
    console.log('driver front', driver)
    return (
      <>
      <Header />
      <h1 className='m-4'>Chauffeur N° {driver.driver_id}</h1>
      <h5>{driver.firstname}</h5>
      <h5>{driver.lastname}</h5>
      </>
    )
  }


export async function getServerSideProps(context) {
    const { id } = context.query; // Récupérer l'ID du véhicule depuis les paramètres de requête

    console.log('driver id', id)

    const res = await fetch (`http://localhost:9500/api/v1/driver/${id}`)
    const driver = await res.json()
    console.log('driver', driver)
  
    return {
      props: {
        driver,
      },
    };
  }
