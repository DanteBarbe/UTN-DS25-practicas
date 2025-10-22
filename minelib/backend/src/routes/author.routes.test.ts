import request from 'supertest' ;
import { app } from '../app' ;

describe ('GET /authors' , () => {
    let token: string;

    beforeAll (async () => {
        const res = await request(app)
        . post('/auth/login' )
        . send({ email: 'dante_0312@hotmail.com' , password: 'Dante2004' });
        token = res.body.data.token;
    });
    test('debe retornar lista de autores' , async () => {
        const response = await request(app)
        . get('/authors' )
        . set('Authorization' , `Bearer ${token}`);
        expect(response .status).toBe(200);
        expect(response .body.data).toBeInstanceOf (Array);
        expect(response .body.data.length).toBeGreaterThan (0);
        expect(response .body.data[0]).toHaveProperty ('name');
        expect(response .body.data[0]).toHaveProperty ('lastname' );
    });
    test('debe retornar 404 para autor inexistente' , async () => {
        const response = await request(app)
        . get('/authors/99999' )
        . set('Authorization' , `Bearer ${token}`);
        expect(response .status).toBe(404);
    });
});
