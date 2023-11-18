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

export default function RootLayout({ children }) {
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
