import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Coin } from '../../interfaces/interface';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

interface Props {
  coin: Coin | undefined

}

export default function CustomCard({ coin }: Props) {
  return (

    <>
      <Card sx={{ minWidth: 275, width: 330, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.5)" }}>
        <CardContent>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            rank: {coin?.rank}
          </Typography>
          <Typography variant="h5" component="div">
            {coin?.name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            symbol: {coin?.symbol}
          </Typography>
          <Typography variant="h5" component="div">
            Price: <b>{coin?.price && parseFloat(coin?.price).toFixed(2)}</b>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small"><a href={coin?.coinrankingUrl} target="_blank" style={{ color: coin?.color ? coin.color : "blue" }}>Learn More</a></Button>
        </CardActions>
      </Card>
    </>

  );
}