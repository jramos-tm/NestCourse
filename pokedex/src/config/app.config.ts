export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: 'mongodb://localhost:27017/nest-pokemon',
    port: process.env.PORT || 3002,
    defaultLimit: process.env.DEFAULT_LIMIT || 7
})