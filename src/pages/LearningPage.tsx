import React from 'react';

const LearningPage: React.FC = () => {
    return (
        <div>
             {/* This is the Learning Page component */}
            <div className='border-2 border-red-500 p-8 m-4'>
                <div className="text-center text-slate-200 border-2 border-slate-200 ">
                    <h1>Learning Page</h1>
                    <p>Welcome to the Learning Page!</p>
                </div>
            </div>

            {/* Border */}
            <div className='border-2 border-blue-500 px-8 m-4'>
                Dan
            </div>

            {/* Button with border */}
            <button className= 'border-2 border-green-600 text-green-600 px-8 py-2 m-4 rounded-md'>
                Click Me
            </button>

            <button className= 'rounded-lg bg-sky-400 text-white px-10 py-2 text-3xl m-4'>
                Click Me
            </button>

            <button className='bg-violet-100 text-violet-600 px-8 py-2 rounded-full m-4'>
                Click Me
            </button>

            <button className=' m-4 bg-cyan-700 text-cyan-200 p-10 rounded-lg hover:bg-cyan-200 hover:text-cyan-700'>
                Click Me
            </button>

            <div className=''>

            </div>
        </div>
    );
};

export default LearningPage;


