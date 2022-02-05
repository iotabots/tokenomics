import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { Box, Typography } from '@iotabots/components'

import { RequestTokenButton } from './RequestTokenButton'
import { Balance } from './Balance'
import { TotalSupply } from './TotalSupply'
import { AmountOfBots } from './AmountOfBots'
import { MintTimer } from './MintTimer'
const { BOLTS_ADR } = require('../../config')

declare global {
  interface library {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    provider: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }
}

const ERC20Balance: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { connector, library, account, deactivate, active, error } = context

  const [canMint, SetCanMint] = React.useState(false)
  // handle logic to recognize the connector currently being activated
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [activatingConnector, setActivatingConnector] = React.useState<any>()
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Balance />
      <br />
      <AmountOfBots />
      <br />
      { canMint 
      ? <RequestTokenButton />
      : <MintTimer />
    }
      <Typography variant='body1' align='center' sx={{ pb: 6 }}>
        This is just for testing! Have fun!
      </Typography>
      <Typography variant='h4' align='center' sx={{ pt: 4 }}>
        BOLT Token Information
      </Typography>
      <Typography variant="body1" align="center" sx={{ pb: 6 }}>
          Contract Address: {BOLTS_ADR}
        </Typography>
      <TotalSupply />
    </Box>
  )
}

export default ERC20Balance
