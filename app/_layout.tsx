import { Stack } from "expo-router";
import {ReduxProvider} from "@/app/redux/provicder";

export default function RootLayout() {
  return (
      <ReduxProvider>
          <Stack>
              <Stack.Screen name="(tab)" options={{ headerShown: false }} />
              <Stack.Screen name="index" options={{ headerShown: false }} />
              <Stack.Screen name="login" options={{ headerShown: false }} />
          </Stack>
      </ReduxProvider>
  )
}

