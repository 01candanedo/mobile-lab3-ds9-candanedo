import { useController } from "react-hook-form";
import { TextInput } from "react-native";

export default function InputForm({ name, control, rules, style, secureTextE = false, pholdertitle, pholdercolor, maxl, ktype = 'default' }) {
    const { field } = useController({
        control,
        defaultValue: '',
        name,
        rules
    });
    return (
        <TextInput
            style={style}
            placeholder={pholdertitle}
            maxLength={maxl}
            keyboardType={ktype}
            placeholderTextColor={pholdercolor}
            secureTextEntry={secureTextE}
            value={field.value}
            onChangeText={field.onChange}
        >

        </TextInput>
    );
}