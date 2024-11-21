import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export function Proposicao({ proposicao, onUserOpinion }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {proposicao.siglaTipo} {proposicao.numero}/{proposicao.ano}
      </Text>
      <Text style={styles.ementa}>{proposicao.ementa}</Text>

      {onUserOpinion && (
        <View style={styles.actionContainer}>
          <Icon.Button
            name="thumbs-down"
            size={24}
            iconStyle={styles.actionIconStyle}
            onPress={() => onUserOpinion(false)}
            backgroundColor={
              proposicao.opinion === false
                ? "#c62c2c"
                : "rgba(201, 89, 89, 0.515)"
            }
          >
            Discordo
          </Icon.Button>
          <Icon.Button
            name="thumbs-up"
            size={24}
            iconStyle={styles.actionIconStyle}
            onPress={() => onUserOpinion(true)}
            backgroundColor={
              proposicao.opinion === true ? "#1e79ba" : "#2d81bd82"
            }
          >
            Concordo
          </Icon.Button>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ementa: {
    fontSize: 16,
    color: "#333",
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  actionIconStyle: {
    marginRight: 4,
    marginHorizontal: 4,
  },
});
