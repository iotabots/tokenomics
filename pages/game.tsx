import React from 'react'
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core'
import {
  BaseLayout,
  Button,
  Container,
  Grid,
  Section,
  SectionHeader,
  Typography,
} from '@iotabots/components'
import Web3 from 'web3'
import Snake from '../components/Game/Snake'
import GameInfo from '../components/GameInfo'
import { GAMEDUEL_ADR } from '../config'

const GAMEDUEL_ABI = require('../contracts/gameduel.json')

export const Games: React.FC = () => {
  const { account, library, chainId } = useWeb3React()

  const [gameDuelContract, setGameDuelContract] = React.useState(undefined)
  const [gameId, setgameId] = React.useState(0)
  const [gameActive, setGameActive] = React.useState(false)
  const [games, setGames] = React.useState([])
  const [gamesCount, setGamesCount] = React.useState(0)

  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const playRanked = async function () {
    setGameActive(true)
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
        router.reload()
      }
      Snake(config, callback)
      return true
    } catch (e) {
      console.log('init error', e)
      return null
    }
  }

  const printIcon = function (game, player) {
    if (player === game.winner) {
      return '👑'
    } else if (game.winner === '0x000000000000000000000000000000000000dEaD') {
      return '⚔️'
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
      if (count >= 5) {
        count = 5
      }
      // get Last Games
      let tempGames = []
      for (let i = data - 1; i >= count; i--) {
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
        <Container maxWidth='lg'>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              {gameActive ? (
                <div id='game' />
              ) : (
                <GameInfo
                  image='/thumgnail'
                  title='Botchain'
                  subtitle='A snake like game, called botchain.'
                />
              )}
            </Grid>
            <Grid item xs={6}>
              <Button onClick={playRanked}>Play Ranked</Button>

              <Typography variant='h6' color='text.secondary' align='center'>
                All Games
              </Typography>
              <Typography variant='body2' color='text.secondary' align='center'>
                Games played in total: {gamesCount}
              </Typography>
              <Typography variant='h5' color='text.secondary' align='center'>
                History
              </Typography>
              <table style={{ fontSize: '10px' }}>
                <thead>
                  <th>Player1</th>
                  <th>Points</th>
                  <th>Player2</th>
                  <th>Points</th>
                </thead>
                <tbody>
                  {games.map((game, index) => (
                    <tr id={`game-history-${index}`}>
                      <td>
                        {printIcon(game)}
                        {`${game.player1?.substring(
                          0,
                          4
                        )}...${game.player1?.substring(
                          // eslint-disable-next-line no-unsafe-optional-chaining
                          game.player1?.length - 3,
                          game.player1?.length
                        )}` || '-'}
                      </td>
                      <td>{game.player1Points}</td>
                      <td>
                        {printIcon(game)}
                        {`${game.player2?.substring(
                          0,
                          4
                        )}...${game.player2?.substring(
                          // eslint-disable-next-line no-unsafe-optional-chaining
                          game.player2?.length - 3,
                          game.player2?.length
                        )}` || '-'}
                      </td>
                      <td>{game.player2Points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </BaseLayout>
  )
}

export default Games
