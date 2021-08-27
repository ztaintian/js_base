function padLeft(value: string,padding: string | number) {

  if (typeof padding === 'number') {

      console.log(padding + 3); //正常

      console.log(padding + 2); //正常

      console.log(padding + 5); //正常

       //正常

      return Array(padding + 1).join(' '); 

  }

  if (typeof padding === 'string') {

      return padding + value;

  }

}