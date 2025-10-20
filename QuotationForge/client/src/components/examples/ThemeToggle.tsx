import ThemeToggle from '../ThemeToggle';
import { ThemeProvider } from '../../contexts/ThemeProvider';

export default function ThemeToggleExample() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
}
