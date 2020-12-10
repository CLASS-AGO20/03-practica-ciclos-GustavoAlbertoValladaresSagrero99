export default class App {

    factorial(numero)
    {
        let total = 1;
        for (let i=1; i<= numero; i++)
        {
            total*=i;
        }

        return total;

    }

    convertirAString(numero)
    {
        let cadena = "";
        let i = 1;

        while(i <= numero)
        {
            cadena+="*";
            i++;
        }

        return cadena;
    }

}

let app = new App();

console.log(app.factorial(5));
console.log(app.convertirAString(10));
