import './style.css';
import Experience from './Experience/Experience';

console.log(
    `                            ,----,          
                          ,/   .\`|          
               ,---,    ,\`   .'  :   ,---,. 
       ,---.,\`--.' |  ;    ;     / ,'  .' | 
      /__./||   :  :.'___,/    ,',---.'   | 
 ,---.;  ; |:   |  '|    :     | |   |   .' 
/___/ \\  | ||   :  |;    |.';  ; :   :  |-, 
\\   ;  \\ ' |'   '  ;\`----'  |  | :   |  ;/| 
 \\   \\  \\: ||   |  |    '   :  ; |   :   .' 
  ;   \\  ' .'   :  ;    |   |  ' |   |  |-, 
   \\   \\   '|   |  '    '   :  | '   :  ;/| 
    \\   \`  ;'   :  |    ;   |.'  |   |    \\ 
     :   \\ |;   |.'     '---'    |   :   .' 
      '---" '---'                |   | ,'   
                                 \`----'     
%cVi%cte %cThree%cJS %cTemplate by https://github.com/DooD73`,
    'color: #46caff',
    'color: #906dfe',
    'color: #bd34fe',
    'color: #ffe564',
    'color: #ff7e67'
);

const experience = new Experience(document.querySelector('canvas.webgl'));
