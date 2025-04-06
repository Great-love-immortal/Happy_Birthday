"use client"

import { motion } from "framer-motion"
import { Typography, Paper } from "@mui/material"
import styled from "styled-components"

const CardContainer = styled(motion.div)`
  max-width: 400px;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`

const CardContent = styled.div`
  padding: 24px;
  background: linear-gradient(to bottom right, #f8bbd0, #e1bee7);
`

const CardInner = styled(motion.div)``

const CardTitle = styled(Typography)`
  && {
    font-size: 1.875rem;
    font-weight: bold;
    text-align: center;
    color: #d81b60;
    margin-bottom: 16px;
  }
`

const ImageContainer = styled(Paper)`
  && {
    margin-bottom: 24px;
    padding: 8px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

// const CardImage = styled.img`
//   width: 100%;
//   height: 256px;
//   object-fit: cover;
//   border-radius: 4px;
// `

const MessageContainer = styled.div`
  text-align: center;
  color: #424242;
`

const MessageParagraph = styled(Typography)`
  && {
    margin-bottom: 16px;
  }
`

const SignatureFrom = styled(Typography)`
  && {
    font-weight: bold;
  }
`

const SignatureName = styled(Typography)``

const EmojiContainer = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`

const EmojiWrapper = styled(motion.div)`
  display: inline-block;
`

const Emoji = styled.span`
  font-size: 2.5rem;
`
const StyledTitle = styled(Typography)`
  font-weight: bold;
  color: #f3654c;
  font-size: 1.5rem;

  @media (min-width: 600px) {
    font-size: 3.75rem;
  }
`;

export default function Card() {
  return (
    <CardContainer
      initial={{ rotateY: 180, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      onClick={(e) => e.stopPropagation()}
    >
      <CardContent>
        <CardInner
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <CardTitle variant="h2">Happy Birthday!</CardTitle>

          <ImageContainer elevation={3}>
         
            <StyledTitle variant="h5">Garima!!</StyledTitle>
          </ImageContainer>

          <MessageContainer>
            <MessageParagraph variant="body1">
              Wishing you a day filled with happiness and a year filled with joy!
            </MessageParagraph>
            <MessageParagraph variant="body1">
              May all your dreams and wishes come true, and may you feel this happiness all year round.
            </MessageParagraph>
            <SignatureFrom variant="body1">With love.</SignatureFrom>
            <SignatureName variant="body1"></SignatureName>
          </MessageContainer>

          <EmojiContainer>
            <EmojiWrapper
              animate={{
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            >
              <Emoji>🎉</Emoji>
            </EmojiWrapper>
          </EmojiContainer>
        </CardInner>
      </CardContent>
    </CardContainer>
  )
}

