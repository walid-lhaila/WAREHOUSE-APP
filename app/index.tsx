import {Text, TouchableOpacity} from "react-native";
import {useRouter} from "expo-router";

export default function Index() {
    const router = useRouter()
  return (
      <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={{ paddingTop: 100}}>Sign In</Text>
      </TouchableOpacity>
  );
}
