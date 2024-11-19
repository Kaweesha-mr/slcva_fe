import useColorMode from "@/app/hooks/useColorMode";
import {Switch} from "@nextui-org/react";
import { MoonIcon } from "../../../public/images/DarkMode/MoonIcon";
import { SunIcon } from "../../../public/images/DarkMode/SunIcon";
SunIcon


const DarkModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <li>
        <Switch
      defaultSelected
      size="lg"
      color="default"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onClick={() => {
        if (typeof setColorMode === "function") {
          setColorMode(colorMode === "light" ? "dark" : "light");
        }
      }}
    />


    </li>
  );
};

export default DarkModeSwitcher;
