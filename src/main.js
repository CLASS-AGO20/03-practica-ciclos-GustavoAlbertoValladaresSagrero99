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



}

let app = new App();

console.log(app.factorial(5));

