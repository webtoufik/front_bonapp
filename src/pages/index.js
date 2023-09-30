import Header from '../components/common/header';
import Image from 'next/image'
import { Inter } from 'next/font/google';
import camionHomepage from '../../public/images/camion1.png';
import chauffeur from '../../public/icones/ouvrier_icone.png';
import camion from '../../public/icones/camion_benne_icone.png';
import document from '../../public/icones/document_icone.png';
import qualite from '../../public/icones/qualite_icone.png';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header />
      <div>
        {/* Section 1 */}
        <section className="flex flex-nowrap items-center">
          <div className="w-full md:w-1/2">
            <p className='text-xl p-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center pt-4">
            <Image
              className=''
              src={camionHomepage}
              alt="Logo TNS"
              width={500}
              height={500}
            />
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-nowrap m-8">
          <div className="flex flex-col items-center md:w-1/4 p-4">
            <Image
              className='mb-4'
              src={chauffeur}
              alt="Logo TNS"
              width={100}
              height={100}
            />
            <p className='text-center text-lg'>Des chauffeurs ayant 3 années
              d'expérience minimum, formés et
              sensibilisés de façon continue</p>
          </div>
          <div className="flex flex-col items-center md:w-1/4 p-4">
            <Image
              className=''
              src={camion}
              alt="Logo TNS"
              width={120}
              height={120}
            />
            <p className='text-center text-lg'>Des véhicules révisés et
              entretenus régulièrement afin
              d'assurer la qualité et la
              sécurité du service</p>
          </div>
          <div className="flex flex-col items-center md:w-1/4 p-4">
          <Image
              className='mb-4'
              src={document}
              alt="Logo TNS"
              width={100}
              height={100}
            />
            <p className='text-center text-lg'>Des contrats d'assurance flotte
              et responsabilité civile
              professionnelle complets aux
              garanties élevées</p>
          </div>
          <div className="flex flex-col items-center md:w-1/4 p-4">
          <Image
              className='mb-4'
              src={qualite}
              alt="Logo TNS"
              width={100}
              height={100}
            />
            <p className='text-center text-lg'>Sécurité, qualité, ponctualité et
              satisfaction client sont les maitresmots
              de notre entreprise</p>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <h2>Nos activités</h2>
          <div className="flex flex-nowrap justify-center">
          <div className="w-full md:w-1/3 text-center p-4">
            <p>Terrassement</p>
          </div>
          <div className="w-full md:w-1/3 text-center p-4">
            <p>Rabbottage</p>
          </div>
          <div className="w-full md:w-1/3 text-center p-4">
            <p>Pose / dépose d'enrobé</p>
          </div>
          </div>
        </section>
      </div>
    </>
  )
}
