import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { BaseLayout, Button, Container, Section, Typography } from '@iotabots/components'
import Web3 from 'web3'
import Snake from '../components/Game/Snake'
import { GAMEDUEL_ADR } from '../config'

const GAMEDUEL_ABI = require('../contracts/gameduel.json')

export const Metaverse: React.FC = () => {

  const { account, library, chainId } = useWeb3React()

  const [gameDuelContract, setGameDuelContract] = React.useState(undefined)
  const [gameId, setgameId] = React.useState(0)
  const [games, setGames] = React.useState([])
  const [gamesCount, setGamesCount] = React.useState(0)

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const playRanked = async function () {
    let data
    try {
      // Get Games
      data = await gameDuelContract.methods
        .play()
        .send({ from: account, gasPrice: '0' })
      console.log('tx:', data)

      data = await gameDuelContract.methods.getGamesCount().call()
      console.log('gamesCount:', data)
      setGamesCount(data)
      let _gameId = data - 1
      setgameId(_gameId)

      let config = await gameDuelContract.methods.getConfig(_gameId).call()
      console.log('config:', config)
      config = config.map((item) => [parseInt(item[0]), parseInt(item[1])])
      console.log('config:', config)

      const callback = async function (params) {
        console.log('data test:', _gameId)
        console.log('data params:', params)
        let data = await gameDuelContract.methods
          .publishScore(_gameId, params)
          .send({ from: account, gasPrice: '0' })
        console.log('data test:', data)
        
      }
      Snake(config, callback)
      return true
    } catch (e) {
      console.log('init error', e)
      return null
    }
  }

  const init = async function (_account, _library) {
    const web3 = new Web3(_library.provider)
    const _gameDuelContract = new web3.eth.Contract(GAMEDUEL_ABI, GAMEDUEL_ADR)
    setGameDuelContract(_gameDuelContract)
    let data

    try {
      // Get Games
      data = await _gameDuelContract.methods.getGamesCount().call()
      console.log('games:', data)
      setGamesCount(data)
      let count = data

      // only last 3 games
      if (count > 5) {
        count = 5
      }
      // get Last Games
      let tempGames = []
      for (let i = 0; i < count; i++) {
        data = await _gameDuelContract.methods.games(i).call()
        console.log('game id', i)
        console.log('game', data)
        tempGames.push(data)
      }
      console.log('tempGames', tempGames)
      if (tempGames.length > 0) {
        setGames(tempGames)
      } else {
        setGames([])
      }
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
  return (
    <BaseLayout>
      <Section>
        <Container maxWidth='md'>
          <Typography variant='h3' sx={{ pb: 6 }}>
            Game
          </Typography>
          <div id='game'></div>

          <Typography variant='h6' color='text.secondary' align='center'>
            Game Info
          </Typography>
          <Typography variant='body2' color='text.secondary' align='center'>
            gameId: {gameId}
          </Typography>

          <Typography variant='h6' color='text.secondary' align='center'>
            All Games
          </Typography>
          <Typography variant='body2' color='text.secondary' align='center'>
            Games played in total: {gamesCount}
          </Typography>
          <Typography variant='body2' color='text.secondary' align='center'>
            Last Games
          </Typography>
          <Button onClick={playRanked}>Play Ranked</Button>
          {games.map((game, index) => (
              <Typography variant='body2' color='text.secondary' align='center'>
                Player 1: {game.player1}
                Player 2: {game.player2}
              </Typography>
            )
          )}
        </Container>
      </Section>
    </BaseLayout>
  )
}

export default Metaverse
