import { copyFile, cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = process.cwd();
const output = resolve(root, 'dist');
const client = resolve(output, 'client');
const server = resolve(output, 'server');

await rm(output, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(server, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js', 'course-config.js']) {
  await copyFile(resolve(root, file), resolve(client, file));
}

await cp(resolve(root, 'assets'), resolve(client, 'assets'), { recursive: true });

await writeFile(resolve(server, 'index.js'), `export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;
    return env.ASSETS.fetch(new Request(new URL('/index.html', request.url), request));
  }
};
`);

console.log('Static course site built in dist/');
