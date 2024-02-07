import { App } from './App';
import { ContextProvider } from './TodosContext';

export default function Root() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}
