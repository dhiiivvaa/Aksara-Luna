import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import OnboardingScreen from './src/screen/OnboardingScreen';
import ButtonNav from './ButtonNav';

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  return (
    <View style={styles.container}>
      {showOnboarding ? (
        <OnboardingScreen onFinish={() => setShowOnboarding(false)} />
      ) : (
        <ButtonNav />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
