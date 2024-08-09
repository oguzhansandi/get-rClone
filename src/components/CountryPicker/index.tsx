import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { SvgUri } from 'react-native-svg';
import Modal from 'react-native-modal';
import styles from './style';

interface Country {
  name: string;
  alpha2Code: string;
  flag: string; // Bayrak URL'si
  callingCodes: string[];
}

const CountryPicker = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        const countryData: Country[] = response.data;

        setCountries(countryData);
        const defaultCountry = countryData.find(c => c.alpha2Code === 'TR');
        setSelectedCountry(defaultCountry || null);
        setLoading(false);
      } catch (error) {
        console.error('Ülke verileri çekilirken bir hata oluştu:', error);
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pickerButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.pickerButtonText}>
          {selectedCountry ? `+${selectedCountry.callingCodes[0]}` : 'Ülke Seç'}
        </Text>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <FlatList
              data={countries}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={true}
              keyExtractor={(item) => item.alpha2Code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.countryItem}
                  onPress={() => handleCountryChange(item)}
                >
                  <SvgUri width="30" height="20" uri={item.flag} />
                  <Text style={styles.countryText}>{item.name} (+{item.callingCodes[0]})</Text>
                </TouchableOpacity>
              )}
            />
          )}
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>Kapat</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {selectedCountry && (
        <View style={styles.countryInfo}>
          <SvgUri width="100" height="50" uri={selectedCountry.flag} />
          <Text>{selectedCountry.callingCodes[0]}</Text>
        </View>
      )}
    </View>
  );
};

export default CountryPicker;
