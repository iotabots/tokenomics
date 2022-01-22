import React from "react";
import BaseLayout from "../components/BaseLayout";
import { Box, Container, Typography } from "@iotabots/components";
import { useWeb3React } from '@web3-react/core'
import Connector from '../components/Connector/Connector'
import ERC20Balance from '../components/ERC20/ERC20Balance'

export const Home = ({ projects }): JSX.Element => (
  <BaseLayout>
    <Box py={8} bgcolor="background.default">
    <Container maxWidth='md'>
        <Typography variant="h3" align="center" sx={{ pb: 6 }}>
          Tokenomics
        </Typography>
        <Typography variant="body2" align="center" sx={{ pb: 6 }}>
          Attention: This a very early test and we will reset the chain somethimes so you will start again with 0 BENERGY.
        </Typography>
        <Typography variant="body1" align="center" sx={{ pb: 6 }}>
          You can mint 100 BENERGY with an IOTABOT each day.
        </Typography>
        <Connector />
        <Typography variant="body2" align="center" sx={{ pb: 6 }}>
        <ERC20Balance />
        </Typography>
        <Typography variant="body1" align="center" sx={{ pb: 6 }}>
          This is just for testing! Have fun!
        </Typography>
      </Container>
    </Box>
  </BaseLayout>
);

export default Home;
