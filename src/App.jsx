import { Image } from '@chakra-ui/react'
import { Routes, Route } from "react-router-dom";
import { LaunchList } from "./components/LaunchList"
import { LaunchDetail } from "./components/LaunchDetail"
import { RocketDetail } from './components/RocketDetail';
import logo from "./assets/SpaceX-Logo.png";

export function App() {
  return (
    <>
      <Image m={4} src={logo} width={300} alt="logo spaceX" />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetail />} />
        <Route path="rockets/:launchId" element={<RocketDetail />} />
      </Routes>
    </>
  );
}