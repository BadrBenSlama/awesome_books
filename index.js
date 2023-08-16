import AwesomeBookAppllication from "./modules/class.js";
import WhatsTheDate from "./modules/date.js";


  function initializeApp() {
    // eslint-disable-next-line no-unused-vars
    const app = new AwesomeBookAppllication();
    WhatsTheDate();    
  }
  
  document.addEventListener('DOMContentLoaded', initializeApp);
  
  
  