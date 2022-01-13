import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

import style from "../style/style";

export default function Kalkulator() {
  const [screenCalc, setScreenCalc] = useState("");

  const calculation = () => {
    setScreenCalc(eval(screenCalc).toString());
    console.log(eval(screenCalc));
  };

  const buttonClick = (number) => {
    console.log(number);

    if (number == "=") {
      return calculation();
    }

    setScreenCalc(screenCalc + number);
  };

  const operationClick = (operation) => {
    let operations = ["DEL", "+", "-", "*", "/"];
    console.log(operation);

    if (operation == "AC") {
      setScreenCalc("");
      return;
    }

    if (operation == "DEL") {
      return setScreenCalc(
        screenCalc.toString().substring(0, screenCalc.length - 1)
      );
    }

    setScreenCalc(screenCalc + operation);
  };
  return (
    <View style={style.container}>
      <View style={style.screen}>
        <TextInput
          style={style.result}
          variant="filled"
          value={screenCalc}
          disabled
        />
      </View>

      <View style={style.contain}>
        <View style={style.row}>
          <View style={style.wrapBtn}>
            <Pressable
              style={style.btnOperator}
              onPress={() => operationClick("AC")}
            >
              <Text style={style.text}>AC</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable
              style={style.btnOperator}
              onPress={() => operationClick("DEL")}
            >
              <Text style={style.text}>DEL</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable
              style={style.btnOperator}
              onPress={() => operationClick("%")}
            >
              <Text style={style.text}>%</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable
              style={style.btnOperator}
              onPress={() => operationClick("/")}
            >
              <Text style={style.text}>&divide;</Text>
            </Pressable>
          </View>
        </View>

        <View style={style.row}>
          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(7)}>
              <Text style={style.textNumber}>7</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(8)}>
              <Text style={style.textNumber}>8</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(9)}>
              <Text style={style.textNumber}>9</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable
              style={style.btnOperator}
              onPress={() => operationClick("*")}
            >
              <Text style={style.text}>&times;</Text>
            </Pressable>
          </View>
        </View>

        <View style={style.row}>
          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(4)}>
              <Text style={style.textNumber}>4</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(5)}>
              <Text style={style.textNumber}>5</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(6)}>
              <Text style={style.textNumber}>6</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable
              style={style.btnOperator}
              onPress={() => operationClick("-")}
            >
              <Text style={style.text}>-</Text>
            </Pressable>
          </View>
        </View>

        <View style={style.row}>
          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(1)}>
              <Text style={style.textNumber}>1</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(2)}>
              <Text style={style.textNumber}>2</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(3)}>
              <Text style={style.textNumber}>3</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable
              style={style.btnOperator}
              onPress={() => operationClick("+")}
            >
              <Text style={style.text}>+</Text>
            </Pressable>
          </View>
        </View>

        <View style={style.row}>
          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(0)}>
              <Text style={style.textNumber}>0</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick("00")}>
              <Text style={style.textNumber}>00</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable style={style.button} onPress={() => buttonClick(".")}>
              <Text style={style.textNumber}>.</Text>
            </Pressable>
          </View>

          <View style={style.wrapBtn}>
            <Pressable
              style={style.btnOperator}
              onPress={() => buttonClick("=")}
            >
              <Text style={style.text}>=</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
