// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Figures", () => {
    describe("GET /", () => {
        it("should get list of all figures", (done) => {
             chai.request(app)
                 .get('/api/figures')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        it("should get a single student record", (done) => {
             const id = 1;
             chai.request(app)
                 .get(`/api/figures/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
        
        /*
		it("should not get a single student record", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
		 */
    });
});
