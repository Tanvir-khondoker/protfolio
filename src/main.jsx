import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Gear from './assets/personal/galaxy.gif';

const Main = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-[black]">
          <img src={Gear} alt="Loading" className="w-[350px] " />
        </div>
      ) : (
        <div className="mx-auto">
          <App />
        </div>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
