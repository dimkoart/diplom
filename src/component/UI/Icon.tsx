import React from "react";
import IcoMoon from "react-icomoon";
import iconSet from "../icon.json";
interface Props {
  icon?: string | undefined;
  color?: string | undefined;
  size?: number;
}
const Icon = ({ icon, color, size }: any) => {
  return (
    <IcoMoon
      iconSet={iconSet}
      icon={icon}
      color={color || color.primary}
      size={size || 24}
    />
  );
};

export default Icon;
