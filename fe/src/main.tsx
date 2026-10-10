import { createRoot } from 'react-dom/client';
import './foundation/tokens.css';
import './foundation/base.css';
import './foundation/fonts';
import { App } from './app/App';

createRoot(document.getElementById('root')!).render(<App />);
