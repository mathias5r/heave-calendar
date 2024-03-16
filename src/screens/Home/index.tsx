import { StyleSheet, Text, View } from "react-native"
import colors from "../../constants/colors";
import Calendar from "../../components/calendar";

const Home: React.FC = () => 
  <View style={styles.container}>
    <Text maxFontSizeMultiplier={1.2} style={styles.title}>Calendar</Text>
    <Calendar onDateSelected={(date: Date) => console.log(date)} />
  </View>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 23.5,
    backgroundColor: colors.primaryBackground
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    fontSize: 32,
    paddingBottom: 24
  }
})

export default Home;