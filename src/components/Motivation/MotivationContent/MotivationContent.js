import { useEffect, useState } from "react";
import { Button, Spinner, Flex } from "@chakra-ui/react";

import fetchMotivationData from "../../../lib/fetchMotivationData";

import "./MotivationContent.css";

export default function MotivationContent() {
  const [motivation, setMotivation] = useState({});
  const [waitingFetch, setWaitingFetch] = useState(false);

  const getData = async () => {
    setWaitingFetch(true);
    const data = await fetchMotivationData();
    if (motivation.id === data.slip.id) {
      getData();
      return;
    }
    setMotivation(data.slip);
    setWaitingFetch(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="motivationContent">
      <Flex
        className="contentBox"
        direction="column"
        w="300px"
        borderRadius="20px"
        backgroundColor="rgba(255, 255, 255, 0.8)"
      >
        <h3 className="contentTitle">
          {waitingFetch ? <Spinner /> : motivation.advice}
        </h3>
        <Button
          className="contentButton"
          background="linear-gradient(to right, #898608, #af1f9d)"
          color="white"
          borderRadius="10px"
          onClick={getData}
        >
          Generate Motivation
        </Button>
      </Flex>
    </div>
  );
}
