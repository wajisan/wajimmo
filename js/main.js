var app = new Vue({
    el: '#app',
    data: {
        stateValues: {
            notaryPercent: 7.7,
            bankLike: 33,
        },
        module: {
            debt: {
                netIncome: 0.0,
                otherIncome: 0.0,
                charges: 0.0,
                credit: 0.0,
                debtPercent: 0.0
            },
            profitability: {
                price: 0.0,
                area: 0.0,
                nfees: 0.0,
                pfees: 0.0,
                afees: 0.0,
                tfees: 0.0,
                value: 0.0,
                totalCharge: 0.0,
                pricePerMeter: 0.0,
                estimatePrice: 0.0,
                profit: 0.0
            }
        }
    },
    methods: {
        setDebtPercent: function() {
            if ((this.module.debt.netIncome + this.module.debt.otherIncome) > 0)
                this.module.debt.debtPercent = ((this.module.debt.charges + this.module.debt.credit) / (this.module.debt.netIncome + this.module.debt.otherIncome)) * 100;
        },
        getBankLike: function(value) {
            if (value > this.stateValues.bankLike)
                return 'positive-color';
            else if (this.stateValues.bankLike < 0)
                return 'negative-color';
            return '';
        },
        setProfitability: function() {
            this.module.profitability.totalCharge = this.module.profitability.price + this.module.profitability.nfees + this.module.profitability.afees + this.module.profitability.tfees + this.module.profitability.pfees;
            this.module.profitability.estimatePrice = this.module.profitability.area * this.module.profitability.pricePerMeter;
            this.module.profitability.profit = this.module.profitability.estimatePrice - this.module.profitability.totalCharge;
        },
        getPricePerMeter: function() {
            window.open("https://www.seloger.com/prix-de-l-immo/vente/pays/france.htm");
            //this.module.profitability.pricePerMeter = 6500;
        },
        getNFees: function() {
            if (this.module.profitability.price > 0)
                this.module.profitability.nfees = this.module.profitability.price * (this.stateValues.notaryPercent / 100);
        },

    }

});