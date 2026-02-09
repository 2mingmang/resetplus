/**
 * 의뢰하기 폼 제출 시 메일로 전송하는 백엔드 API 예시
 *
 * 사용 방법:
 * 1. npm install express cors nodemailer dotenv
 * 2. .env 파일에 메일 설정 추가 (아래 참고)
 * 3. node api-example.js 로 서버 실행
 * 4. 프론트 .env 에 VITE_API_URL=http://localhost:3001/api/inquiry 설정
 */

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

// 환경 변수
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.gmail.com';
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER;        // 보내는 메일 주소
const SMTP_PASS = process.env.SMTP_PASS;        // 앱 비밀번호 또는 계정 비밀번호
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL;  // 의뢰 내용을 받을 메일 주소

const serviceNames = {
  personalRehab: '개인회생 보정대행',
  bankruptcy: '파산관재인 서류 대행',
  oldDebt: '오래된 부채 찾기(부채추적)',
  garnishment: '압류범위변경신청 대행',
  release: '통장압류해제 대행',
};

app.post('/api/inquiry', async (req, res) => {
  try {
    const { name, phone, service, period } = req.body;

    if (!name || !phone || !service) {
      return res.status(400).json({ error: '성함, 연락처, 의뢰 서비스를 입력해주세요.' });
    }

    if (!SMTP_USER || !SMTP_PASS || !RECIPIENT_EMAIL) {
      console.error('환경 변수 SMTP_USER, SMTP_PASS, RECIPIENT_EMAIL 을 설정해주세요.');
      return res.status(500).json({ error: '메일 설정이 되어 있지 않습니다.' });
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const serviceLabel = serviceNames[service] || service;
    const periodText = period || '미지정';

    const html = `
      <h2>[리셋플러스] 새로운 의뢰가 접수되었습니다</h2>
      <ul>
        <li><strong>성함</strong>: ${name}</li>
        <li><strong>연락처</strong>: ${phone}</li>
        <li><strong>의뢰 서비스</strong>: ${serviceLabel}</li>
        <li><strong>원하는 완료 기간</strong>: ${periodText}</li>
      </ul>
      <p>빠른 시간 내에 연락드리겠습니다.</p>
    `;

    const text = `[리셋플러스] 새로운 의뢰 접수\n\n성함: ${name}\n연락처: ${phone}\n의뢰 서비스: ${serviceLabel}\n완료 기간: ${periodText}`;

    await transporter.sendMail({
      from: `"리셋플러스 웹사이트" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      subject: `[리셋플러스] 의뢰 접수 - ${name} (${serviceLabel})`,
      text,
      html,
    });

    res.json({ success: true, message: '의뢰가 접수되었습니다.' });
  } catch (err) {
    console.error('의뢰 메일 전송 오류:', err);
    res.status(500).json({ error: '메일 전송 중 오류가 발생했습니다.' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`서버 실행 중: http://localhost:${PORT}`);
});

/**
 * .env 예시 (프로젝트 루트 또는 api-example.js 와 같은 폴더)
 *
 * SMTP_HOST=smtp.gmail.com
 * SMTP_PORT=587
 * SMTP_USER=your-email@gmail.com
 * SMTP_PASS=앱비밀번호
 * RECIPIENT_EMAIL=받을메일@example.com
 * PORT=3001
 *
 * Gmail: 구글 계정 > 보안 > 2단계 인증 후 '앱 비밀번호' 생성 후 SMTP_PASS 에 사용
 * 네이버/다음: 각 메일 SMTP 설정 참고
 */
