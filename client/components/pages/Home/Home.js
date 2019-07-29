import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Register from './Register';
import Login from './Login';

function Home({ match, history }) {
  const { isAuthenticated } = useSelector(state => ({ ...state.user }));
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/browse');
    }
    console.log(match.path);
  }, [isAuthenticated]);
  return (
    <div className="full-width-container h-100-hero flex">
      <div className="image-mosaic-container">
        {/* code for art gallery stuff here  */}
      </div>
      {match.path === '/register' ? <Register /> : <Login />}
    </div>
  );
}

export default Home;
