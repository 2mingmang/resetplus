# 의뢰하기 메일 전송 설정

의뢰하기 폼 제출 시 지정한 이메일로 내용이 전송되도록 설정하는 방법입니다.

## 1. 백엔드 서버 실행 (api-example.js)

```bash
npm install express cors nodemailer dotenv
node api-example.js
```

## 2. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 만들고 아래를 채워주세요.

```env
# 메일 발송 (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=보내는메일@gmail.com
SMTP_PASS=앱비밀번호
RECIPIENT_EMAIL=의뢰받을메일@example.com

# 서버 포트
PORT=3001
```

- **Gmail**: 구글 계정 → 보안 → 2단계 인증 사용 후 [앱 비밀번호](https://myaccount.google.com/apppasswords) 생성 후 `SMTP_PASS`에 입력
- **네이버/다음**: 각 메일의 SMTP 설정 문서를 참고해 `SMTP_HOST`, `SMTP_PORT` 등 설정

## 3. 프론트엔드에서 API 주소 지정

프론트엔드 루트에 `.env` 파일을 만들고:

```env
VITE_API_URL=http://localhost:3001/api/inquiry
```

실제 서버 주소로 배포할 때는 `https://도메인/api/inquiry` 형태로 바꾸면 됩니다.

## 4. 동작 방식

1. 사용자가 "지금 바로 의뢰하기" 폼에 성함, 연락처, 서비스, 완료 기간을 입력 후 제출
2. 프론트엔드가 `POST /api/inquiry`로 JSON 전송
3. 백엔드가 `RECIPIENT_EMAIL`로 위 내용을 메일로 전송

카톡 기능은 제거되었고, 의뢰 내용은 메일로만 전달됩니다.
