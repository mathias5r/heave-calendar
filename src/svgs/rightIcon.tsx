import { Path, Svg, SvgProps } from "react-native-svg";

type Props = { color?: string } & SvgProps;

const RightIcon: React.FC<Props> = ({ color = "white", width = "6", height = "9"})  => 
  <Svg width={width} height={height} viewBox="0 0 6 9" fill="none">
    <Path d="M1.48291 8.21362L5.23291 4.53471L1.48291 0.855804" stroke={color} stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>

export default RightIcon;