import riot from 'rollup-plugin-riot'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import scss from 'rollup-plugin-scss'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins: [
    riot(),
    resolve(),
    commonjs(),
    scss({
      watch: ['src/style', 'src/components']
    }),
    isProduction && terser()
  ]
}
