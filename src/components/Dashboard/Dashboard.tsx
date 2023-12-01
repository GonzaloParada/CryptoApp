import { CustomChart } from '../CustomChart/CustomChart'
import CustomCard from '../CustomCard/CustomCard'
import { Coin } from '../../interfaces/interface'
import "./Dashboard.css"

interface Props {
  coin: Coin | undefined
}
export const Dashboard = ({ coin }: Props) => {

  return (
    <div className='dashboard-container'>
      <div className='dashboard-header'>
        <div className='dashboard-top-header'>
          <img className="dashboard-img-header" src={coin?.iconUrl} alt="" />
          <h1>{coin?.name}</h1>
        </div>
        <div className='dashboard-card-header'>
          <CustomCard coin={coin} />
        </div>
      </div>
      <div className='dashboard-chart-container' >
        <CustomChart sparkline={coin?.sparkline} color={coin?.color} name={coin?.name} />
      </div>
    </div>
  )
}
