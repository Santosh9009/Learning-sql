import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgres://knwivxbx:Wa87nsQ8h-XYa3pVDtDFaku0Zro3jIeg@raja.db.elephantsql.com/knwivxbx");
    await client.connect();
    return client;
}