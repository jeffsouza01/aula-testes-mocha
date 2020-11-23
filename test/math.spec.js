const assert = require('assert');
const Math = require('../src/Math')
const expect = require('chai').expect;
const sinon = require('sinon');
// Orientado a não usar arrow fucntion para ter controle do This
describe('Math Class', function() {
    // hooks
    beforeEach(function() {
        value = 0;
    })


    it('should be able to sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);
        value = 5;
        
        math.sum(value,5, value => {
            expect(value).to.equal(10);
            done();
        // metodo done usado para aguardar respostas de Promises, para que teste responda adequadamente 
        })

        
    })
    //permite implantar teste não prontos
    it('should be able division number');
    //Para ignora-lo podemos usar skip


    // Forçando a execução de apenas um teste expecifico
    it('should be able multiply two number', function() {
        const math = new Math();
        const obj = {
            name: 'Jefferson da Silva'
        };

        expect(math.multiply(5,5)).to.equal(25);

        expect(obj).to.have.property('name');
    })

    it.only('calls req with sum and index values', function() {
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        //stub substitui valores de saida
        sinon.stub(res, 'load').returns('outraCoisa');

        math.printSum(req, res, 5, 5);

        // volta o metodo ao normal
        res.restore();

        expect(res.load.calledOnce).to.be.true;

        expect(res.load.args[0][0]).to.equal('index');
    })
})