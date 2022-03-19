import React from 'react';
import {useNavigate} from 'react-router-dom';

const Main = () => {
  let navigate = useNavigate();
    const navigateRead = () =>
    {
        navigate('/load-users');
    }

    const navigateCreate = () =>
    {
        navigate('/add-user');
    }

  return (
    <div className='main'>
        <h1 className="main-header">Redux CRUD Operations</h1>
        <div>
        <button className="button-29" type = "button" onClick={navigateCreate}>Create User</button>
        <button className="button-29" type = "button" onClick={navigateRead}>Read Users</button>
        </div>
    </div>
  );
};

export default Main;
