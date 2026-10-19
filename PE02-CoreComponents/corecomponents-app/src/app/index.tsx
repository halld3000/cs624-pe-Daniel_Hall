
import React from 'react';
import {
  View, Text, ScrollView, Image,
  TextInput, StyleSheet
} from 'react-native';

const App = () => {
  const core = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning'
  ];

  const depth = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App'
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={{
            uri: '/workspaces/cs624-pe-Daniel_Hall/PE02-CoreComponents/corecomponents-app/assets/images/icon.png'
          }}
          style={styles.image}
        />
      </View>

      <Text>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
      />

      <Text style={styles.heading}>
        Core Requirements (24 credits)
      </Text>

      {core.map((course, index) => (
        <Text key={index} style={styles.course}>
          {course}
        </Text>
      ))}

      <Text style={styles.heading}>
        Depth of Study (6 Credits)
      </Text>

      {depth.map((course, index) => (
        <Text key={index} style={styles.course}>
          {course}
        </Text>
      ))}

      <Text style={styles.heading}>
        Capstone (3 Credits)
      </Text>

      <Text style={styles.course}>
        CS 687 Computer Science Capstone
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageBox: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    padding: 10,
    fontSize: 18,
  },
  heading: {
    backgroundColor: 'yellow',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 30,
    padding: 5,
  },
  course: {
    fontSize: 18,
    marginBottom: 5,
    paddingHorizontal: 5,
  },
});

export default App;
