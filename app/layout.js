'use client';

/*Internal imports*/
import { useEffect, useState } from 'react';

/*external imports*/
import { ToastContainer } from 'react-toastify';

/*fonts*/
import fonts from '@/font/fonts';

/*redux*/
import { Provider } from 'react-redux';
import { store } from '@/Redux/store';

/*styles*/
import './globals.css';
import 'react-toastify/dist/ReactToastify.min.css';

export default function RootLayout({ children }) {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    // add password auth on production env
    if (process.env.NODE_ENV === 'production') {
      const password = prompt('Enter the password to proceed.');

      if (process.env.NEXT_PUBLIC_APP_PASSWORD === password) {
        setAuth(true);
      }
    }
  }, []);

  return auth ? (
    <html lang='en'>
      <Provider store={store}>
        <body className={`${fonts.urbanist.className}`}>
          <ToastContainer theme='colored' />
          {children}
        </body>
      </Provider>
    </html>
  ) : (
    <html lang='en'>
      <body
        className={`${fonts.urbanist.className} flex items-center justify-center`}
      >
        <h1>Nice try</h1>
      </body>
    </html>
  );
}
