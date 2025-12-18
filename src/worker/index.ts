import { Hono } from "hono";

// Define Env interface for Cloudflare Workers
interface Env {
    // Add environment bindings here if needed
}

const app = new Hono<{ Bindings: Env }>();

export default app;
