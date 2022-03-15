import React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import Countdown from 'react-countdown'
import Web3 from 'web3'
import { Box, Typography } from '@iotabots/components'

const IOTABOTS_ABI = require('../../contracts/iotabots.json')
const { IOTABOTS_ADR } = require('../../config')
const SCREWS_ABI = require('../../contracts/screws.json')
const { SCREWS_ADR } = require('../../config')

export const MintTimer: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { connector, chainId, library, account, deactivate, active, error } =
    context

  const [timers, setTimers] = React.useState([])

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider)

    let contract = new web3.eth.Contract(IOTABOTS_ABI, IOTABOTS_ADR)
    let data
    try {
      data = await contract.methods.walletOfOwner(_account).call()

      console.log('data', data)
      let tokenContract = new web3.eth.Contract(SCREWS_ABI, SCREWS_ADR)
      let res
      let _timers = []
      for (let i = 0; i < data.length; i++) {
        console.log('id', data[i])
        res = await tokenContract.methods.lockTime(data[i]).call()
        console.log('res', res)
        if (typeof res === 'string') {
          _timers.push({
            botId: data[i],
            lockTime: res,
          })
        }
      }
      console.log('_timers', _timers)
      setTimers(_timers)
    } catch (e) {
      console.log(e)
      return null
    }
  }

  React.useEffect(() => {
    if (!!account && !!library) {
      init(account, library)
    }
    return null
  }, [account, library, chainId])

  const Completionist = () => <span>You are good to go!</span>

  return (
    <div>
      {timers.map((timer, index) => (
        <div key={index}>
          <Typography variant='body1' align='center'>
            IOTABOTS#{timer.botId} lock time ends at:{' '}
            {new Date(timer.lockTime * 1000).toLocaleString(undefined, {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              hour12: false,
              minute: '2-digit',
              second: '2-digit',
            })}
          </Typography>
          <Typography variant='body1' align='center' sx={{ pb: 6 }}>
            Countown:{' '}
            <Countdown date={new Date(timer.lockTime * 1000)}>
              <Completionist />
            </Countdown>
          </Typography>
        </div>
      ))}
    </div>
  )
}
