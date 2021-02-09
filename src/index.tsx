import React from 'react';
import { render } from 'react-dom';
import { Invoice } from './components/invoice.component';
import './styles/styles.css';

// Find div container
const rootElement = document.getElementById('root')

render(<Invoice />, rootElement)
