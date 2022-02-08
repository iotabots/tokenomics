import React from 'react'
import {
  BaseLayout,
  Container,
  Section,
  SectionHeader,
  Typography,
} from '@iotabots/components'

import { useWeb3React } from '@web3-react/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Web3 from 'web3'

import { POST_ADR } from '../config'
const POST_ABI = require('../contracts/post.json')

export const Chat = (any) => {
  const [contract, setContract] = React.useState(undefined)
  const { account, library, chainId } = useWeb3React()
  const router = useRouter()

  const init = async (_account, _library) => {
    const web3 = new Web3(_library.provider)

    let data
    try {
      const tempContract = new web3.eth.Contract(POST_ABI, POST_ADR)
      data = await tempContract.methods.get_amount_of_posts_by_space(0).call()
      console.log('data', data)
      setContract(tempContract)
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

  return (
    <BaseLayout>
      <Section>
        <SectionHeader title='Web3 Chat' subtitle='Alpha Testing Live Now!' />
        <Container maxWidth='md'>
          <Typography variant='body2' align='center' sx={{ pb: 6 }}>
            Attention: This a very early test and we will reset the chain
            somethimes.
          </Typography>
          <Typography variant='body1' align='center' sx={{ pb: 6 }}>
            The chat is provided by decensored. Only IOTABOTS can post here :-)
          </Typography>
        </Container>
      </Section>
    </BaseLayout>
  )
}

export default Chat
