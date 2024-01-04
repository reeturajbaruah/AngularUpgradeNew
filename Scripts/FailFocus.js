(()=>{    
    fit = function(title) {
        it(title, ()=>{
            fail('fit is disabled. Please replace fit with it before running');
        });
    }
    
    fdescribe = function(title) {
        describe(title, ()=>{
            it('used fdescribe while fdescribe was disabled', ()=> {
                fail('fdescribe is disabled: Please replace fdescribe with describe before running');
            });
        });
    }
})()