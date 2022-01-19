import React from "react";
import BaseLayout from "../components/BaseLayout";
import { Box, Container, Typography } from "@iotabots/components";

export const Home = ({ projects }): JSX.Element => (
  <BaseLayout>
    <Box py={8} bgcolor="background.default">
      <Container>
        <Typography variant="h3" align="center" sx={{ pb: 6 }}>
          Profile Picture NFTs
        </Typography>
      </Container>
    </Box>
  </BaseLayout>
);

export default Home;
