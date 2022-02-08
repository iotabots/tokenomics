import React, { useState, useMemo } from 'react'

import Grid from '../components/Pixel/Grid'
import ColorPicker from '../components/Pixel/ColorPicker'

import {
  BaseLayout,
  Container,
  Section,
  SectionHeader,
  Typography,
} from '@iotabots/components'
const offCell = {
  on: false,
  color: '#000000',
}
const initialCells = Array.from({ length: 1024 }, () => offCell)

export const Pixelbots = (any) => {
  const [cells, setCells] = useState(initialCells)
  const [currentColor, setCurrentColor] = useState('#56BC58')
  const colorSwatch = useMemo(
    () => [
      ...Array.from(new Set(cells.filter((cell) => cell.on).map((cell) => cell.color))),
    ],
    [cells]
  )
  const chatString = useMemo(
    () => cells.map((cell) => cell.color.slice(1)).join(','),
    [cells]
  )

  return (
    <>
      <Section>
        <SectionHeader title='Pixelbots' subtitle='Alpha Testing Live Now!' />
        <Container maxWidth='md'>
          <Typography variant='body2' align='center' sx={{ pb: 6 }}>
            Attention: This a very early test and we will reset the chain
            somethimes.
          </Typography>
          <Typography variant='body1' align='center' sx={{ pb: 6 }}>
            Be creative!
          </Typography>
        </Container>
        <Container maxWidth='md'>
          <div>
            <ColorPicker
              currentColor={currentColor}
              onSetColor={setCurrentColor}
            />
            <div style={{ display: 'flex' }}>
              {colorSwatch.map((color) => (
                <div
                  key={color}
                  onClick={() => setCurrentColor(color)}
                  style={{
                    background: color,
                    margin: '0.5rem',
                    padding: 0,
                    width: '25px',
                    height: '25px',
                    outline: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                />
              ))}
            </div>
            <Grid
              cells={cells}
              setCells={setCells}
              currentColor={currentColor}
            />
            <p
              style={{
                maxWidth: '50%',
                fontFamily: 'monospace',
                wordWrap: 'break-word',
              }}
            >
              {/* eslint-disable-next-line */}
              {chatString}
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default Pixelbots
