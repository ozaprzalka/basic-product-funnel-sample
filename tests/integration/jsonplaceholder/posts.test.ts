import { describe, beforeAll, it, expect, expectTypeOf } from 'vitest';
import { z } from 'zod';

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec

const postValidSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

const postInvalidSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
  createdAt: z.iso.datetime(),
});

describe('JSONPlaceholder', () => {
  describe('Posts', () => {
    let response: Response;
    let body: Array<unknown>;

    beforeAll(async () => {
      response = await fetch('https://jsonplaceholder.typicode.com/posts');

      body = (await response.json()) as Array<unknown>;
    }, BEFORE_ALL_TIMEOUT);

    it('Should have response status 200', () => {
      expect(response.status).toBe(200);
    });

    it('Should have content-type', () => {
      const contentType = `${response.headers.get('Content-Type')}`;

      expect(contentType.startsWith('application/json')).toBeTruthy();
    });

    it('Should have array in the body', () => {
      expectTypeOf(body).toBeArray();
    });

    it('Should have 100 items', () => {
      expect(body.length).toBe(100);
    });

    it('Should have a valid post scheme', () => {
      const firstPost = body[0];
      expect(firstPost).toBeDefined();

      const validResult = postValidSchema.safeParse(firstPost);
      expect(validResult).toBeDefined();
      expect(validResult.success).toBeTruthy();

      const invalidResult = postInvalidSchema.safeParse(firstPost);
      expect(invalidResult).toBeDefined();
      expect(invalidResult.success).toBeFalsy();
    });
  });
});
