// Keep the live development server separate from production build output.
export default (phase) => ({
  distDir: phase === 'phase-development-server' ? '.next-dev' : '.next',
});
