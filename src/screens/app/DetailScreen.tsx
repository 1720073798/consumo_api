import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navegation/RootStackParamList";
import { getCharacterById } from "../../services/apiService";
import { Character } from "../../types/api";

type Props = StackScreenProps<RootStackParamList, "Detail">;

const DetailScreen = ({ route }: Props) => {
  const { id } = route.params;
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        console.log(err);
        setError("Error al cargar detalle");
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !character) {
    return (
      <View style={styles.center}>
        <Text>{error ?? "Personaje no encontrado"}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: character.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.label}>Especie: <Text style={styles.value}>{character.species}</Text></Text>
        <Text style={styles.label}>Estado: <Text style={styles.value}>{character.status}</Text></Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: "center" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  image: { width: 240, height: 240, borderRadius: 12, marginBottom: 20 },
  info: { width: "100%", alignItems: "flex-start" },
  name: { fontSize: 24, fontWeight: "700", marginBottom: 12 },
  label: { fontSize: 16, color: "#444", marginBottom: 6 },
  value: { fontWeight: "700", color: "#111" },
});

export default DetailScreen;
