import { Container } from "@chakra-ui/react";

import MotivationContent from "./MotivationContent/MotivationContent";

import "./Motivation.css";

export default function Motivation() {
  return (
    <Container maxW="1280px">
      <h1 className="motivationTitle">Motivation Quote Generator</h1>
      <MotivationContent />
    </Container>
  );
}
