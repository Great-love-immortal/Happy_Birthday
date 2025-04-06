"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const CandlesWrapper = styled.div`
  position: relative;
  height: 128px;
  width: 128px;
`;

const CandleWrapper = styled.div`
  position: absolute;
  top: -60%;
  z-index: -1;
`;

const Candle = styled.div<{ color: string }>`
  width: 16px;
  height: 80px;
  background-color: ${(props) => props.color};
  border-radius: 2px;
  margin: 0 auto;
`;

const FlameWrapper = styled(motion.div)`
  position: relative;
  margin-top: -20px;
  margin-left: auto;
  margin-right: auto;
  width: 24px;
  height: 40px;
`;

const FlameBase = styled.div`
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%) rotate(180deg);
  width: 8px;
  height: 16px;
  background-color: #ffb74d;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const FlameMiddle = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 16px;
  height: 24px;
  background-color: #ffeb3b;
  border-radius: 50%;
`;

const FlameTop = styled.div`
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 16px;
  background-color: white;
  border-radius: 50%;
  opacity: 0.7;
`;

export default function Candles() {
  // Create an array of candle positions
  const candlePositions = [
    { x: -40, y: 0, color: "#2196f3", delay: 0.1 }, // blue
    { x: -20, y: -5, color: "#e91e63", delay: 0.2 }, // pink
    { x: 0, y: -10, color: "#ffc107", delay: 0.3 }, // yellow
    { x: 20, y: -5, color: "#4caf50", delay: 0.4 }, // green
    { x: 40, y: 0, color: "#9c27b0", delay: 0.5 }, // purple
  ];

  return (
    <CandlesWrapper>
      {candlePositions.map((candle, index) => (
        <CandleWrapper
          key={index}
          style={{
            transform: `translateX(${candle.x}px) translateY(${candle.y}px)`,
          }}
        >
          <FlameWrapper
            animate={{
              scaleY: [1, 1.1, 0.9, 1.2, 1],
              rotate: [0, 2, 2, 1, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 0.8,
              delay: candle.delay,
            }}
          >
            <FlameBase />
            <FlameMiddle />
            <FlameTop />
          </FlameWrapper>
          {/* Candle */}
          <Candle color={candle.color} />

          {/* Flame */}
          
        </CandleWrapper>
      ))}
    </CandlesWrapper>
  );
}
