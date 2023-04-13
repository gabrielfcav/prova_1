import React, { useState } from 'react';
import { Modal, View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { KeyboardAvoidingView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

export function Modala({ adicionarRemedio, setVisivel, setNomeRemedio, setHorario }) {
  return (
    <SafeAreaView style={styles.modalContainer}>
      <KeyboardAvoidingView style={styles.modalContent} behavior="padding">
        <Text style={styles.modalTitle}>Adicionar Item</Text>
        <TextInput
          style={styles.modalInput}
          placeholder="Nome do Remédio"
          onChangeText={(text) => setNomeRemedio(text)}
        />
        <TextInputMask
          style={styles.modalInput}
          placeholder="Horário do remédio"
          type={'datetime'}
            options={{
            format: 'HH:mm'
        }}
          onChangeText={(text) => setHorario(text)}
        />
        <TouchableOpacity style={styles.modalBotao} onPress={adicionarRemedio}>
          <Text >Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.modalBotao} onPress={() => setVisivel(false)}>
          <Text>Cancelar</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}