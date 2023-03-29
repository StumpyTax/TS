function reverseWords(a:string):string{
  return a.split(' ').map((e:string) =>
  e.split('').reverse().join('')).join(' ');
}

console.log(reverseWords("Это пример!")); 
console.log(reverseWords("")); 
console.log(reverseWords("пример! Это")); 
console.log(reverseWords("фвпфыпфывавыфафывафывафываывфафывж")); 
