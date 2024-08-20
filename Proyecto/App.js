import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {useState} from "react";
import {SimpleButton} from "./components/SimpleButton";

export default function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const numbers = ["%", "/","C", 7,8,9,4,5,6,1,2,3, ",", 0,"."];
  const handleClickButton = (value) => {
    if (result !== null && !isNaN(value)) {
      setInput(input + value);
      setResult(null);
      console.log(value)
    } else {
      setInput(input + value);
      console.log(value)
    }
  };

  const handleShowResult = () => {
      try {
        const resultado = eval(input);
        const resultadoLimitado = resultado.toString().substring(0, 8);

        setResult(resultadoLimitado);
        setInput(resultadoLimitado);
      } catch (error) {
        setInput("Error");
      }
    };

    const handleDeleteInput = () => {
      setInput(input.substring(0, input.length-1))
    }
  const handleClear = () => {
    setInput("");
    setResult(null);
  };

  return (
      <View style={styles.container}>
        <View style={styles.calculatorBox}>
          <View style={styles.containerResult}>
            <Text style={styles.result}>
              {input || "0"}
            </Text>
          </View>
          <View>
            <View style={styles.buttonFunctions}>
              <SimpleButton textButton={"="} style={styles.buttonNumber} changeFunction={handleShowResult}/>
              <SimpleButton textButton={"+"} style={styles.buttonNumber} changeFunction={()=>handleClickButton("+")}/>
              <SimpleButton textButton={"-"} style={styles.buttonNumber} changeFunction={()=>handleClickButton("-")}/>
              <SimpleButton textButton={"x"} style={styles.buttonNumber} changeFunction={()=>handleClickButton("*")}/>
              <SimpleButton textButton={"<="} style={styles.buttonNumber} changeFunction={handleDeleteInput} />
            </View>
              <View style={styles.buttonsContainer}>
                {numbers.map((value) =>{
                  if (typeof value === "string" && value === "C"){
                    return (
                        <SimpleButton changeFunction={handleClear} style={styles.buttonNumber} textButton={value} key={value}/>
                    )
                  }else{
                    return (
                        <SimpleButton changeFunction={()=>handleClickButton(value)} style={styles.buttonNumber} textButton={value} key={value}/>
                    )
                  }
                } )}
              </View>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatorBox: {
    borderStyle: "solid",
    borderColor: "#696767",
    borderRadius: 10,
    width: 312,
    height: 400,
    backgroundColor: "#F3F3F3",
    padding: 10,
  },
  containerResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  result: {
    alignSelf: "flex-end",
    marginTop: "auto",
    fontSize: 50,
  },
  buttonNumber: {
    width: 70,
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#e0e0e0",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: 240,
  },
  buttonFunctions: {
    position: "absolute",
    right: -4,
    flexDirection: "column-reverse",
    justifyContent: "flex-end",
  }
});

