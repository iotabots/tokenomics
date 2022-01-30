import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Box, Button, Container, Typography } from '@iotabots/components'
import Web3 from 'web3'
import BaseLayout from '../components/BaseLayout'
import Snake from '../components/Game/Snake'
import { AUTH_ADR } from '../config'
import { useRouter } from 'next/router'

const AUTH_ABI = require('../contracts/auth.json')

export const Metaverse: React.FC = () => {
  const { account, library, chainId } = useWeb3React()
  const router = useRouter()

  const [isLoggedIn, SetIsLoggedIn] = React.useState(false)
  const [contract, setContract] = React.useState(undefined)

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider)

    const _contract = new web3.eth.Contract(AUTH_ABI, AUTH_ADR)
    let data

    try {
      data = await _contract.methods.checkIsUserLogged(_account).call()
      console.log('data', data)
      setContract(_contract)
      SetIsLoggedIn(data[0])
    } catch (e) {
      console.log('init error', e)
      return null
    }
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
      Snake()
    }
    return null
  }, [account, library, chainId])
  return (
    <BaseLayout>
      <Box py={8} bgcolor='background.default'>
        <Container maxWidth='md'>
          <Typography variant='h3' sx={{ pb: 6 }}>
            Game
          </Typography>

          <Typography variant='h6' sx={{ pb: 6 }}>
            {isLoggedIn
              ? 'You are logged In :-)'
              : 'Your are Not logged in :-('}
          </Typography>
          <div id="game"></div>
        </Container>
      </Box>
    </BaseLayout>
  )
}

export default Metaverse
