// **0. divide 나누기 코드**
/*
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("0으로 나눌 수 없습니다!");
  }
  return a / b;
};

try {
  let result = divide(10, 0);
  console.log("결과:", result);
} catch (error) {
  console.error("오류 발생:", error.message);
} finally {
  console.log("try...catch 종료");
}
  */

// **1. JSON 데이터 파싱 예제**
/*
const string = '{"name": "John", "age": 30}';

try {
  const user = JSON.parse(string);
  console.log(user.name);
} catch (error) {
  console.error("JSON 파싱 오류:", error.message);
}

const poop = "{name: John, age: 30}";

try {
  const user1 = JSON.parse(poop);
  console.log(user1.name);
} catch (error) {
  console.error("오류 발생:", error.message);
}
*/

// **2. 네트워크 요청 예제**
/*
async function fetchData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error("서버 오류:", response.status);
    }

    let data = await response.json();
    console.log("데이터:", data);
  } catch (error) {
    console.error("네트워크 요청 중 오류 발생", error.message);
  } finally {
    console.log("네트워크 요청 종료!");
  }
}

fetchData("https://jsonplaceholder.typicode.com/users"); // 정상 동작
fetchData("https://invalid-url.com"); // 오류 발생
*/

// **3. 사용자 정의 오류 던지기 예제**
/*
const checkAge = (age) => {
  if (age < 18) {
    throw new Error("미성년자는 뒤로 가세요!");
  }
  return "접근 허용";
};

try {
  let result = checkAge(15);
  console.log("나이는", result);
} catch (error) {
  console.error("오류 발생", error.message);
} finally {
  console.log("나이 확인 완료!");
}
*/

// **4. 파일 읽기 예제**
/*
const fs = require("fs");
try {
  const file = fs.readFileSync("non-existent-file.txt", "utf8");
  console.log("파일", file);
} catch (error) {
  console.error("오류 발생", error.message);
} finally {
  console.log("파일 읽기 완료!");
}
  */

// **5. 배열 접근 예제**
/*
const array = [1, 2, 3];

try {
  const pepsi = array[5];
  if (pepsi === undefined) {
    throw new Error("배열 범위 벗어남");
  }
  console.log("펩시는", pepsi);
} catch (error) {
  console.error("오류 발생", error.message);
} finally {
  console.log("배열 접근 완료!");
}
*/

// **6. 연결된 시스템에서 연결 오류 처리 예제**
/*
const connectToServer = (server) => {
  if (!server.isConnected) {
    throw new Error("서버에 연결할 수 없습니다");
  }
  return "서버 연결 성공";
};

try {
  let server = { isConnected: false }; // 서버에 연결 실패 상황 가정
  let result = connectToServer(server);
  console.log(result);
} catch (error) {
  console.error("서버 연결 오류", error.message);
} finally {
  console.log("서버 연결 작업 완료!");
}
  */

// **7. API 호출 후 잘못된 데이터 처리 예제**
function processData(apiData) {
  try {
    if (!apiData || typeof apiData !== "object") {
      // apiData가 아니거나 형식이 object라면 throw!
      throw new Error("잘못된 데이터 형식입니다");
    }
    console.log("데이터 처리 완료", apiData);
  } catch (error) {
    console.error("데이터 처리 오류", error.message);
  } finally {
    console.log("데이터 처리 완료!");
  }
}

processData({ age: 30 });
