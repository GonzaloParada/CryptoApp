
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import { QueryClient, QueryClientProvider } from 'react-query';
import { CustomDrawer } from './components/CustomDrawer/CustomDrawer';
import { CssBaseline } from '@mui/material';
import { useCryptoHook } from './hooks/useCryptoHook';
import { Dashboard } from './components/Dashboard/Dashboard';



function App() {
  const queryClient = new QueryClient();

  const { coin, setCoin, coins, isLoading } = useCryptoHook();

  return (


    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <div style={{ backgroundColor: "rgba(241, 241, 241, 0.433)", height: "100vh" }}>
        {!isLoading ? <CustomDrawer coins={coins} setCoin={setCoin}>
          <Dashboard coin={coin} />
        </CustomDrawer> : <p>Loading...</p>}
      </div>

    </QueryClientProvider>


  )
}

export default App
