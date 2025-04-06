"use client";

import zIndex from "@mui/material/styles/zIndex";
import { motion } from "framer-motion";
import styled from "styled-components";

interface CakeProps {
  isCut: boolean;
}

const CakeWrapper = styled.div`
  position: relative;
`;

const CakeContainer = styled(motion.div)`
  position: relative;
  transform-origin: center bottom;
  z-index: 99;
`;

const CakePlate = styled.div`
  width: 320px;
  height: 40px;
  background-color: #e0e0e0;
  border-radius: 9999px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CakeBody = styled.div`
  position: relative;
  width: 256px;
  margin: 0 auto;
`;

const CakeLayerBottom = styled.div`
  width: 256px;
  height: 96px;
  background-color: #f8bbd0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1)
    );
    border-radius: inherit;
  }
`;

const CakeLayerMiddle = styled.div`
  width: 224px;
  height: 80px;
  background-color: #f48fb1;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0 auto;
  margin-top: -8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1)
    );
    border-radius: inherit;
  }
`;

const CakeLayerTop = styled.div`
  width: 192px;
  height: 64px;
  background-color: #f06292;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 0 auto;
  margin-top: -8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1)
    );
    border-radius: inherit;
  }
`;

const Frosting = styled.div`
  position: absolute;
  top: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 208px;
  height: 24px;
`;

const FrostingBall = styled.div`
  position: absolute;
  width: 32px;
  height: 32px;
  background-color: white;
  border-radius: 50%;
`;

const Decoration = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

const CakeSlice = styled(motion.div)`
  position: absolute;
  left: 75%;
  top: 25%;
  width: 64px;
  height: 96px;
`;

const SliceTop = styled.div`
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid #f48fb1;
`;

const SliceBottom = styled.div`
  width: 64px;
  height: 40px;
  background-color: #f8bbd0;
  margin-top: -4px;
`;

const middleDecorations = Array.from({ length: 8 }).map((_, i) => ({
  top: `${90 + Math.random() * 30}px`, // Randomized separately for the middle layer
  left: `${20 + i * 30}px`, // Keeps the same left positioning
  backgroundColor: ["#FF5E5B", "#D8D8F6", "#FFED66"][i % 3],
}));

const bottomDecorations = Array.from({ length: 7 }).map((_, i) => ({
  top: `${20 + Math.random() * 30}px`, // Randomized separately for the bottom layer
  left: `${30 + i * 30}px`, // Keeps the same left positioning
  backgroundColor: ["#d9ff5b",  "#ff66f7"][i % 2],
}));

const topDecorations = Array.from({ length: 8 }).map((_, i) => ({
  top: `${180 + Math.random() * 30}px`, // Randomized separately for the middle layer
  left: `${20 + i * 30}px`, // Keeps the same left positioning
  backgroundColor: ["#FF5E5B", "#D8D8F6","#56549d", "#FFED66"][i % 4],
  zIndex: 99
}));

export default function Cake({ isCut }: CakeProps) {
  return (
    <CakeWrapper>
      <CakeContainer
        animate={{
          rotateZ: isCut ? [0, -2, 2, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Cake plate */}

        {/* Cake layers */}
        <CakeBody>
          {/* Bottom layer */}

          <CakeLayerTop />
          {topDecorations.map((style, i) => (
            <Decoration key={`top-${i}`} style={style} />
          ))}
          {/* Middle layer */}
          <CakeLayerMiddle />
          {/* {Array.from({ length: 8 }).map((_, i) => (
            <Decoration
            key={i}
            style={{
              backgroundColor: ["#FF5E5B", "#D8D8F6", "#FFED66"][i % 3],
              top: `${90 + Math.random() * 30}px`,
              left: `${20 + i * 30}px`,
            }}
            />
          ))} */}
          {middleDecorations.map((style, i) => (
            <Decoration key={`middle-${i}`} style={style} />
          ))}

          {/* Top layer */}

          <CakeLayerBottom />
          {/* Frosting */}
          <Frosting>
            {Array.from({ length: 13 }).map((_, i) => (
              <FrostingBall
                key={i}
                style={{ left: `${i * 4}px`, top: "0px" }}
              />
            ))}
          </Frosting>

          {/* Decorations */}
          {/* {Array.from({ length: 8 }).map((_, i) => (
            <Decoration
            key={i}
            style={{
              backgroundColor: ["#FF5E5B", "#D8D8F6", "#FFED66"][i % 3],
              top: `${20 + Math.random() * 30}px`,
              left: `${20 + i * 30}px`,
            }}
            />
          ))} */}
          {bottomDecorations.map((style, i) => (
            <Decoration key={`bottom-${i}`} style={style} />
          ))}
        </CakeBody>
        <CakePlate />
      </CakeContainer>

      {isCut && (
        <CakeSlice
          initial={{ rotate: 0, x: 0, y: 0 }}
          animate={{ rotate: 15, x: 60, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <SliceTop />
          <SliceBottom />
        </CakeSlice>
      )}
    </CakeWrapper>
  );
}
