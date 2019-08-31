const add = function(a, b) {
  return a + b;
};

const add1 = (a, b) => {
  return a + b;
};

console.log(add(55, 1));
console.log(add1(2, 23));

const user = {
  name: 'Esmaeil',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  print: function() {
    // console.log(this.name);
    // console.log(this.cities);
    
    // const that = this;
    // this.cities.forEach(function(city){
      // console.log(that.name + ' has been lived in ' + city);
    // });

    this.cities.forEach((city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

user.print();