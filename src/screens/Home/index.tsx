import { StyleSheet, View } from "react-native"
import colors from "../../constants/colors";
import Calendar from "../../components/calendar";

const Home: React.FC = () => {
  return <View style={styles.container}>
    <Calendar />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 23.5,
    backgroundColor: colors.primaryBackground
  }
})

export default Home;