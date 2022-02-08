import React from 'react'
import { Box, Typography } from '@iotabots/components'

interface GameInfoProps {
  image: string
  title: string
  subtitle: string
}

const GameInfo: React.FC<GameInfoProps> = (props) => {
  const { image, title, subtitle } = props
  return (
    <Box>
      <Box sx={{ 
        height: '200px',
        width: '100%',
        background: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }} />
      <Typography variant='h1'>{title}</Typography>
      <Typography variant='subtitle1'>{subtitle}</Typography>
    </Box>
  );
};

export default GameInfo;
