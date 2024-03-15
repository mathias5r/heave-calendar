import { Path, Svg, SvgProps } from "react-native-svg"

type Props = { color?: string } & SvgProps;

const LeftIcon: React.FC<Props> = ({ color = "white", width = "6", height = "9"}) => 
  <Svg width={width} height={height} viewBox="0 0 6 9" fill="none">
    <Path d="M5.23291 1.14014L1.48291 4.81905L5.23291 8.49796" stroke={color} stroke-linecap="round" stroke-linejoin="round" />
  </Svg>

export default LeftIcon;