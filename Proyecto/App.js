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
        <div style={styles.calculatorBox}>
          <div style={styles.containerResult}>
            <Text style={styles.result}>
              {input || "0"}
            </Text>
          </div>
          <View>
            <div style={styles.buttonFunctions}>
              <SimpleButton textButton={"<="} style={styles.buttonNumber} changeFunction={handleDeleteInput} />
              <SimpleButton textButton={"X"} style={styles.buttonNumber} changeFunction={()=>handleClickButton("*")}/>
              <SimpleButton textButton={"+"} style={styles.buttonNumber} changeFunction={()=>handleClickButton("+")}/>
              <SimpleButton textButton={"-"} style={styles.buttonNumber} changeFunction={()=>handleClickButton("-")}/>
              <SimpleButton textButton={"="} style={styles.buttonNumber} changeFunction={handleShowResult}/>
            </div>
              <div style={styles.buttonsContainer}>
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
              </div>
          </View>
        </div>
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
    width: 300,
    height: 450,
    backgroundColor: "#F3F3F3",
    padding: 10,
  },
  containerResult: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    marginBottom: 10,
    marginTop: 10
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonsContainer: {
    display:"flex",
    maxWidth: 250,
    flexWrap: "wrap",
    gap: "1"
  },
  buttonFunctions: {
    position: "absolute",
    right: 5,
    display:"flex-end",
    flexDirection: "row-reverse",
  }
});

