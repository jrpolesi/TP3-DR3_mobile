import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";
import { HeaderWithProgressBar } from "./components/HeaderWithProgressBar.jsx";
import { Questions } from "./screens/Questions.jsx";
import { Result } from "./screens/Result.jsx";
import { Start } from "./screens/Start.jsx";

const Stack = createStackNavigator();

const QUESTIONS = [
  {
    id: 1,
    title: "Qual é o maior planeta do sistema solar?",
    options: ["Júpiter", "Saturno", "Netuno", "Urano"],
    correct: "Júpiter",
    userAnswer: null,
  },
  {
    id: 2,
    title: "Qual é o menor planeta do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
    userAnswer: null,
  },
  {
    id: 3,
    title: "Qual é o planeta mais quente do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Vênus",
    userAnswer: null,
  },
  {
    id: 4,
    title: "Qual é o planeta mais frio do sistema solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Netuno"],
    correct: "Netuno",
    userAnswer: null,
  },
  {
    id: 5,
    title: "Qual é o planeta mais distante do sol?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Netuno",
    userAnswer: null,
  },
  {
    id: 6,
    title: "Qual é o planeta mais próximo do sol?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
    userAnswer: null,
  },
  {
    id: 7,
    title: "Qual é o planeta com maior número de luas?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Júpiter",
    userAnswer: null,
  },
  {
    id: 8,
    title: "Qual é o planeta com menor número de luas?",
    options: ["Mercúrio", "Vênus", "Marte", "Terra"],
    correct: "Mercúrio",
    userAnswer: null,
  },
  {
    id: 9,
    title: "Qual é o planeta mais denso do sistema solar?",
    options: ["Mercúrio", "Vênus", "Terra", "Marte"],
    correct: "Terra",
    userAnswer: null,
  },
  {
    id: 10,
    title: "Qual é o planeta menos denso do sistema solar?",
    options: ["Júpiter", "Saturno", "Urano", "Netuno"],
    correct: "Saturno",
    userAnswer: null,
  },
];

export default function App() {
  const [questions, setQuestions] = useState(QUESTIONS);

  function handleAnswer(questionId, userAnswer) {
    setQuestions((prevState) =>
      prevState.map((question) => {
        if (question.id === questionId) {
          question.userAnswer = userAnswer;
        }

        return question;
      })
    );
  }

  function clearAnswers() {
    setQuestions((prevState) =>
      prevState.map((question) => {
        question.userAnswer = null;

        return question;
      })
    );
  }

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          options={{
            headerLeft: null,
            gestureEnabled: false,
          }}
        >
          {(props) => (
            <Start
              questions={questions}
              clearAnswers={clearAnswers}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Questions"
          options={{
            header: () => (
              <HeaderWithProgressBar
                current={
                  questions.filter(({ userAnswer }) => !!userAnswer).length
                }
                total={questions.length}
              />
            ),
            headerLeft: null,
            gestureEnabled: false,
          }}
        >
          {(props) => (
            <Questions
              questions={questions}
              handleAnswer={handleAnswer}
              {...props}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="Result"
          component={Result}
          options={{
            headerLeft: null,
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
