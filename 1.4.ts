function reverseWords(a:string):string{
  let strs:string[]=a.split(' ');
  let res:string='';
  strs.forEach(element => {
    res+=' '+element.split('').reverse().join('');
  });
  return res;
}

console.log(reverseWords("Это пример!")); 
console.log(reverseWords("")); 
console.log(reverseWords("пример! Это")); 
console.log(reverseWords("фвпфыпфывавыфафывафывафываывфафывж")); 
