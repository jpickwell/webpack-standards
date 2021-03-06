import path from 'path'
import { webpackService } from 'webpack-standards'
import standard from 'webpack-standards/configs/standard'

const port = 7000

const config = webpackService
  .register(standard)
  .configure()
  .entry(path.resolve(__dirname, './src/index.jsx'))
  .output(path.resolve(__dirname, './dist'))
  .es()
  .esReact()
  .devServer()
  .hmr()
  .html()
  .get()

export default config
