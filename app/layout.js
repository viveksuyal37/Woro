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

/*constants*/
import { APP_PASSWORD } from '@/constants/password';

export default function RootLayout({ children }) {
  // add password auth on production env
  if (process.env.NODE_ENV === 'production') {
    const password =
      typeof window === 'object'
        ? prompt('Enter the password to proceed.')
        : null;

    if (APP_PASSWORD !== password) {
      return (
        <html lang='en'>
          <body className='flex items-center justify-center w-screen h-screen'>
            <h1>Haha nice try.</h1>
          </body>
        </html>
      );
    }
  }

  return (
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
