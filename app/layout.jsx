import '@/styles/globals.scss';
import { Providers } from '@/redux/providers';
import Header from '@/components/(Header)/Header';
import Footer from '@/components/(Footer)/Footer';

export const metadata = {
  title: 'food-delivery',
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/svg/horse.svg',
  },
};

export default function RootLayout(props) {
  return (
    <Providers>
      <html lang="ru">
        <head />
        <body className="body body_position_center" id="body">
          <Header />
          {props.children}
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
