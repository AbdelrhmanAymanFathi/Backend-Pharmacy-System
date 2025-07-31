pharmacy-backend/
├── src/
│   ├── config/
│   │   └── db.js              // إعداد الاتصال بقاعدة البيانات
│   ├── models/                // Sequelize models
│   ├── migrations/            // ملفات المايجريشن
│   ├── dtos/                  // تعريف DTOs
│   ├── repositories/          // Repository layer
│   ├── services/              // منطق الخدمة (business logic)
│   ├── controllers/           // Express controllers
│   ├── routes/                // تعريف الراوتس
│   ├── middleware/            // auth + error handler
│   └── app.js                 // إعداد express app
├── .env
├── .gitignore
├── package.json
└── server.js                 // لتشغيل السيرفر
