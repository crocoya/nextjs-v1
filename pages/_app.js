import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.scss';
import Header from '../components/organisms/header';

function MyApp({ Component, pageProps }) {
  return (
    <Header>
      <Component {...pageProps} />
    </Header>
  );
}

export default MyApp;
