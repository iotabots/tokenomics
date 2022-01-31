import React from 'react'
import {
  BaseLayout,
  Container,
  Section,
  SectionHeader,
  Typography,
} from '@iotabots/components'
import ERC20Balance from '../components/ERC20/ERC20Balance'

export const Home = ({ projects }): JSX.Element => (
  <BaseLayout>
    <Section>
      <SectionHeader title='Tokenomics' subtitle='Alpha Testing Live Now!' />
      <Container maxWidth='md'>
        <Typography variant='body2' align='center' sx={{ pb: 6 }}>
          Attention: This a very early test and we will reset the chain
          somethimes so you will start again with 0 BOLTS.
        </Typography>
        <Typography variant='body1' align='center' sx={{ pb: 6 }}>
          You can mint 100 BOLTS with your IOTABOT each day.
        </Typography>
        <ERC20Balance />
      </Container>
    </Section>
  </BaseLayout>
)

export default Home
