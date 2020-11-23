import React, { FunctionComponent } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStockCard from '../../hooks/useStockCard'
import {forexSearch} from '../../models/forexSearch'

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    margin: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 4,
  },
});

// @ts-ignore
export interface StockCardProps {
  type: 'forex' | 'stock'
  symbol: string
  handleStockSearch: (symbol: string) => void
  handleForexSearch: (forexSearch: forexSearch) => void
}

export const StockCard: FunctionComponent<StockCardProps> = (props) => {
  const classes = useStyles();
  const {loaded, current} = useStockCard(props.symbol, props.type)

  const handleForexSearch = () => {
    console.log(props.symbol.split('-')[0])
    console.log(props.symbol.split('-')[1])
    const searchForex = {
      fromCurrency: props.symbol.split('-')[0],
      toCurrency: '',
    }
    // props.handleForexSearch(searchForex)
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {(props.type === 'stock' ? 'Stock' : 'Forex')+': '+props.symbol}
          </Typography>
          <Typography className={classes.pos} variant={'h5'}>
            {loaded ? current : 'loading'}
          </Typography>
        </CardContent>
        <CardActions>
          {props.type === 'stock' ?
            <Button size="small" onClick={() => props.handleStockSearch(props.symbol)}>Stock Page</Button>
          :
            <Button size="small" onClick={() => handleForexSearch()}>Stock Page</Button>
          }
        </CardActions>
      </Card>
    </>
  )
}

export default StockCard
