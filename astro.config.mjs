// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
    output: 'server',
    adapter: node({
        mode: 'standalone'
    }),
    server: {
        host: '127.0.0.1',
        port: 4321
    },
    vite: {
        server: {
            allowedHosts: [
                'zfelyx.de',
                'www.zfelyx.de',
                '5.175.245.142',
                'localhost',
                '127.0.0.1'
            ]
        }
    }
});