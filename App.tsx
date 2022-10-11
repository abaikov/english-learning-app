/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import 'intl-pluralrules'
// import { PersistGate } from 'redux-persist/integration/react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { AppNavigation } from './src/navigation/AppNavigation';
import { ReduxStoreFactory } from './src/redux/ReduxStoreFactory';
import { AppPersistInitedAction } from './src/modules/app/redux/action/AppPersistInitedAction';

const store = ReduxStoreFactory.createStore();
const persistor = persistStore(store)

const App = () => {
    return <Provider store={store}>
      <PersistGate 
          loading={null} 
          persistor={persistor} 
          onBeforeLift={() => {
              store.dispatch(AppPersistInitedAction());
              SplashScreen.hide();
          }}
      >
            <AppNavigation/>
        </PersistGate>
    </Provider>

  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // return (
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <ScrollView
  //       contentInsetAdjustmentBehavior="automatic"
  //       style={backgroundStyle}>
  //       <Header />
  //       <View
  //         style={{
  //           backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //         }}>
  //         <Section title="Step One">
  //           Edit <Text style={styles.highlight}>App.tsx</Text> to change this
  //           screen and then come back to see your edits.
  //         </Section>
  //         <Section title="See Your Changes">
  //           <ReloadInstructions />
  //         </Section>
  //         <Section title="Debug">
  //           <DebugInstructions />
  //         </Section>
  //         <Section title="Learn More">
  //           Read the docs to discover what to do next:
  //         </Section>
  //         <LearnMoreLinks />
  //       </View>
  //     </ScrollView>
  //   </SafeAreaView>
  // );
};

export default App;
