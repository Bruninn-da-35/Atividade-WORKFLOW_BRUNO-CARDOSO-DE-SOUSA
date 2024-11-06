const request = require('supertest');

test('Deve retornar erro 404 ao buscar por Impuros Jedi, um recurso inexistente', async () => {
    const resposta = await request('https://swapi.dev/api').get('/impure_jedi/');
   
    expect(resposta.status).toBe(404);
});