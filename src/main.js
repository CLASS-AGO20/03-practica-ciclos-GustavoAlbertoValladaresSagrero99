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

    obtenerDivisibles(numero)
    {
        let divisibles = 0;
        let i = 1;

        do
        {
            if (numero%i == 0)
            {
                divisibles++;
            }
            i++;

        }while(i<=numero);

        return divisibles;
    }

    elevar(numero, potencia)
    {
        let resultado = 1;
        for (let i=1;i<=potencia;i++)
        {
            resultado *=numero;
        }

        return resultado;
    }

}

let app = new App();

console.log(app.factorial(5));
console.log(app.convertirAString(10));
console.log(app.obtenerDivisibles(12));
console.log(app.elevar(3,4));
