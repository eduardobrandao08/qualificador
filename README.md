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
    Contém:
  - Posicionamento do usuário no fluxo do chat
  - Respostas preenchidas pelo usuário (número varia de acordo com o posicionamento no fluxo)
  
JSON 02
    Contém:
    - Novo posicionamento do usuário no fluxo do chat
    - Respostas preenchidas pelo usuário (número varia de acordo com o posicionamento no fluxo)
    
End
    Armazena informações do fim do ciclo utilizando google cloud

API
Funções
    Main.js - Possíveis estados e operações matemáticas.
