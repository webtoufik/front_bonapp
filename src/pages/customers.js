import Header from '../components/common/header';

export default function Customers({ datas }) {
    console.log('datas', datas)
    console.log('guinto', datas[0].name)

    return (
        <>
            <Header />
            <h1 className='p-4'>Liste des clients TNS</h1>
            <div className='flex flex-wrap justify-around'>
            {datas.map(data => (
                <div class="w-56 h-56 m-4 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.email}</p>
                    <a href={`/api/v1/customer/${data.customer_id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Ouvrir
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            ))}
            </div>
        </>
    )
}


export async function getServerSideProps() {
    // Fetch data from my external API
    const res = await fetch(`http://localhost:9500/api/v1/customers`)
    const datas = await res.json()

    // Pass data to the page via props
    return { props: { datas } }
}