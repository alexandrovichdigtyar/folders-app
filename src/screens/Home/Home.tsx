import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Folders and Files</Text>
      </View>
    </SafeAreaView>
  )
}

export default Home;