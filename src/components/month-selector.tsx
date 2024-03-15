import { StyleSheet, TouchableOpacity, View } from "react-native"
import LeftIcon from "../svgs/leftIcon"
import RightIcon from "../svgs/rightIcon"

type Props = {
  onLeftPress: () => void;
  onRightPress: () => void;
}

const MonthSelector: React.FC<Props> = ({ onLeftPress, onRightPress }) => 
  <View style={styles.container}>
    <TouchableOpacity onPress={onLeftPress} style={styles.button}>
      <LeftIcon width={10} height={19} /> 
    </TouchableOpacity>
    <TouchableOpacity onPress={onRightPress} style={styles.button}>
      <RightIcon width={10} height={19} /> 
    </TouchableOpacity>
  </View>

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 8
  },
  button: {
    paddingHorizontal: 10, 
    justifyContent: "flex-end",
  }
})

export default MonthSelector;