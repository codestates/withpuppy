require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const db = require('./models');
const Op = db.Sequelize.Op;
const schedule = require('node-schedule');

//1. initial setting
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://withpuppy.s3-website.ap-northeast-2.amazonaws.com',
      'http://final-client.s3-website.ap-northeast-2.amazonaws.com',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  }),
);

//2. routes
const userRoutes = require('./routes/userRoutes');
const puppyRoutes = require('./routes/puppyRoutes');
const mypageRoutes = require('./routes/mypageRoutes');
const pinRoutes = require('./routes/pinRoutes');

const authRoutes = require('./routes/authRoutes');
const kakaoRoutes = require('./routes/kakaoRoutes');
const googleRoutes = require('./routes/googleRoutes');

app.use('/user', userRoutes);
app.use('/puppy', puppyRoutes);
app.use('/mypage', mypageRoutes);
app.use('/map', pinRoutes);

app.use('/auth', authRoutes);
app.use('/kakao', kakaoRoutes);
app.use('/google', googleRoutes);

app.use('/', (req, res) => {
  res.send('hellow world');
});

app.use((req, res, next) => {
  res.status(404).json({
    data: null,
    message: 'not found',
  });
});
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({
    data: null,
    message: 'something wrong',
  });
});

//3. connection
const PORT = process.env.HTTPS_PORT || 80;

app.listen(PORT, () => {
  console.log(`now listening port : ${PORT}`);
});

db.sequelize
  .sync({ force: false, alter: true })
  .then(async () => {
    //@@default user for test
    let user = await db.User.findOne({ where: { email: 'test@test.com' } });
    if (!user) {
      user = await db.User.create({
        social: 'kakao',
        email: 'test@test.com',
        nickname: 'test',
        thumbImg:
          'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_110x110.jpg',
        phone: '010-1111-3123',
      });
    }

    const puppy = await user.getPuppy();
    if (!puppy) {
      const createDefaultPuppy = await db.Puppy.create({
        puppyName: 'mung',
        age: 1,
        gender: 'male',
        breed: 'dog',
        introcution: 'hello this puppy is really cute',
        puppyProfile:
          'https://raw.githubusercontent.com/chltjdrhd777/chltjdrhd777-final-prototype-imgs/main/outdoor-puppy-thumbnail.jpeg',
      });
      await user.setPuppy(createDefaultPuppy);
    }

    const pinPointers = await user.getPinpointers();
    if (!pinPointers.length) {
      const future = String(Date.parse(new Date('2100/12/12')));
      await db.Pinpointer.bulkCreate([
        {
          location: '서울 용산구',
          lat: 37.529789809685475 + 0.01,
          lng: 126.96470201104091 + 0.01,
          iconType: '히로',
          expire: future,
          PuppyId: 1,
          UserId: 1,
        },
        {
          location: '서울 용산구',
          lat: 37.529789809685475 + 0.02,
          lng: 126.96470201104091 + 0.01,
          iconType: '유나',
          expire: future,
          PuppyId: 1,
          UserId: 1,
        },
        {
          location: '서울 용산구',
          lat: 37.529789809685475 + 0.01,
          lng: 126.96470201104091 + 0.02,
          iconType: '카덴',
          expire: future,
          PuppyId: 1,
          UserId: 1,
        },
        {
          location: '서울 용산구',
          lat: 37.529789809685475 - 0.01,
          lng: 126.96470201104091 + 0.02,
          iconType: '펠릭스',
          expire: future,
          PuppyId: 1,
          UserId: 1,
        },
        {
          location: '서울 용산구',
          lat: 37.529789809685475 - 0.011,
          lng: 126.96470201104091 - 0.013,
          iconType: '펠릭스',
          expire: future,
          PuppyId: 1,
          UserId: 1,
        },
        {
          location: '서울 용산구',
          lat: 37.529789809685475 - 0.021,
          lng: 126.96470201104091 + 0.011,
          iconType: '펠릭스',
          expire: future,
          PuppyId: 1,
          UserId: 1,
        },
      ]);
    }

    const testUser = await db.User.findOne({
      where: { email: 'chltjdrhd777@gmail.com' },
    });
    const testPinpointer = await db.Pinpointer.findOne({
      where: { UserId: 2 },
    });
    if (testUser && !testPinpointer) {
      const future = String(Date.parse(new Date('2100/12/12')));
      const puppy = await testUser.getPuppy();

      const pinpointer = await db.Pinpointer.create({
        location: '서울 용산구',
        lat: 37.529789809685475 + 0.01,
        lng: 126.96470201104091 + 0.01,
        iconType: '히로',
        expire: future,
        PuppyId: puppy.id,
        UserId: testUser.id,
      });

      await db.Message.bulkCreate([
        {
          text: 'hello',
          UserId: 1,
          PinpointerId: pinpointer.dataValues.id,
        },
        {
          text: 'hi',
          UserId: 1,
          PinpointerId: pinpointer.dataValues.id,
        },
        {
          text: "what's up",
          UserId: 1,
          PinpointerId: pinpointer.dataValues.id,
        },
        {
          text: 'hey',
          UserId: 1,
          PinpointerId: pinpointer.dataValues.id,
        },
        {
          text: 'buddy?',
          UserId: 1,
          PinpointerId: pinpointer.dataValues.id,
        },
        {
          text: '...?',
          UserId: 1,
          PinpointerId: pinpointer.dataValues.id,
        },
      ]);
    }

    // db.Pinpointer.create({
    //   location: "테스트",
    //   lat: 37.529789809685475 - 0.021,
    //   lng: 126.96470201104091 + 0.011,
    //   iconType: "펠릭스",
    //   expire: 300,
    //   PuppyId: 1,
    //   UserId: 1,
    // });
    console.log('successfully initialized sequelize');
  })
  .catch((err) => console.log(err));

//# schedule
//Cron 문법 (운영체제 시간 타이밍)
const job = schedule.scheduleJob('00 09 * * 0-6', function () {
  db.Pinpointer.destroy({
    where: {
      expire: {
        [Op.lte]: Date.now(),
      },
    },
  });
});
