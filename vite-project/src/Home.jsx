import { useState } from 'react';
import Bloglist from './Bloglist';


const Home = () => {
    // let name = 'mario';
    // const [name, setName] = useState('Mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //     // alert('Button clicked!');
    //     // console.log('Hello ninjas', e.target);
    //     // name = 'luigi';
    //     // console.log(name);
    //     setName('Victor');
    //     setAge(30);
    // }
    const [blogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    return (
        <div className="flex flex-col items-center gap-4 mt-5">
            <h2 className="text-2xl text-purple-800 text-shadow-purple-800 ">Homepage</h2>
            {/* <p className=" text-purple-600 bg-white border-2 border-purple-600 py-2 px-6 rounded-2xl text-2xl">My name is {name} and I am {age} years old.</p>
            <button className="bg-purple-600 text-white py-2 px-6 rounded-xl hover:bg-purple-700 transition duration-300 transform hover:scale-105" onClick={handleClick}>Click Me</button> */}
            <Bloglist blogs={blogs} title="All Blogs!" />
        </div>
    );

}

export default Home;    
 