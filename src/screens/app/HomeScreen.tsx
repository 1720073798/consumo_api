import React, { useMemo, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { homeStyless, styles } from "../../styles/estilo";
import { Header } from "../../components/Header";
import { useCharater } from "../../hooks/useCharacter";
import { Card } from "../../ui/Card";
import { Input } from "../../ui/Input";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navegation/RootStackParamList";

type HomeScreenProps = StackScreenProps<RootStackParamList, "HomeScreen">;

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { character, error, loading } = useCharater();
  const [query, setQuery] = useState<string>("");

  const filtered = useMemo(() => {
    if (!query) return character;
    const q = query.toLowerCase();
    return character.filter((c) => c.name.toLowerCase().includes(q));
  }, [character, query]);
  return (
    <View style={styles.container}>
      <Header></Header>
      <Input
        label=""
        placeholder="Buscar por nombre"
        value={query}
        onChangeText={(text) => setQuery(text)}
        autoCapitalize="none"
      />
      {loading && <Text style={homeStyless.sectionTitle}>Cargando personajes...</Text>}
      {error && <Text style={homeStyless.sectionTitle}>{error}</Text>}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            character={item}
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={homeStyless.list}
      />
      {!loading && filtered.length === 0 && (
        <Text style={{ textAlign: "center", marginTop: 12, color: "#718096" }}>
          No se encontraron personajes
        </Text>
      )}
    </View>
  );
};
