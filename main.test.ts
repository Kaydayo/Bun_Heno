import { describe, expect, it } from "bun:test";
import app from './src/index'

describe('should run test', () => {
    it('should return successful response with status code 200', async () => {
        const req = new Request('http://localhost/')
        const res = await app.fetch(req)
        expect(res.status).toBe(200)
    })
})