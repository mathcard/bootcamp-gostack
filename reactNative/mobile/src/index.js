import React, {useEffect, useState} from 'react';
import { View, FlatList, Text, StyleSheet, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import api from '../services/api';

export default function App () {
  const [projects, setProjects] = useState([]);
  
  useEffect(()=> {
    api.get('projects').then(response => {
      console.log(response.data);
      setProjects(response.data);
    })
  }, [])

  async function handleAddProject () {
    const response = await api.post('projects', {
      title: 'New Project',
      owner: 'Math'
    })
    setProjects([...projects, response.data])
  }

  return (
  <>  
    <StatusBar barStyle="light-content" backgroundColor="#7159c1"/>
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.container}
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({ item }) => (
          <Text style={styles.title}>{item.title}</Text>
        )}
      />

      <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleAddProject}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </SafeAreaView>

    {/*<View style={styles.container}>
      {projects.map(project => (
        <Text style={styles.title} key={project.id}>{project.title}</Text>
      ))}
    </View>*/}
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#FFF',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
})