import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import {
  Button,
  Typography,
  Grid,
  Box,
  Checkbox,
  TextField,
  Link as ExternalLink
} from '@iotabots/components'
import CssBaseline from '@mui/material/CssBaseline'
import FormControlLabel from '@mui/material/FormControlLabel'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { AUTH_ADR } from '../config'
import Web3 from 'web3'

const AUTH_ABI = require('../contracts/auth.json')
function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Made with ❤️ by '}
      <ExternalLink color='inherit' href='https://mui.com/'>
        IOTABOTS.io 🤖
      </ExternalLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Login() {
  const [contract, setContract] = React.useState(undefined)
  const [password, setPassword] = React.useState("")
  const { account, library, chainId } = useWeb3React()
  const router = useRouter()

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider)

    let data
    try {
      const _contract = new web3.eth.Contract(AUTH_ABI, AUTH_ADR)
      data = await _contract.methods.checkIsUserLogged(_account).call()
      console.log('data', data)
      setContract(_contract)
    } catch (e) {
      console.log('init error', e)
      return null
    }
  }

  React.useEffect(() => {
    console.log('init?')
    if (!!account && !!library) {
      console.log('init!')
      init(account, library)
    }
    return null
  }, [account, library, chainId])

  const login = async function () {
    try {
      console.log('userLogin', contract)
      if (contract) {
        let data = await contract.methods
          .loginUser(account, password)
          .send({ from: account, gasPrice: '0' })
        console.log('data', data)
        router.push('/metaverse')
      } else {
        console.log('contract not defined')
      }
    } catch (e) {
      console.log('Err', e)
    }
  }

  return (
    <Grid container sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            'url(https://iotabots.io/assets/projects/metaverse.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5}>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>Log in</Typography>
          <Typography pt='6px' noWrap variant='body1' paragraph>
            {`${account?.substring(0, 4)}...${account?.substring(
              // eslint-disable-next-line no-unsafe-optional-chaining
              account?.length - 3,
              account?.length
            )}` || '-'}
          </Typography>
          <Typography pt='6px' variant='body1' paragraph>
            Log in the Metaverse and explore the new web3 with IOTABOTS. Have
            fun!
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={(event: any) => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              onClick={login}
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#'>
                  <Typography variant='body2' sx={{ cursor: 'pointer' }}>Forgot password?</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link href='signup'>
                  <Typography variant='body2' sx={{ cursor: 'pointer' }}>
                    {"Don't have an account? Sign Up"}
                  </Typography>
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
