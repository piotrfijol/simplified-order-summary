/// Main JavaScript File
/// Here we import all the global JavaScript files we need for our project.

import '../global-styles/style.scss'
import { startLoader } from '../global-scripts/scripts/loading-spinner';

const trigger = document.querySelector(".order-summary__.payment-btn");

trigger
    .addEventListener('click', startLoader.bind(null, 1500, trigger, trigger));
