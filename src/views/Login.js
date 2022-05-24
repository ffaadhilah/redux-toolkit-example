import React, {Component, useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect, useSelector, useDispatch} from 'react-redux';
import {loginAction} from '../action';
import {TextInput} from 'react-native-gesture-handler';
import {decrement, increment} from '../features/counter/counterSlice';

export default function Login() {
  const count = useSelector(state => state.counter.value);
  // same way as
  // const {count} = useSelector((state) => state.counter);
  // the state match with the store (state.counter)
  const dispatch = useDispatch();

  // const [todos, setTodos] = useState({});
  // const handleAdd = (todo) => {
  //   setTodos({...todos, [todo.id]: todo});
  // }

  return (
    <View style={styles.viewContainer}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => dispatch(increment())} style={{  marginTop: 30 }}>
        <View style={styles.buttonLogin}>
          <Text style={styles.textButton}>Increment</Text>
        </View>
      </TouchableOpacity>
      <View></View>
      <TouchableOpacity onPress={() => dispatch(decrement())} style={{  marginTop: 30 }}>
        <View style={styles.buttonLogin}>
          <Text style={styles.textButton}>Decrement</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin: {
    width: 300,
    height: 40,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textButton: {
    color: '#FFF',
  },
});

const mapStateToProps = state => ({
  login: state.logg,
});

// export default connect(mapStateToProps, { loginAction })(Login)
