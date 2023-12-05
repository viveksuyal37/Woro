'use client';

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
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    // add password auth on production env
    if (process.env.NODE_ENV === 'production') {
      const password = prompt('Enter the password to proceed.');

      if (process.env.NEXT_PUBLIC_APP_PASSWORD !== password) {
        setContent(
          <html lang='en'>
            <body className='flex items-center justify-center w-screen h-screen'>
              <h1>Haha nice try.</h1>
            </body>
          </html>,
        );
      }
    }
  }, []);

  return content ? (
    content
  ) : (
    <html lang='en'>
      <Provider store={store}>
        <body className={`${fonts.urbanist.className}`}>
          <ToastContainer theme='colored' />
          {children}
        </body>
      </Provider>
    </html>
  );
}
