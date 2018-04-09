# chatbot

APP calculadora com indicadores da construção civil. 

Formato de chat, utilizando "carrossel" para o fluxo do chat.

Simplificado:
    
    
    User preenche campos, dados são armazenados, operações matemáticas são realizadas
    
    Exporta para base RD
    
    
Contexto antigo:
    
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
          - Perguntas para o usuário (número varia de acordo com o posicionamento no fluxo)
          - Números aproximados de desperdício de tempo e dinheiro
    
     End
          Armazena informações do fim do ciclo utilizando google cloud

Estrutura:

API
Funções

    Main.js - Possíveis estados e operações matemáticas.
