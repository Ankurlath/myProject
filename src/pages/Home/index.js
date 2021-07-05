import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View
} from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import styles from './styles';

const Home = ({ navigation }) => {

  const [visible, setVisible] = React.useState(false);
  const showModal = () => {
    setVisible(true);
    navigation.navigate('CardEntry', { visible: visible })
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <Appbar.Header style={{backgroundColor: 'lightblue'}}>
          <Appbar.BackAction/>
          <Appbar.Content title="Aspire" subtitle="Mobile Development" />
          <Appbar.Action icon="magnify" />
          <Appbar.Action icon="dots-vertical"/>
        </Appbar.Header>
        <View style={styles.container}>
          <Text style={styles.header}>Welcome to Aspire</Text>
          <Text style={styles.header}>Coding test</Text>
          <View style={styles.buttonContainer}>
            <Button
              mode="contained"
              color='grey'
              onPress={showModal}
            >
              Click to Add Card
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default Home;
