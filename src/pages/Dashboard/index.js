import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { TextInput, Card, Button } from 'react-native-paper';
import { Slider } from 'react-native-elements';
import { connect } from 'react-redux';
import { onExpense } from '../../redux/action';

const Dashboard = ({ route, navigation, counter, onExpense }) => {
  const [expediture, setExpenditure] = useState(0);
  const [value, setValue] = useState();
  
  const onExpenditure = () => {
    setExpenditure(counter);
    if (!value)
      onExpense(0);
    else
      onExpense(parseInt(value));
  }

  const limit = route.params.card.card_maxLimit;
  const remainingLimit = limit - parseInt(expediture);

  return (
    <View style={styles.centeredView}>
      <Card>
        <View>
          <Card.Title title="Debit Card Details" />
          <Card.Content>
            <View style={styles.modalView}>
              <TextInput
                right={<TextInput.Icon name="credit-card" />}
                mode="contained"
                label="Debit Card number"
                value={route.params.card.card_number}
                placeholder="Debit Card number"
                style={{ width: 320, marginBottom: 10 }}
                disabled
              />
              <TextInput
                right={<TextInput.Icon name="account-circle" />}
                mode="contained"
                label="Card Holder Name"
                value={route.params.card.card_holder}
                placeholder="Card Holder Name"
                style={{ width: 320, marginBottom: 10 }}
                disabled
              />
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                  mode="contained"
                  label="Expiry Date"
                  value={route.params.card.card_expiry}
                  placeholder="Expiry Date"
                  style={{ width: 160, marginBottom: 10 }}
                  disabled
                />
                <TextInput
                  mode="contained"
                  label="CVV"
                  value={route.params.card.card_cvv}
                  placeholder="CVV"
                  style={{ width: 110, marginBottom: 10 }}
                  secureTextEntry={true}
                  disabled
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TextInput
                mode="outlined"
                label="Expense Amount"
                onChangeText={(values) => setValue(values)}
                value={value}
                placeholder="Enter Expense amount"
                style={{ width: 200, padding: 5 }}
                keyboardType="numeric"
              />
              <Button
                style={[styles.button]}
                onPress={onExpenditure}
              >
                <Text style={styles.textStyle}>Add Expense</Text>
              </Button>
            </View>
            <View>
              <Text style={styles.text}>Total Expenditure: {expediture}</Text>
            </View>
            <View>
              <Text style={styles.text}>Total Limit: {limit}</Text>
            </View>
            <View>
              <Text style={styles.text}>Remaining Limit: {remainingLimit}</Text>
            </View>
            <View style={{ paddingTop: 50 }}>
              <Slider value={expediture} maximumValue={limit} minimumValue={0} />
            </View>
          </Card.Content>
          <Card.Actions>
            <View style={{ alignItems: 'center' }}>
              <Button
                style={[styles.button]}
                onPress={() => navigation.navigate('Home')}
              >
                <Text style={styles.textStyle}>Back to Home</Text>
              </Button>
            </View>
          </Card.Actions>
        </View>
      </Card>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onExpense: (range) => dispatch(onExpense(range)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
