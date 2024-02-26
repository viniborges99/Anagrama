const arr = ['amor', 'roma','padre','ignorado','bolo','rota','nada','ator','lobo','pedra'];

const groupSimilarWords = (arr = []) => {
   if (arr.length === 0) {
      return arr;
   };

   const map = new Map();
   for(let str of arr) {
      let sorted = [...str];
      sorted.sort();
      sorted = sorted.join('');

      const isAnagram = arr.filter(word => {
         if (word === str) {
            return false;
         }
         const sortedWord = [...word].sort().join('');
         return sortedWord === sorted;
      }).length > 0;

      if (isAnagram || map.has(sorted)) {
         if (map.has(sorted)) {
            map.get(sorted).push(str);
         } else {
            map.set(sorted, [str]);
         }
      }
   };
   return [...map.values()];
};

console.log(groupSimilarWords(arr));