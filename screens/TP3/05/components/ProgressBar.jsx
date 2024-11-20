import { StyleSheet, View } from "react-native";

export function ProgressBar({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: `${progress}%` }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    backgroundColor: "#aac6f0",
    height: 15,
    borderRadius: 7.5,
  },
  progress: {
    backgroundColor: "blue",
    height: "100%",
    width: "50%",
    borderRadius: 7.5,
  },
});
