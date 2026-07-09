import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import AgeGateway from '@/components/AgeGateway';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from './pages/Home';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();
const GATE_KEY = 'alexa-gray-gate';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [gatePassed, setGatePassed] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setGatePassed(localStorage.getItem(GATE_KEY) === 'passed');
    setReady(true);
  }, []);

  const handleEnter = () => {
    localStorage.setItem(GATE_KEY, 'passed');
    setGatePassed(true);
  };

  if (!ready) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          {!gatePassed && <AgeGateway onEnter={handleEnter} />}
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
