import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Character } from '../types/api';
import { cardStyles } from '../styles/estilo';


//aqui mando parametros
interface CardProps {
  character: Character;
  onPress: () => void;
}

export const Card = ({ character, onPress }: CardProps) => {
  return (
    <TouchableOpacity style={cardStyles.card} onPress={onPress} activeOpacity={0.7}>
      <View style={cardStyles.header}>
        <View style={cardStyles.left}> 
          <Image source={{ uri: character.image }} style={cardStyles.avatar} />
          <View style={{ flex: 1 }}>
            <Text style={cardStyles.title}>Nombre: {character.name}</Text>
            <Text style={cardStyles.userId} numberOfLines={1}>{character.species}</Text>
          </View>
        </View>
        <View style={cardStyles.badge}>
          <Text style={cardStyles.badgeText}>#{character.id}</Text>
        </View>
      </View>
      <Text style={cardStyles.body} numberOfLines={2}>{character.status}</Text>
    </TouchableOpacity>
  );
};


