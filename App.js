import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Penanggung Jawab E-Footbal</Text>
      {/* Kotak kiri */}
      <View style={[styles.box, styles.boxLeft]} />
      <Text style={[styles.text1]}>apa aja</Text>
      {/* Kotak kanan */}
      <View style={[styles.box, styles.boxRight]} />
      <Text style={[styles.text2]}>apa aja</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Warna latar belakang abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: '#E5E4E2',
    fontWeight: 'bold',
    backgroundColor: '#C0C0C0', // Latar belakang teks abu-abu terang
    borderRadius: 70, // Membuat sudut kotak teks melengkung
    padding: 15,
    top :'-10%',
    left :'%',
    position: 'relative',
    
  },
 text1: {
    position: 'relative',
    left: '-31%',
    top: '-20',
    color: 'white'
 },
 text2: {
  position: 'relative',
  right: '-31%',
  top: '-40',
  color: 'white'
},
  box: {
    
    width: 100,
    height: 100,
    position: 'absolute',
  },
  boxLeft: {
    backgroundColor: '#98AFC7', // Warna kotak kiri (bebas)
    top: '%', // Posisi kotak dari atas
    left: '7%', // Posisi kotak dari kiri
  },
  boxRight: {
    backgroundColor: 'green', // Warna kotak kanan (bebas)
    top: '%', // Posisi kotak dari atas
    left: '69%', // Posisi kotak dari kiri (disesuaikan agar berada di sisi kanan)
  },
});
