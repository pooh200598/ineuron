import supertest from "supertest";
import { createServer } from "./test.server"
import { item } from "../../model";
const app = createServer();

describe('item', () => {
    it('get all item list', async () => {
        const items = [{
            "id": 2,
            "name": "string1",
            "description": "jhguu",
            "price": "200",
            "createdAt": "2023-04-30T19:19:45.000Z",
            "updatedAt": "2023-04-30T19:19:45.000Z"
        }];
        jest.spyOn(item, 'findAll').mockReturnValueOnce(Promise.resolve(items));
        const { statusCode, body } = await supertest(app).get('/api/items');
        expect(statusCode).toBe(200);
        expect(body.length).toBe(1);
    });

    it('get item by id', async () => {
        const singleItem = {
            "id": 2,
            "name": "string1",
            "description": "jhguu",
            "price": "200",
            "createdAt": "2023-04-30T19:19:45.000Z",
            "updatedAt": "2023-04-30T19:19:45.000Z"
        };
        jest.spyOn(item, 'findOne').mockReturnValueOnce(Promise.resolve(singleItem));
        const { statusCode, body } = await supertest(app).get('/api/items/2');
        expect(statusCode).toBe(200);
        expect(body.name).toBe('string1');
    });

    it('create item', async () => {
        const singleItem = {
            "name": "Book",
            "description": "This is written by Mr. Nikhil Shah",
            "price": "200"
        };
        jest.spyOn(item, 'create').mockReturnValueOnce(Promise.resolve(singleItem));
        const { statusCode, body } = await supertest(app).post('/api/items').send(singleItem);
        expect(statusCode).toBe(200);
        expect(body.name).toBe('Book');
        expect(body.description).toBe('This is written by Mr. Nikhil Shah');
        expect(body.price).toBe('200');

    });

    it('update item', async () => {
        const existData = {
            "id": 3,
            "name": "book",
            "description": "jhguu",
            "price": "200",
            "createdAt": "2023-04-30T19:19:51.000Z",
            "updatedAt": "2023-05-01T07:13:00.000Z"
        }
        jest.spyOn(item, 'findByPk').mockReturnValueOnce(Promise.resolve(existData))
        jest.spyOn(item, 'update').mockReturnValueOnce(Promise.resolve(true));
        const { statusCode, body } = await supertest(app).put('/api/items/3');
        expect(statusCode).toBe(200);
        expect(body.msg).toBe('Item Is Updated');

    });
    it('delete item', async () => {
        const existData = {
            "id": 3,
            "name": "book",
            "description": "jhguu",
            "price": "200",
            "createdAt": "2023-04-30T19:19:51.000Z",
            "updatedAt": "2023-05-01T07:13:00.000Z"
        }
        jest.spyOn(item, 'findByPk').mockReturnValueOnce(Promise.resolve(existData))
        jest.spyOn(item, 'destroy').mockReturnValueOnce(Promise.resolve(true));
        const { statusCode, body } = await supertest(app).delete('/api/items/3');
        expect(statusCode).toBe(200);
        expect(body.msg).toBe('Item Is deleted');

    });

    

})
