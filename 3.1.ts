type House = {
  street: string,
  apartmentCount: number,
  buildInfo: {
      year: number,
      material: string,
  }
};
function getHouse(): House {
  const house:House = {
    street : 'Pushkina',
    apartmentCount : 76,
    buildInfo :{
          year: 1996,
          material: 'rocks',
          }
  };
  // house.apartmentCount = 76
  //Ошибка возникает из-за того что переменная house кастуется к типу House, а тип House не указан для переменной.
  //Чтобы избежать такой ошибки необходимо указывать тип переменной.
  // house.buildInfo = {
  //     year: 1996,
  //     material: 'rocks',
  //     };

  return house;
}

function handleHouse(): void {
  const house: House = getHouse();

  console.log(`${house.street} st., ${house.apartmentCount} apartments total`);
  console.log(`build in ${house.buildInfo .year}, build from ${house.buildInfo.material} `);
}

handleHouse();