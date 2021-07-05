import React, { useState } from "react";
import { Modal, Text, View } from "react-native";
import { TextInput, Button, HelperText } from 'react-native-paper';
import { requiredField, ccfield } from '../../utils/validation';
import styles from './styles';

const CardEntry = ({ route, navigation }) => {
  const [cardNumber, setCardNumber] = useState({ value: '', error: '' });
  const [name, setName] = useState({ value: '', error: '' });
  const [expiry, setExpiry] = useState({ value: '', error: '' });
  const [cvv, setCvv] = useState({ value: '', error: '' });
  const [maxLimit, setMaxLimit] = useState({ value: '', error: '' });
  const [array, setArray] = useState([]);

  const { visible } = route.params.visible;

  //api to fetch the dummy card data present in data folder
  // to check the entered data is present in dummy details or not
  React.useEffect(() => {
    fetch("/api/card")
      .then((res) => res.json())
      .then((json) =>
        setArray(json.card))
  }, [])

  //on save function
  const onSave = () => {
    // to cehck if given card is present in dummy or not
    if (array.indexOf(cardNumber.value) == -1) {
      setCardNumber({ ...cardNumber, error: "Card did not found" });
      return;
    }
    //validation for empty field
    const cardNumberError = ccfield(cardNumber.value);
    const nameError = requiredField(name.value);
    const expiryError = requiredField(expiry.value);
    const cvvError = requiredField(cvv.value);
    const maxLimitError = requiredField(maxLimit.value)

    if (cardNumberError || nameError || expiryError || cvvError || maxLimitError) {
      setCardNumber({ ...cardNumber, error: cardNumberError });
      setName({ ...name, error: nameError });
      setExpiry({ ...expiry, error: expiryError });
      setCvv({ ...cvv, error: cvvError });
      setMaxLimit({ ...maxLimit, error: maxLimitError });
      return;
    }
    // navigation to next screen and sending the entered data.
    navigation.navigate('Dashboard', {
      card: {
        card_number: cardNumber.value,
        card_holder: name.value,
        card_expiry: expiry.value,
        card_cvv: cvv.value,
        card_maxLimit: maxLimit.value,
      },
    });
  };

  return (
    <View>
      <Modal visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Please Enter Card Details</Text>
            <View>
              <TextInput
                right={<TextInput.Icon name="credit-card" />}
                mode="outlined"
                label="Debit Card number"
                onChangeText={(values) => setCardNumber({ value: values })}
                value={cardNumber.value}
                placeholder="Debit Card number"
                style={{ width: 320, paddingBottom: 10 }}
                maxLength={16}
                keyboardType="numeric"
                error={!!cardNumber.error}
              />
              {(!!cardNumber.error) &&
                <HelperText type="error">{cardNumber.error}</HelperText>}
              <TextInput
                right={<TextInput.Icon name="account-circle" />}
                mode="outlined"
                label="Card Holder Name"
                onChangeText={(values) => setName({ value: values })}
                value={name.value}
                placeholder="Card Holder Name"
                style={{ width: 320, paddingBottom: 10 }}
                error={!!name.error}
              />
              {(!!name.error) &&
                <HelperText type="error">{name.error}</HelperText>}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                  <TextInput
                    mode="outlined"
                    label="Expiry Date"
                    onChangeText={(values) => setExpiry({ value: values })}
                    value={expiry.value}
                    placeholder="MM/YY"
                    keyboardType="phone-pad"
                    style={{ width: 160, paddingBottom: 10 }}
                    error={!!expiry.error}
                  />
                  {(!!expiry.error) &&
                    <HelperText type="error">{expiry.error}</HelperText>}
                </View>
                <View style={{ flexDirection: 'column' }}>
                  <TextInput
                    mode="outlined"
                    label="CVV"
                    onChangeText={(values) => setCvv({ value: values })}
                    value={cvv.value}
                    placeholder="CVV"
                    style={{ width: 110, paddingBottom: 10 }}
                    secureTextEntry={true}
                    maxLength={3}
                    keyboardType="numeric"
                    error={!!cvv.error}
                  />
                  {(!!cvv.error) &&
                    <HelperText type="error">{cvv.error}</HelperText>}
                </View>
              </View>
              <TextInput
                mode="outlined"
                label="Maximum Limit"
                onChangeText={(values) => setMaxLimit({ value: values })}
                value={maxLimit.value}
                placeholder="Maximum Limit"
                style={{ width: 320 }}
                keyboardType="numeric"
                error={!!maxLimit.error}
              />
              {(!!maxLimit.error) &&
                <HelperText type="error">{maxLimit.error}</HelperText>}
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View style={{ margin: 20 }}>
                <Button
                  style={[styles.button]}
                  onPress={onSave}
                >
                  <Text style={styles.textStyle}>Save</Text>
                </Button>
              </View>
              <View style={{ margin: 20 }}>
                <Button
                  style={[styles.button]}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CardEntry;