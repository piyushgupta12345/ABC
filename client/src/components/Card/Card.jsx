import React from 'react'

function Card() {

    const influencer = [
        { name: 'Ajay', followers: 100000, engagementRate: 2.5 },
        { name: 'Raghav', followers: 50000, engagementRate: 3.1 },
        { name: 'Adarsh', followers: 51000, engagementRate: 4.0 },
        { name: 'Sanjana', followers: 57000, engagementRate: 4.5 },
        { name: 'Tanmay', followers: 59000, engagementRate: 2.8 },
        { name: 'Shaurya', followers: 565000, engagementRate: 4.1 },
        { name: 'Rohit', followers: 500780, engagementRate: 2.2 },
        { name: 'Pappu', followers: 345000, engagementRate: 3.7 },
        { name: 'Kirti', followers: 245000, engagementRate: 3.2 },
        { name: 'Mohit', followers: 995000, engagementRate: 5.8 },
        { name: 'Aman', followers: 245000, engagementRate: 3.2 },
        { name: 'Influencer', followers: 995000, engagementRate: 5.8 },
    ];

    return (
        <>
            <main className=' flex items-center justify-center flex-wrap px-5'>
                <h1 className='text-[50px] select-none max-[768px]:text-[32px] font-bold py-10 text-center'>Top 12 Influencers<span className='max-[500px]:hidden'>/Celebrities</span></h1>

                <section className=' flex items-center justify-center flex-wrap gap-6 '>
                    {influencer.map((el, i) =>
                    (
                        <div
                            key={i}
                            className="max-w-xs flex flex-col justify-center items-center rounded-lg overflow-hidden shadow-2xl hover:shadow-xl cursor-pointer transition duration-500 ease-in-out text-black">
                            <img
                                src='https://img.freepik.com/free-photo/influencer-posting-social-media_23-2149194122.jpg'
                                alt={el.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Name: <span className=' bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 ' >{el.name}</span></div>
                                <div className="font-bold text-xl mb-2">Followers: {el.followers}</div>
                                <div className="font-bold text-xl mb-2">Name: <span className=' bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 '>{el.name}</span></div>
                                <div className="font-bold text-xl mb-2">Name: <span className=' bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 '>{el.name}</span></div>
                                <div className="font-bold text-xl mb-2">Rating: <span className=' bg-gray-200 rounded-full px-3 py-1 text-xl font-semibold text-gray-700 '>{el.name}</span></div>
                            </div>
                        </div>
                    ))}
                </section>

            </main>
        </>
    )
}

export default Card
