import { Stack } from "expo-router";

export default function RootLayout() {
    return (
        <Stack screenOptions={{ 
            headerShown: true,
            headerStyle: {
                backgroundColor: '#E8B3E4',
            }, 
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name="index" options={{ title: 'Jardim Encantado'}}/>
            <Stack.Screen name="about" options={{ title: 'Sobre'}}/>
            <Stack.Screen name="login" options={{ title: 'Login'}}/>
            <Stack.Screen name="Termos" options={{ title: 'Termos'}}/>

        </Stack>
    )
    }

    