function ViewModel1() {
    var self = this;
    self.Summa = ko.observable("");
    self.Months = ko.observable("");
    self.Percent = ko.observable("");
    self.FirstPayment = ko.observable("");
    self.payment = ko.observable("annuitet");
    
    self.colomns = [
        { text: "Месяц" },
        { text: "Сумма выплаты" },
        { text: "Сумма процента" },
        { text: "Сумма основного долга" },
        { text: "Остаток" }
    ];

    self.creditData = ko.observableArray();
    
    self.onClear = function () {
        self.Summa("");
        self.Months("");
        self.Percent("");
        self.FirstPayment("");
    };
    

    self.onCount = function () {
        this.creditData.removeAll();
        var MainPayment=0;
        var SummaPercent=0;
        var summaWithoutFiirstPament = self.Summa() - self.FirstPayment();
        var ostatok = summaWithoutFiirstPament;
        var MonthPayment;
        if (self.payment() == "annuitet") {
            for (var i = 0; i < self.Months() ; i++) {
                MonthPayment = summaWithoutFiirstPament * ((self.Percent() / (100 * 12)) / (1 - (1 + (self.Percent() / (100 * 12)) ^ self.Months())));
                SummaPercent=ostatok*(self.Percent() / (100 * 12));
                MainPayment=MonthPayment-SummaPercent;
                ostatok = ostatok - MainPayment;
                self.creditData.push({ months: i + 1, summa1: MonthPayment, summa2: SummaPercent, summa3: MainRayment, ostatok: ostatok });
            }
        } else {
            for (var i = 0; i < self.Months() ; i++) {
                MainPayment=summaWithoutFiirstPament/self.Months();
                SummaPercent=ostatok*(self.Percent() / (100 * 12));
                MonthPayment=MainRayment+SummaPercent;
                ostatok = ostatok - MainPayment;
                self.creditData.push({ months: i + 1, summa1: MonthPayment, summa2: SummaPercent, summa3: MainRayment, ostatok: ostatok });
            //для сложных нужна формула, которую я не знаю
            //для простых тоже проферь формулу
        }
    };
}
