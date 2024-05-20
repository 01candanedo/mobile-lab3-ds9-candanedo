import Navigation from './Navigation';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <Navigation />
      <Toast
        position='top'
        topOffset={40} />
    </>
  );
}
