export default {
  input: 'src/human-readable-id.js',
  output: [
    {
      file: 'dist/human-readable-id.esm.js',
      sourcemap: true,
      format: 'esm'
    },
    {
      file: 'dist/human-readable-id.js',
      sourcemap: true,
      exports: 'named',
      format: 'cjs'
    }
  ],
  external: ['crypto']
}
