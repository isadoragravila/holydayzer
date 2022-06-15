import express from "express";

const server = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

server.get("/holidays", (req, res) => {
    res.send(holidays);
});

server.get("/is-today-holiday", (req, res) => {
    const hoje = new Date();
    const data = hoje.toLocaleDateString();
    const ehFeriado = holidays.find(holiday => holiday.date === data);

    if (ehFeriado) {
        res.send(`Sim, hoje é ${ehFeriado.name}`);
    } else {
        res.send("Não, hoje não é feriado");
    }
});

server.get("/holidays/:idMes", (req, res) => {
    const mes = req.params.idMes;

    const feriadosMes = holidays.filter(holiday => holiday.date.slice(0 , mes.length + 1) === `${mes}/`);

    if (feriadosMes.length !== 0) {
        res.send(feriadosMes);
    } else {
        res.send("Nesse mês não há feriados");
    }
    
});

server.listen(4000);
