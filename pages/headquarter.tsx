import React from 'react'
import {
  Avatar,
  BaseLayout,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Section,
  SectionHeader,
  Typography,
} from '@iotabots/components'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { useRouter } from 'next/router'

const HQ_ABI = require('../contracts/headquarter.json')
const { HQ_ADR } = require('../config')

const IOTABOTS_ABI = require('../contracts/iotabots.json')
const { IOTABOTS_ADR } = require('../config')

export const Home = ({ projects }): JSX.Element => {
  const context = useWeb3React<Web3Provider>()
  const { library, account } = context
  const [bots, setBots] = React.useState([])
  const [botsInHQ, setBotsInHQ] = React.useState([])
  const [iotabots, setIotabots] = React.useState([])
  const [headquarter, setHeadquarter] = React.useState([])
  const router = useRouter()

  const init = async function (_account, _library) {
    console.log('helo')
    const web3 = new Web3(_library.provider)

    let _contract = new web3.eth.Contract(IOTABOTS_ABI, IOTABOTS_ADR)
    let _contractHQ = new web3.eth.Contract(HQ_ABI, HQ_ADR)
    let data
    let data2
    setIotabots(_contract)
    setHeadquarter(_contractHQ)
    try {
      data = await _contract.methods.walletOfOwner(_account).call()
      console.log('data', data)
      setBots(data)
    } catch (e) {
      console.log(e)
      return null
    }
    try {
      console.log('_contractHQ', _contractHQ)
      data2 = await _contractHQ.methods.saved_iotabots.call()

      console.log('setBotsInHQ', data2)
      // setBotsInHQ([data2])
    } catch (e) {
      console.log(e)
      return null
    }
  }

  const sendToHQ = async function (id: any) {
    console.log('id', id)
    let res = await iotabots.methods.getApproved(id).call()
    console.log('res', res)
    let data, data2
    if (res === '0x0000000000000000000000000000000000000000') {
      data = await iotabots.methods.approve(HQ_ADR, id).send({ from: account })
      data2 = await headquarter.methods
        .deposit(id)
        .send({ from: account, gasLimit: 300000 })
    } else {
      data2 = await headquarter.methods
        .deposit(id)
        .send({ from: account, gasLimit: 300000 })
    }
    router.reload()
    console.log('data', data)
    console.log('data', data2)
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library])

  return (
    <BaseLayout>
      <Section>
        <SectionHeader
          title='Headquarter'
          subtitle='Train your IOTABOT and become stronger! '
        />
        <Container maxWidth='md'>
          <Typography variant='h2' sx={{ pb: 6 }}>
            Your IOTABOTS
          </Typography>
          {bots.map((bot) => (
            <Card key={bot} sx={{ maxWidth: 275 }}>
              <CardContent>
                <Typography variant='body1' sx={{ pb: 6 }}>
                  IOTABOT #{bot}
                </Typography>
                <Avatar
                  alt={`IOTABOT #${bot}`}
                  src={`https://assets.iotabots.io/compressed/${bot}.png`}
                />
              </CardContent>
              <CardActions>
                <Button onClick={() => sendToHQ(bot)} size='small'>
                  Send to Headquarter
                </Button>
              </CardActions>
            </Card>
          ))}
          <Typography variant='h2' sx={{ pb: 6 }}>
            Headquarter
          </Typography>
          <Typography variant='body1' sx={{ pb: 6 }}>
            {botsInHQ.length > 0
              ? `Amount of bots in HQ: ${botsInHQ.length}`
              : 'No Bots in HQ'}
          </Typography>
          {botsInHQ.map((bot) => (
            <Card key={bot} sx={{ maxWidth: 275 }}>
              <CardContent>
                <Typography variant='body1' sx={{ pb: 6 }}>
                  IOTABOT #{bot}
                </Typography>
                <Avatar
                  alt={`IOTABOT #${bot}`}
                  src={`https://assets.iotabots.io/compressed/${bot}.png`}
                />
              </CardContent>
              <CardActions>
                <Button size='small'>End Training</Button>
              </CardActions>
            </Card>
          ))}
        </Container>
      </Section>
    </BaseLayout>
  )
}
export default Home
