import { Linking, Text, View } from "react-native";
import { styles } from "./styles";

interface EmptyMessageProps {
    text: string;
    link?: string;
}

const EmptyMessage = ({ text, link }: EmptyMessageProps) => {
    const onPressLink = (url: string) => {
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    Linking.openURL(url);
                }
            })
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}{' '}
                {link && (
                    <Text style={styles.link} onPress={() => onPressLink(link)}>
                        {link}
                    </Text>
                )}
            </Text>
        </View>
    )
}

export default EmptyMessage;
