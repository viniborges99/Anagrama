# Entendendo o projeto anagrama


Para rodar o codigo é necessario o node.js, instale caso não tenha ele em sua maquina, feito isso abra o vscode e no terminal digite node script.js.

O projeto consiste em uma aplicação para verificar se existe algum anagrama, de acordo com as informçaões passadas.

Começamos o projeto criando uma variavel chamada (arr) para armazenar o array que sera passada as informações.

Em seguida colocamos uma função chamada groupSimilarWords que fara a verificação se o comprimento do array é igual a zero. Se for, ela simplesmente retorna o array original sem fazer nada.

Depois criamos outra variavel map para armazenar o novo grupo de anagramas

Para cada string (str) no array fornecido (arr), cria-se uma nova array chamada sorted, que é uma cópia da string original convertida em um array de caracteres.
Apos isso ordenamos esse novo array do sorted, apos ordenado convertemos esse novo array do sorted de volta para string.

Verificamos se a string atual é um anagrama de qualquer outra string já verificada no array arr.
Isso é feito filtrando o array arr para encontrar strings que tenham os mesmos caracteres quando ordenados. Se for encontrado pelo menos um anagrama, a variável newAnagram é definida como true, caso contrário, é definida como false.

Se a string atual for um anagrama de alguma outra string já processada ou se a string já tiver sido adicionada ao map, ela é adicionada ao grupo apropriado no map.

Por fim, a função retorna um array contendo todos os valores do map, ou seja, os grupos de anagramas já ordenados.

# Metodos utilizados e suas funções

Metodo (sort): O sort consiste em ordenar os elementos do próprio array e retornalos novamente no array.

Metodo (join): O join é um metodo que junta todas os argumentos passados no array em uma string e retorna essa string.

Metodo (filter): O metodo filter como o proprio nome diz ele filtra as informações passadas.

Metodo (has): O metodo has auxilia retornando um valor booleano indicando se um elemento especifico existe ou não, utilizamos ele para verificar o map.




