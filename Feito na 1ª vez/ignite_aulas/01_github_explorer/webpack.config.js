const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
   mode: isDevelopment ? 'development' : 'production',
   devtool: isDevelopment ? 'eval-source-map' : 'source-map',
   entry: path.resolve(__dirname, 'src', 'index.tsx'), // Arquivo principal da aplicação
   output: { // Onde sairá o arquivo convertido
      path: path.resolve(__dirname, 'dist'), // Caminho até o arquivo
      filename: 'bundle.js' // Nome do arquivo
   },
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'] // Arquivos que poderão ser lidos
   },
   devServer: {
      static: __dirname + '/public',
      hot: true
   },
   plugins: [
      isDevelopment && new ReactRefreshWebpackPlugin(), // Apenas executa quando estivermos em desenvolvimento
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, 'public', 'index.html')
      })
   ].filter(Boolean), // Filtra o que for false
   module: {
      rules: [ // Regras para todos os tipos de arquivos que podem ser lidos
         {
            test: /\.(j|t)sx$/, // Expressão regular para mostrar que queremos arquivos que terminem com .jsx ou .tsx
            exclude: /node_modules/, // Arquivos que não precisa ser convertido
            use: {
               loader: 'babel-loader',
               options: {
                  plugins: [
                     isDevelopment && require.resolve('react-refresh/babel')
                  ].filter(Boolean)
               }
            } // Integração do babel com o webpack
         },
         {
            test: /\.scss$/, 
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   }
}