# chatbot

APP calculadora com indicadores da construção civil. 

Formato de chat, utilizando máquina de estados para o fluxo do chat.

Contexto:
    
    USER/Site - Envia "JSON1" e recebe "JSON2" (interação com API)

    API - Recebe "JSON1" e envia "JSON2" (Interação com user)
        - Envia "End" para storage


   Conteúdo:

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
