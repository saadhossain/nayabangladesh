const whitelist = ['http://localhost:3000', 'https://nayabangladesh.vercel.app/'];
const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

module.exports = corsOptions;