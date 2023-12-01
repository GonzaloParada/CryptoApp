import {
  Divider,
  List, ListItem,
  ListItemButton,
  ListItemText,
  Toolbar
} from '@mui/material'
import { Coin } from '../../interfaces/interface'

interface Props {
  coins: Coin[] | undefined
  setCoin: React.Dispatch<React.SetStateAction<Coin | undefined>>
}

export const NavListDrawer = ({ coins, setCoin }: Props) => {

  const handleClick = (coin: Coin) => {
    setCoin(coin);
    console.log(coin);
  }

  return (
    <div>
      <Toolbar />
      <Divider />
      <List
        component='nav'>
        {coins && coins.map(coin =>
          <ListItem key={coin.uuid} disablePadding >
            <ListItemButton onClick={() => handleClick(coin)}>
              <ListItemText primary={coin.name} />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </div>


  )
}
