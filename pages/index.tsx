import React from "react";
import BaseLayout from "../components/BaseLayout";
import { Box, Container, Typography } from "@iotabots/components";
import { useWeb3React } from '@web3-react/core'
import Connector from '../components/Connector/Connector'

export const Home = ({ projects }): JSX.Element => (
  <BaseLayout>
    <Box py={8} bgcolor="background.default">
      <Container>
        <Typography variant="h3" align="center" sx={{ pb: 6 }}>
          Tokenomics
        </Typography>
        <Connector />
      </Container>
    </Box>
  </BaseLayout>
);

export default Home;
