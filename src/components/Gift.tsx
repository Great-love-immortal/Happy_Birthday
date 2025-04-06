"use client"

import { motion } from "framer-motion"
import styled from "styled-components"

interface GiftProps {
  onClick: () => void
}

const GiftWrapper = styled(motion.div)`
  cursor: pointer;
`

const GiftBoxContainer = styled.div`
  position: relative;
`

const BoxBase = styled.div`
  width: 160px;
  height: 160px;
  background: linear-gradient(to bottom right, #9c27b0, #6a1b9a);
  border-radius: 8px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
`

const BoxLid = styled(motion.div)`
  position: absolute;
  top: -20px;
  left: 0;
  width: 160px;
  height: 40px;
  background: linear-gradient(to bottom right, #ab47bc, #8e24aa);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

const VerticalRibbon = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 32px;
  height: 160px;
  background-color: #e91e63;
  z-index: 10;
`

const HorizontalRibbon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 160px;
  height: 32px;
  background-color: #e91e63;
  z-index: 20;
`

const RibbonKnot = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -16px;
  width: 48px;
  height: 48px;
  z-index: 30;
`

const KnotPart = styled.div`
  position: absolute;
  width: 48px;
  height: 32px;
  background-color: #c2185b;
  border-radius: 50%;
`

const KnotPartOne = styled(KnotPart)`
  transform: rotate(45deg);
`

const KnotPartTwo = styled(KnotPart)`
  transform: rotate(-45deg);
`

const RibbonEndOne = styled(motion.div)`
  position: absolute;
  top: -16px;
  left: 60%;
  width: 16px;
  height: 64px;
  background-color: #c2185b;
  border-radius: 50%;
  transform-origin: bottom;
`

const RibbonEndTwo = styled(motion.div)`
  position: absolute;
  top: -32px;
  left: 30%;
  width: 16px;
  height: 80px;
  background-color: #c2185b;
  border-radius: 50%;
  transform-origin: bottom;
`

const GiftText = styled(motion.p)`
  text-align: center;
  margin-top: 16px;
  font-size: 18px;
  font-weight: bold;
  color: #4a148c;
`

export default function Gift({ onClick }: GiftProps) {
  return (
    <GiftWrapper onClick={onClick} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      {/* Gift box */}
      <GiftBoxContainer>
        {/* Box base */}
        <BoxBase />

        {/* Box lid */}
        <BoxLid
          animate={{
            y: [0, -2, 0, -1, 0],
            rotate: [0, 0.5, 0, -0.5, 0],
          }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        />

        {/* Vertical ribbon */}
        <VerticalRibbon />

        {/* Horizontal ribbon */}
        <HorizontalRibbon />

        {/* Ribbon knot */}
        <RibbonKnot>
          <KnotPartOne />
          <KnotPartTwo />
        </RibbonKnot>

        {/* Ribbon ends */}
        <RibbonEndOne
          animate={{ rotate: [10, 15, 10] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        />
        <RibbonEndTwo
          animate={{ rotate: [-10, -15, -10] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2, delay: 0.5 }}
        />
      </GiftBoxContainer>

      <GiftText animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
        Click to open your gift!
      </GiftText>
    </GiftWrapper>
  )
}

