import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Question } from "../components/Question.jsx";

export function Questions({ navigation, questions, handleAnswer, route }) {
  const currentQuestionData = questions.find(
    ({ id }) => id === route.params.currQuestion
  );

  const currentQuestionIndex = route.params.currIndex;

  function onAnswer(questionId, answer) {
    handleAnswer(questionId, answer);
  }

  function handleFinish() {
    navigation.navigate("Result", {
      result: {
        points: questions.reduce((acc, question) => {
          return question.correct === question.userAnswer ? acc + 5 : acc;
        }, 0),
        maxPoints: questions.length * 5,
      },
    });
  }

  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <View style={styles.container}>
      <Question
        key={currentQuestionData.id}
        title={currentQuestionData.title}
        options={currentQuestionData.options}
        correct={currentQuestionData.correct}
        userAnswer={currentQuestionData.userAnswer}
        onAnswer={(answer) => onAnswer(currentQuestionData.id, answer)}
      />

      <TouchableOpacity
        style={{
          ...styles.nextBtn,
          opacity: currentQuestionData.userAnswer ? 1 : 0.5,
        }}
        disabled={!currentQuestionData.userAnswer}
        onPress={() => {
          if (isLastQuestion) {
            handleFinish();
            return;
          }

          navigation.navigate("Questions", {
            currQuestion: questions[currentQuestionIndex + 1].id,
            currIndex: currentQuestionIndex + 1,
          });
        }}
      >
        <Text style={styles.btnText}>
          {isLastQuestion ? "Finalizar" : "Próxima"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    gap: 20,
  },
  nextBtn: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: "flex-end",
  },
  startBtn: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 26,
    marginTop: 40,
    borderRadius: 5,
    alignSelf: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: 18,
  },
});
