import request from 'supertest' ;
import { app } from '../app' ;

describe ('GET /books' , () => {
    let token: string;

    beforeAll (async () => {
        const res = await request(app)
        . post('/auth/login' )
        . send({ email: 'dante_0312@hotmail.com' , password: 'Dante2004' });
        token = res.body.data.token;
    });
    test('debe retornar lista de libros' , async () => {
        const response = await request(app)
        . get('/books' )
        . set('Authorization' , `Bearer ${token}`);
        expect(response .status).toBe(200);
        expect(response .body.data).toBeInstanceOf (Array);
        expect(response .body.data.length).toBeGreaterThan (0);
        expect(response .body.data[0]).toHaveProperty ('title');
        expect(response .body.data[0]).toHaveProperty ('description' );
    });
    test('debe retornar 404 para libro inexistente' , async () => {
        const response = await request(app)
        . get('/books/99999' )
        . set('Authorization' , `Bearer ${token}`);
        expect(response .status).toBe(404);
    });
});
