import React, { useState, useEffect } from 'react';

//Import all required component
import { ActivityIndicator, View, StyleSheet, Image,Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = props => {
  //State for ActivityIndicator animation
  let [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen
      AsyncStorage.getItem('user_id').then(value =>
        props.navigation.navigate(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        )
      );
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{marginBottom:70,fontSize:50,textAlign:'center',color:'#5642DB',fontFamily:'roboto',fontWeight:'900'}}>
        The Invoice
      </Text>
     <Image style={{width:200,height:200}} source={require('../Image/spl.png')} />
      <ActivityIndicator
        animating={animating}
        color="#333"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};
export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#fff"
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});