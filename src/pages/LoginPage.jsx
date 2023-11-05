import React, { useState } from "react";

export default function LoginPage() {
  const [isEmailAlertOn, setIsEmailAlertOn] = useState(false);

  const checkEmailInput = (t) => {
    let emailRule =
      /^([0-9a-zA-Z_\\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if (emailRule.test(t)) {
      return true;
    }
    return false;
  };

  const onEmailChangeHandler = (e) => {
    let t = checkEmailInput(e.currentTarget.value);
    if (!t) setIsEmailAlertOn(true);
    else setIsEmailAlertOn(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: "50px 0px 0px 0px" }}>
        이메일과 비밀번호를 입력해주세요
      </h1>
      <label htmlFor="email">
        <div style={{ margin: "30px 0px" }}>
          이메일 주소
          <div>
            <input
              type="email"
              id="email"
              style={{ width: "500px", height: "30px" }}
              onChange={onEmailChangeHandler}
            />
            {isEmailAlertOn && (
              <div style={{ color: "red", fontSize: "10px" }}>
                올바른 이메일을 입력해주세요
              </div>
            )}
          </div>
        </div>
      </label>
      <label htmlFor="pw">
        <div style={{ margin: "10px 0px" }}>
          비밀번호
          <div>
            <input
              type="password"
              id="pw"
              style={{ width: "500px", height: "30px" }}
            />
          </div>
        </div>
      </label>
      <input type="submit" id="pw" style={{ width: "500px", height: "30px" }} />
    </div>
  );
}
