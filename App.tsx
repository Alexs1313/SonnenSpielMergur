import SonnenSpielMergurStack from './SonnenSpielMergurSrc/SonnenSpielMergurNavigation/SonnenSpielMergurStack';
import SonnenSpielMergurLoader from './SonnenSpielMergurSrc/SonnenSpielMergurComponents/SonnenSpielMergurLoader';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { ContextProvider } from './SonnenSpielMergurSrc/SonnenSpielMergurStore/sonnenSpielMergurContext';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {isLoading ? <SonnenSpielMergurStack /> : <SonnenSpielMergurLoader />}
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
