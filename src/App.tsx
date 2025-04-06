"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Typography } from "@mui/material";
import styled from "styled-components";
import Cake from "./components/Cake";
import Candles from "./components/Candles";
import Gift from "./components/Gift";
import Card from "./components/Card";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8e1eb, #e6d7f2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

const Title = styled(motion.div)`
  margin-bottom: 32px;
`;

const StyledTitle = styled(Typography)`
  font-weight: bold;
  color: #d81b60;
  font-size: 2.5rem;

  @media (min-width: 600px) {
    font-size: 3.75rem;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-top: 56px;
`;

const CandlesContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
`;

const CakeContainer = styled(motion.div)``;

const ButtonContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

const BlowButton = styled(Button)`
  && {
    background-color: #2196f3;
    color: white;
    font-weight: bold;
    padding: 12px 24px;
    border-radius: 28px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #1976d2;
    }
  }
`;

const GiftContainer = styled(motion.div)`
  margin-top: 32px;
`;

const CardOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  padding: 16px;
`;

export default function App() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [isBlowing, setIsBlowing] = useState(false);

  const birthdaySongRef = useRef<HTMLAudioElement>(null);
  const celebrationSongRef = useRef<HTMLAudioElement>(null);

  // Function to handle microphone blowing detection
  const handleBlowDetection = () => {
    // For demo purposes, we'll use a button click instead of actual mic detection
    setIsBlowing(true);
    setTimeout(() => {
      setCandlesBlown(true);
      setTimeout(() => {
        setCakeCut(true);
      }, 1500);
    }, 1000);
  };

  // Handle gift click
  const handleGiftClick = () => {
    if (cakeCut && !giftOpened) {
      setGiftOpened(true);
      if (birthdaySongRef.current) birthdaySongRef.current.pause();
      if (celebrationSongRef.current) celebrationSongRef.current.play();
      setTimeout(() => {
        setShowCard(true);
      }, 2000);
    }
  };

  // Play birthday song on load
  // useEffect(() => {
  //   if (birthdaySongRef.current) birthdaySongRef.current.play();
  // }, []);
  useEffect(() => {
    if (birthdaySongRef.current) {
      console.log(
        "Birthday Song ReadyState:",
        birthdaySongRef.current.readyState
      );
      birthdaySongRef.current
        .play()
        .then(() => console.log("Birthday song is playing"))
        .catch((err) => console.error("Error playing birthday song:", err));
    }
  }, []);

  return (
    <PageContainer>
      <audio ref={birthdaySongRef} src="/birthday-song.mp3" preload="auto" />
      <audio
        ref={celebrationSongRef}
        src="/celebration-song.mp3"
        preload="auto"
      />

      <Title
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <StyledTitle variant="h1">Happy Birthday!</StyledTitle>
      </Title>

      <ContentContainer>
        {!candlesBlown && (
          <CandlesContainer
            animate={{ y: isBlowing ? [0, -5, 0, -3, 0] : 0 }}
            transition={{
              repeat: isBlowing ? Number.POSITIVE_INFINITY : 0,
              duration: 0.3,
            }}
          >
            <Candles />
          </CandlesContainer>
        )}

        <CakeContainer
          animate={{
            scale: cakeCut ? 0.9 : 1,
            y: cakeCut ? 20 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <Cake isCut={cakeCut} />
        </CakeContainer>

        {!candlesBlown && (
          <ButtonContainer>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <BlowButton variant="contained" onClick={handleBlowDetection}>
                Blow Candles
              </BlowButton>
            </motion.div>
          </ButtonContainer>
        )}
      </ContentContainer>

      <AnimatePresence>
        {cakeCut && !giftOpened && (
          <GiftContainer
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <Gift onClick={handleGiftClick} />
          </GiftContainer>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCard && (
          <CardOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCard(false)}
          >
            <Card />
          </CardOverlay>
        )}
      </AnimatePresence>
    </PageContainer>
  );
}
