import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dan Hall</Text>
      <Text style={styles.text}>MSCS</Text>
      <Text style={styles.text}>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  text: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 30,
  },
});