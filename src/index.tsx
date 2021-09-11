import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model, Response } from 'miragejs'


createServer({
  models: {
    transactions: Model
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', (schema) => {
      return schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      
      try { 
        return schema.create('transactions', data)
      } catch (error) {
        return new Response(400, {status: 'Internal Server Error'}, {error})
      }
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
