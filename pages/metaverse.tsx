import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Box, Button, Container, Typography } from '@iotabots/components'
import Web3 from 'web3'
import BaseLayout from '../components/BaseLayout'
import { AUTH_ADR } from '../config'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AUTH_ABI = require('../contracts/auth.json')

export const Metaverse: React.FC = () => {
  const { account, library, chainId } = useWeb3React()
  const router = useRouter()

  const [isLoggedIn, SetIsLoggedIn] = React.useState(false)
  const [contract, setContract] = React.useState(undefined)

  const checkIsUserLogged = async (event) => {
    event.preventDefault()

    try {
      console.log('checkIsUserLogged', account)
      if(contract ) {
        // @ts-ignore: Type error
        let data = await contract?.methods.checkIsUserLogged(account).call()
        
        console.log('data', data)
        SetIsLoggedIn(data[0])
      } else {
        console.log('Err: contract not defined')
      }
    } catch (e) {
      console.log('Err', e)
    }
  }
  const logoutSubmit = async (event) => {
    event.preventDefault()

    try {
      console.log('logoutSubmit')
      console.log('checkIsUserLogged', account)
      let data = await contract.methods
        .logoutUser(account)
        .send({ from: account, gasPrice: '0' })

      console.log('data', data)
      // router.reload(window.location.pathname)
      router.reload()

    } catch (e) {
      console.log('Err', e)
    }
  }

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
    }
    return null
  }, [account, library, chainId])

  function Body(props: any) {
    if (isLoggedIn) {
      return (
        <div>
          <Typography variant='h6' sx={{ pb: 6 }}>
            Secret: We are searching Web3 pioneers!
          </Typography>
          <Button
            className='btn--primary'
            color='primary'
            onClick={logoutSubmit}
          >
            logout
          </Button>
        </div>
      )
    } else {
      return (
        <div>
           <Typography variant='body1' sx={{ pb: 6 }}>
            This is the mini metaverse - you can create an account and login to the secret space. The Web-Application only interacts with an Smart Contract. Have Fun!
          </Typography>
          <Button
            className='btn--primary'
            color='primary'
            onClick={checkIsUserLogged}
          >
            Refresh
          </Button>
          <Typography variant='body1' sx={{ pb: 6 }}>
            Already have an account?
            <Link href='login'> Login here.</Link>
          </Typography>
          <Typography variant='body1' sx={{ pb: 6 }}>
            Need an account?
            <Link href='signup'> SignUp here.</Link>
          </Typography>
        </div>
      )
    }
  }

  return (
    <BaseLayout>
      <Box py={8} bgcolor='background.default'>
        <Container maxWidth='md'>
          <Typography variant='h3' sx={{ pb: 6 }}>
            Mini Metaverse
          </Typography>
         

          <Typography variant='h6' sx={{ pb: 6 }}>
            {isLoggedIn
              ? 'You are logged In :-)'
              : 'Your are Not logged in :-('}
          </Typography>

          <Body />
        </Container>
      </Box>
    </BaseLayout>
  )
}

export default Metaverse
