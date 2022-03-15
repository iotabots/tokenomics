import React from 'react'
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
import Web3 from 'web3'
import { Typography } from '@iotabots/components'

const SCREWS_ABI = require('../../contracts/screws.json')
const { SCREWS_ADR } = require('../../config')

export const TotalSupply: React.FC = () => {
  const context = useWeb3React<Web3Provider>()
  const { connector, chainId, library, account, deactivate, active, error } =
    context

  const [balance, setBalance] = React.useState()

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider)

    let contract = new web3.eth.Contract(SCREWS_ABI, SCREWS_ADR)
    let data
    try {
      data = await contract.methods.totalSupply().call()
      setBalance(data)
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
  }, [account, library, chainId, balance])

  return (
    <Typography variant='body1' align='center' sx={{ pb: 6 }}>
      {/* eslint-disable-next-line no-nested-ternary */}
      Total Supply: {balance === null ? null : balance ? balance : '-'}
    </Typography>
  )
}
