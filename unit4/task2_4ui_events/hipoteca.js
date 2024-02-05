/*\
    n\ tform = document.myform;\
    n\ tLoanAmount = form.LoanAmount.value;\
    n\ tDownPayment = "0";\
    n\ tAnnualInterestRate = form.InterestRate.value / 100;\
    n\ tYears = form.NumberOfYears.value;\
    n\ tMonthRate = AnnualInterestRate / 12;\
    n\ tNumPayments = Years * 12;\
    n\ tPrin = LoanAmount - DownPayment;\
    n\ tMonthPayment = Math.floor((Prin * MonthRate) / (1 - Math.pow((1 + MonthRate), (-1 * NumPayments))) * 100) / 100;\
    n\ tform.NumberOfPayments.value = NumPayments;\
    n\ tform.MonthlyPayment.value = MonthPayment;\
    n
}*/

let boton = document.getElementById('calcular');

let resultado = document.getElementById('resultado');

boton.addEventListener('click', (e) => {
    let precio = document.getElementById('precio').value;
    let interes = document.getElementById('interes').value;
    let plazo = document.getElementById('plazo').value;

    let tasaInteresAnual = interes / 100;
    let tasaMensual = tasaInteresAnual / 12;
    let numeroPagos = plazo * 12;

    let tPrin = precio - 0;

    let pagoMensual = Math.floor((tPrin * tasaMensual) / (1 - Math.pow((1 + tasaMensual), (-1 * numeroPagos))) * 100 ) / 100;

    resultado.innerHTML = `Numero de Cuotas ${numeroPagos} | Cuota Mensual ${pagoMensual}`;
});
