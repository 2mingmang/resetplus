# 리셋플러스 (ResetPlus)

개인회생·파산 서류 대행 전문 회사 리셋플러스의 랜딩 페이지입니다.

## 실행 방법

**필수 요구사항:** Node.js

1. 의존성 설치:
   ```bash
   npm install
   ```
2. 개발 서버 실행:
   ```bash
   npm run dev
   ```
3. 빌드:
   ```bash
   npm run build
   ```

## GitHub Pages 배포

- **접속 주소:** https://2mingmang.github.io/resetplus/
- `index.tsx`는 소스 파일이므로 브라우저에서 열 수 없습니다. 위 주소로 접속하세요.
- `main` 브랜치에 push하면 GitHub Actions가 빌드 후 자동 배포합니다.
- 최초 1회: 리포지토리 **Settings → Pages → Build and deployment → Source** 에서 **GitHub Actions** 를 선택하세요.

## 의뢰 폼 → 이메일 받기 (Formspree)

1. **https://formspree.io** 접속 후 **Get started** 또는 **Sign up** 으로 가입(로그인).
2. 로그인 후 **New form** 또는 **Create Form** 클릭.
3. **Email** 에 받을 메일 주소 입력 (예: `2mingmang@gmail.com`).
4. **Form name** 은 아무거나 (예: `리셋플러스 의뢰`).
5. 만들어진 폼의 URL을 확인합니다.  
   예: `https://formspree.io/f/xjvqjqeq` → **폼 ID는 `xjvqjqeq`** (마지막 부분만).
6. 프로젝트 루트에 `.env` 파일 만들고 아래 한 줄 추가 (ID만 본인 걸로 바꾸기):
   ```
   VITE_FORMSPREE_FORM_ID=xjvqjqeq
   ```
7. 개발 서버 다시 실행 (`npm run dev`). 이제 의뢰하기 버튼 제출 시 위 이메일로 메일이 옵니다.
8. 배포(GitHub Pages 등)할 때: 사용하는 환경에 `VITE_FORMSPREE_FORM_ID` 값을 설정해야 합니다. (예: GitHub Actions에서 Secrets에 넣고 빌드 시 주입)
