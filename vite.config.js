import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/React-Conference_Expense_Planner/', // Replace with your repository name
  plugins: [react()],
});
