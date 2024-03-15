import { View } from 'react-native';
import Home from './src/screens/Home';
import useFonts from './src/hooks/useFonts';

export default function App() {
  const { fontsLoaded, fontError, onLayoutRootView } = useFonts();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Home />
    </View>
  );
}
