import React, { useState, useEffect } from 'react';
// Axios
import Axios from 'axios';

const Home = () => {
    const [name, setName] = useState([]);
    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        console.log('Student list');

        const fetchData = async () => {
            const res = await Axios.get('localhost:3000/students');
            setStudentList(res.name)
        };
        fetchData();
    });

    const handleAddStudent = () => {
        console.log('Student added');

        const fetchData = async () => {
            const res = await Axios.post('localhost:3000/students', { name })
                .then(function (res) {
                    console.log(res)
                });
        };
        fetchData();
    };

    const keepValue = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <div>
                {studentList.map(user => user.name)}
            </div>
            <div>
                <h1>Add Student</h1>
                <label>Student name :</label>
                <input type='text'
                    onChange={keepValue} />
                <button
                    onClick={handleAddStudent}
                >
                    Send</button>
            </div>
        </div>
    );
};

export default Home;