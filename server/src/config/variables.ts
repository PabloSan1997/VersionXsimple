import 'dotenv/config';

export const variables = {
    DB_URL:process.env.DB_URL,
    KEY_JWT:process.env.KEY_JWT,
    PORT:process.env.PORT || 3000,
    HEADER_ASSES:process.env.HEADER_ASSES
}