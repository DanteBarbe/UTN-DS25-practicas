import request from 'supertest' ;
import { app } from '../app' ;

describe ('GET /users' , () => {
    let token: string;

    beforeAll (async () => {
        const res = await request(app)
        . post('/auth/login' )
        . send({ email: 'dante_0312@hotmail.com' , password: 'Dante2004' });
        token = res.body.data.token;
    });
    test('debe retornar lista de usuarios' , async () => {
        const response = await request(app)
        . get('/users' )
        . set('Authorization' , `Bearer ${token}`);
        expect(response .status).toBe(200);
        expect(response .body.data).toBeInstanceOf (Array);
        expect(response .body.data.length).toBeGreaterThan (0);
        expect(response .body.data[0]).toHaveProperty ('email');
        expect(response .body.data[0]).toHaveProperty ('username' );
    });
    test('debe retornar 404 para usuario inexistente' , async () => {
        const response = await request(app)
        . get('/users/99999' )
        . set('Authorization' , `Bearer ${token}`);
        expect(response .status).toBe(404);
    });
});
