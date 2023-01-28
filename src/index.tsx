import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ToastContainer, toast } from 'react-toastify';
import ToastMsg from './Components/ToastMsg';

toast.info(<ToastMsg />);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
      />
  </React.StrictMode>
);
