import React, { useCallback } from "react";
import { View } from "react-native";
import Settings from "../../dto/Settings";
import NumberSettingsInput from "./NumberSettingsInput";
import styles from "./styles";

interface Props {
  settings: Settings;

  onChange: (settings: Settings) => void;

  isValidHour: (hour: number) => boolean;
  isValidFrequency: (frequency: number) => boolean;
}

export default ({
  settings,
  onChange,
  isValidHour,
  isValidFrequency,
}: Props) => {
  const onValueChange = useCallback(
    (changes: { startHour?: number; endHour?: number; frequency?: number }) =>
      onChange({ ...settings, ...changes }),
    [settings, onChange],
  );

  return (
    <View style={styles.container}>
      <NumberSettingsInput
        label="Annoy from hour"
        value={settings.startHour}
        validate={isValidHour}
        onChange={startHour => onValueChange({ startHour })}
      />
      <NumberSettingsInput
        label="Annoy till hour"
        value={settings.endHour}
        validate={isValidHour}
        onChange={endHour => onValueChange({ endHour })}
      />
      <NumberSettingsInput
        label="Annoys frequency"
        value={settings.frequency}
        validate={isValidFrequency}
        onChange={frequency => onValueChange({ frequency })}
      />
    </View>
  );
};
