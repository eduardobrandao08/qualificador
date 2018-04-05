# chatbot

APP calculadora com indicadores da construção civil. 
Formato de chat, utilizando máquina de estados para o fluxo do chat.

Estrutura:
    ---------                  ---------               ---------
   /         /    ------>     /         /             /         /
   /         /    JSON 01     /         /     End     /         /
   /   USER  /                /   API   /    ----->   / Storage /
   /   Site  /    JSON 02     /         /             /         /
   /         /    <-------    /         /             /         /
    ---------                  ---------               ---------

    
JSON 01
  - Posicionamento do usuário no fluxo
  - Respostas preenchidas pelo usuário (número varia de acordo com o posicionamento no fluxo)
  
JSON 02
End
Utilizando google cloud

API
Funções
    Main.js - Possíveis estados e operações matemáticas.
