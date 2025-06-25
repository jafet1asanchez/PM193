// ZONA A: Importaciones necesarias
import React, {use, useEffect, useState} from 'react';
import { View, StatusBar } from 'react-native';
import SplashScreen  from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';

// ZONA B: Componente principal de la aplicación (MAIN)
export default function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
   <View style={{flex: 1}}>
      <StatusBar hidden></StatusBar>
      {isLoading ? <SplashScreen/> : <HomeScreen/>} 
   </View>
  );
}
