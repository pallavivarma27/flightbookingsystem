let expect=require('chai').expect;
let book=require('../../../backend/models/User');
let app=require('../../../backend/main');
let chaiHttp=require('chai-http');
var chai=require('chai');


//Assertion Style
chai.should();
chai.use(chaiHttp);



describe('Testing routes',async()=>{
    describe('POST /register',()=>{
      it('Should return 200',(done)=>
      {
        const task=
        {
            email:"gps@gmail.com",
            completed:false
        }
        chai.request(app)
        .post('/register')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(200);
          done();
        });
      }).timeout(10000);
    });
  });


  describe('Testing routes',async()=>{
    describe('POST /register',()=>{
      it('Should return 403',(done)=>
      {
        const task=
        {
            email:"pallavisrija@gmail.com",
            completed:false
        }
        chai.request(app)
        .post('/register')
        .send(task)
        .end((err,res)=>
        {
          expect(res).to.have.status(403);
          done();
        });
      }).timeout(10000);
    });
  });
//});
