import { useState, useEffect } from "react";
// Axios
import Axios from 'axios';
// CSS
import './App.css'

const App = () => {
  const [img, setImg] = useState();
  const [user, setUser] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get('http://localhost:3000/user', {
        method: 'GET',
      });
      setData(res.data.data)
    };
    fetchData();
  }, []);

  const handleChangeUsr = (e) => {
    setUser(e.target.value);
  };

  const handleChangeImg = (e) => {
    setImg(e.target.files[0]);
  };

  // envoyer l'user avec des query
  const handleSend = () => {
    console.log('handleSend');
    const formData = new FormData();
    formData.append('image', img);
    console.log(img);

    fetch(`http://localhost:3000/user?username=${user}`, {
      method: 'POST',
      body: formData,
    });
  };

  return (
    <div className='main-container'>
      <h1 className='title'>UPLOAD</h1>


      <div className='container'>
        <h4 className='title'>User list</h4>
        {data.map(user => (
          <p>Username : {user.username}, id : {user.id}</p>
        )).slice(1, data.length)}
      </div>

      <div className='container'>
        <label className='margin police'>Type your username :</label>
        <input
          type='text'
          placeHolder='username'
          onChange={handleChangeUsr} />

        <label className='margin police'>Chose a picture :</label>
        <input
          type='file'
          onChange={handleChangeImg} />
        <button className='margin btn' onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default App;