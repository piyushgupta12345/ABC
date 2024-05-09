import React from 'react'

function CollabCard() {

    const collaborations = [
        {
            companyImage: 'https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg',
            influencerName: 'Influencer 1',
            companyName: 'ABC',
            date: '2023-02-15'
        },
        {
            companyImage: 'https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg',
            influencerName: 'Influencer 1',
            companyName: 'ABC',
            date: '2023-02-15'
        },
        {
            companyImage: 'https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg',
            influencerName: 'Influencer 1',
            companyName: 'ABC',
            date: '2023-02-15'
        },
        {
            companyImage: 'https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg',
            influencerName: 'Influencer 1',
            companyName: 'ABC'
        },
        {
            companyImage: 'https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg',
            influencerName: 'Influencer 1',
            companyName: 'ABC',
            date: '2023-02-15'
        },
        {
            companyImage: 'https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg',
            influencerName: 'Influencer 1',
            companyName: 'ABC',
            date: '2023-02-15'
        },
        {
            companyImage: 'https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg',
            influencerName: 'Influencer 1',
            companyName: 'ABC',
            date: '2023-02-15'
        },
        {
            companyImage: 'https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg',
            influencerName: 'Influencer 1',
            companyName: 'ABC',
            date: '2023-02-15'
        }
    ];

    return (
        <>
            <main className=' flex items-center justify-center flex-wrap px-5'>
                <h1 className='text-[50px] max-[768px]:text-[32px] font-bold py-10 text-center'>collaborations </h1>

                <section className=' flex items-center justify-center flex-wrap gap-6 '>
                    {collaborations.map((el, i) =>
                    (
                        <div
                            key={i}
                            className="max-w-xs flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-2xl hover:shadow-xl cursor-pointer transition duration-500 ease-in-out text-black">
                            <img
                                src={el.companyImage}
                                alt={el.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">influencerName: <span className=' bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 '>{el.influencerName}</span></div>
                                <div className="font-bold text-xl mb-2">Date: <span className=' bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 '>{el.date}</span></div>
                                <div className="font-bold text-xl mb-2">companyName: <span className=' bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 '>{el.companyName}</span></div>
                            </div>
                        </div>
                    ))}
                </section>

            </main>
        </>
    )
}

export default CollabCard
